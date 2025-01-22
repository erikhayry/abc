import { renderCocktailList } from '@/app/components/CocktailList/tests/utils/render';
import MockCocktail, {
  MOCKTAIL_1,
  MOCKTAIL_1_ID,
  MOCKTAIL_2,
  MOCKTAIL_3,
  MOCKTAIL_6,
  SUBLIST_MOCKTAIL_1,
  SUBLIST_MOCKTAIL_2,
} from '@/app/tests/mocks/mockCocktails';
import storage from '@/app/utils/storage/storage';
import { MOCK_NOW } from '@/app/tests/mocks/mockDate';
import userEvent from '@testing-library/user-event';

const mockCocktailListProps = {
  cocktails: MockCocktail,
  ingredients: [], // Add appropriate mock ingredients if needed
};

describe('CocktailList', () => {
  afterEach(() => {
    storage.remove(MOCKTAIL_1_ID.toString());
  });

  it('should render list alphabetically', () => {
    const { getCocktailListItems } = renderCocktailList(mockCocktailListProps);

    expect(getCocktailListItems()).toHaveLength(6);
    expect(getCocktailListItems()[0]).toBe(SUBLIST_MOCKTAIL_1);
    expect(getCocktailListItems()[1]).toBe(MOCKTAIL_1);
    expect(getCocktailListItems()[2]).toBe(SUBLIST_MOCKTAIL_2);
    expect(getCocktailListItems()[3]).toBe(MOCKTAIL_2);
    expect(getCocktailListItems()[4]).toBe(MOCKTAIL_3);
    expect(getCocktailListItems()[5]).toBe(MOCKTAIL_6);
  });

  it('should render one list per letter in alphabet', () => {
    const { getCocktailListItemNamesForLetter, getCocktailListForLetter } =
      renderCocktailList(mockCocktailListProps);

    expect(getCocktailListForLetter('A')).toBeInTheDocument();
    expect(getCocktailListForLetter('B')).toBeInTheDocument();
    expect(getCocktailListForLetter('C')).toBeInTheDocument();
    expect(getCocktailListItemNamesForLetter('A')[0]).toBe(SUBLIST_MOCKTAIL_1);
    expect(getCocktailListItemNamesForLetter('A')[1]).toBe(MOCKTAIL_1);
    expect(getCocktailListItemNamesForLetter('B')[0]).toBe(SUBLIST_MOCKTAIL_2);
    expect(getCocktailListItemNamesForLetter('B')[1]).toBe(MOCKTAIL_2);
    expect(getCocktailListItemNamesForLetter('C')[0]).toBe(MOCKTAIL_3);
    expect(getCocktailListItemNamesForLetter('C')[1]).toBe(MOCKTAIL_6);
  });

  it('should get done cocktails from storage', () => {
    storage.set(MOCKTAIL_1_ID.toString(), MOCK_NOW.toString());

    const { getDoneCheckbox } = renderCocktailList(mockCocktailListProps);

    expect(getDoneCheckbox(MOCKTAIL_1)).toBeChecked();
    expect(getDoneCheckbox(MOCKTAIL_2)).not.toBeChecked();
  });

  it('should update done cocktail in storage', async () => {
    const { getDoneCheckbox } = renderCocktailList(mockCocktailListProps);

    await userEvent.click(getDoneCheckbox(MOCKTAIL_1));

    expect(getDoneCheckbox(MOCKTAIL_1)).toBeChecked();
    expect(storage.get(MOCKTAIL_1_ID.toString())).toBe(MOCK_NOW.toString());
  });

  it('should reset done cocktail in storage', async () => {
    const { getDoneCheckbox } = renderCocktailList(mockCocktailListProps);

    await userEvent.click(getDoneCheckbox(MOCKTAIL_1));
    await userEvent.click(getDoneCheckbox(MOCKTAIL_1));

    expect(getDoneCheckbox(MOCKTAIL_1)).not.toBeChecked();
    expect(storage.get(MOCKTAIL_1)).toBe(null);
  });
});
