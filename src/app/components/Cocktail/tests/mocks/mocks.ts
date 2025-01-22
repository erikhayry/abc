import { CocktailProps } from '@/app/components/Cocktail/CocktailItem';

export const TITLE_MOCK = 'TILE_MOCK';
export const INGREDIENTS_MOCK_1 = 'INGREDIENTS_MOCK_1';
export const INGREDIENTS_MOCK_2 = 'INGREDIENTS_MOCK_2';
export const INGREDIENTS_MOCK_3 = 'INGREDIENTS_MOCK_3';
export const INGREDIENTS_MOCK_4 = 'INGREDIENTS_MOCK_4';
export const INGREDIENTS_MOCK_5 = 'Extra Ingredient String';
export const INGREDIENTS_MOCK_6 = 'INGREDIENTS_MOCK_6';
export const INSTRUCTIONS_MOCK = 'Mix all ingredients and serve chilled.';
export const NOTE_MOCK = 'This is a mock note.';

export const props: CocktailProps = {
  cocktail: {
    name: TITLE_MOCK,
    ingredients: [
      { names: [INGREDIENTS_MOCK_1, INGREDIENTS_MOCK_6], amount: '1' },
      { names: [INGREDIENTS_MOCK_2], amount: '2' },
      { names: [INGREDIENTS_MOCK_3], amount: '250' },
      { names: [INGREDIENTS_MOCK_4] },
      { names: [INGREDIENTS_MOCK_5] },
    ],
    instruction: INSTRUCTIONS_MOCK,
    note: NOTE_MOCK,
    id: 1,
  },
  done: false,
  onChange: jest.fn(),
};
