import { Cocktail, Ingredient } from '@/app/components/Cocktail/types';

function hasCocktailIngredientInFilter(
  { ingredients = [] }: Cocktail,
  filter: string,
) {
  const isInFilter = ({ names }: Ingredient) => names.includes(filter);

  return ingredients.some(isInFilter);
}

function hasCocktailEveryIngredientInFilter(
  cocktail: Cocktail,
  selectedIngredients: string[],
) {
  const isInCocktail = (filter: string) =>
    hasCocktailIngredientInFilter(cocktail, filter);

  return selectedIngredients.every(isInCocktail);
}

export function filterCocktails(
  cocktails: Cocktail[],
  selectedIngredients: string[],
): Cocktail[] {
  if (selectedIngredients.length === 0) {
    return cocktails;
  }

  const outCocktailsWithoutEveryIngredientInFilter = (cocktail: Cocktail) =>
    hasCocktailEveryIngredientInFilter(cocktail, selectedIngredients);

  return cocktails.filter(outCocktailsWithoutEveryIngredientInFilter);
}
