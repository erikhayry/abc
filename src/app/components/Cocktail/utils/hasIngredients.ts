import { Ingredient } from '@/app/components/Cocktail/types';

export function hasIngredients(
  ingredients: (Ingredient | string)[] | undefined,
): ingredients is (Ingredient | string)[] {
  return Array.isArray(ingredients) && ingredients.length > 0;
}
