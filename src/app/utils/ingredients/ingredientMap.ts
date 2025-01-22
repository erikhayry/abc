import { Cocktail, Ingredient } from '@/app/components/Cocktail/types';

type IngredientMap = { [key: string]: number };

function toCountedIngredient(map: IngredientMap, name: string) {
  if (map[name]) {
    map[name] += 1;
  } else {
    map[name] = 1;
  }
  return map;
}

function toIngredientNames({ names }: Ingredient) {
  return names;
}

function toIngredientsMap(map: IngredientMap, { ingredients = [] }: Cocktail) {
  return ingredients
    .map(toIngredientNames)
    .flat()
    .reduce(toCountedIngredient, map);
}

export function getIngredientMap(cocktails: Cocktail[]): IngredientMap {
  return cocktails.reduce<IngredientMap>(toIngredientsMap, {});
}
