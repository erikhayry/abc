// src/app/tests/mocks/mockCocktails.ts

import { Cocktail } from '@/app/components/Cocktail/types';

export const MOCKTAIL_1 = 'AB_Mocktail 1';
export const MOCKTAIL_1_ID = 1;
export const MOCKTAIL_2 = '"BC"_Mocktail 2';
export const MOCKTAIL_3 = 'C_Mocktail 3';
export const SUBLIST_MOCKTAIL_1 = 'AA_Sublist Mocktail 1';
export const SUBLIST_MOCKTAIL_2 = 'BA_Sublist Mocktail 2';
export const MOCKTAIL_6 = 'C_Mocktail 6';

const mockCocktails: Cocktail[] = [
  {
    name: MOCKTAIL_3,
    id: 3,
    ingredients: [
      { names: ['Ingredient 1'], amount: '1' },
      { names: ['Ingredient 2'], amount: '2' },
      { names: ['Ingredient 3'], amount: '3' },
    ],
    instruction: 'Mix all ingredients and serve chilled.',
  },
  {
    name: MOCKTAIL_1,
    id: MOCKTAIL_1_ID,
    ingredients: [
      { names: ['Ingredient 1'], amount: '1' },
      { names: ['Ingredient 3'], amount: '3' },
    ],
    instruction: 'Mix all ingredients and serve chilled.',
  },
  {
    name: MOCKTAIL_2,
    id: 2,
    ingredients: [
      { names: ['Ingredient 1'], amount: '1' },
      { names: ['Ingredient 2'], amount: '2' },
    ],
    instruction: 'Mix all ingredients and serve chilled.',
  },

  {
    name: SUBLIST_MOCKTAIL_1,
    id: 4,
    ingredients: [
      { names: ['Ingredient A'], amount: '1' },
      { names: ['Ingredient B'], amount: '2' },
      { names: ['Ingredient C'], amount: '3' },
    ],
    instruction: 'Mix all ingredients and serve chilled.',
  },
  {
    name: SUBLIST_MOCKTAIL_2,
    id: 5,
    ingredients: [
      { names: ['Ingredient 1', 'Ingredient B'], amount: '2' },
      { names: ['Ingredient C'], amount: '3' },
    ],
    instruction: 'Mix all ingredients and serve chilled.',
  },
  {
    name: MOCKTAIL_6,
    id: 6,
    instruction: 'Serve chilled.',
  },
];

export default mockCocktails;
