import { render } from './utils/render';
import MockCocktails from '@/app/tests/mocks/mockCocktails';
import userEvent from '@testing-library/user-event';

describe('Filter', () => {
  it('should show all ingredients', () => {
    const { getIngredientFilter } = render({ cocktails: MockCocktails });

    expect(getIngredientFilter('Ingredient 1', 4)).toBeInTheDocument();
    expect(getIngredientFilter('Ingredient 3', 2)).toBeInTheDocument();
    expect(getIngredientFilter('Ingredient 2', 2)).toBeInTheDocument();
    expect(getIngredientFilter('Ingredient B', 2)).toBeInTheDocument();
    expect(getIngredientFilter('Ingredient C', 2)).toBeInTheDocument();
    expect(getIngredientFilter('Ingredient A', 1)).toBeInTheDocument();
  });

  it('should return list of selected ingredients on change', async () => {
    const { getIngredientFilter, getOnChangeSpy } = render({
      cocktails: MockCocktails,
    });

    await userEvent.click(getIngredientFilter('Ingredient 1', 4));
    await userEvent.click(getIngredientFilter('Ingredient 3', 2));

    expect(getOnChangeSpy()).toHaveBeenLastCalledWith([
      'Ingredient 1',
      'Ingredient 3',
    ]);
  });

  it('removes ingredient from selected ingredients when unchecked', async () => {
    const { getIngredientFilter, getOnChangeSpy } = render({
      cocktails: MockCocktails,
    });

    await userEvent.click(getIngredientFilter('Ingredient 1', 4));
    await userEvent.click(getIngredientFilter('Ingredient 3', 2));
    await userEvent.click(getIngredientFilter('Ingredient 1', 4));

    expect(getOnChangeSpy()).toHaveBeenLastCalledWith(['Ingredient 3']);
  });
});
