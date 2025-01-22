export function updateIngredients(
  previousSelectedIngredients: string[],
  ingredient: string,
) {
  return previousSelectedIngredients.includes(ingredient)
    ? previousSelectedIngredients.filter((item) => item !== ingredient)
    : [...previousSelectedIngredients, ingredient];
}
