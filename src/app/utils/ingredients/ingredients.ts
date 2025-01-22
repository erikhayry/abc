import { Cocktail } from '@/app/components/Cocktail/types';
import { getIngredientMap } from '@/app/utils/ingredients/ingredientMap';

function toIngredientList([names, count]: [name: string, count: number]) {
  return { names, count };
}

function byNumberOfCocktails(a: { count: number }, b: { count: number }) {
  return b.count - a.count;
}

export function getIngredientsFrom(
  cocktails: Cocktail[],
): { names: string; count: number }[] {
  return Object.entries(getIngredientMap(cocktails))
    .map(toIngredientList)
    .sort(byNumberOfCocktails);
}
