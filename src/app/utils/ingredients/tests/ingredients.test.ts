import MockCocktails from '@/app/tests/mocks/mockCocktails';
import { getIngredientsFrom } from '@/app/utils/ingredients/ingredients';

describe('Ingredients', () => {
  it('should return every ingredient counted and sorted', () => {
    const ingredients = getIngredientsFrom(MockCocktails);

    expect(ingredients[0].names).toBe('Ingredient 1');
    expect(ingredients[0].count).toBe(4);
    expect(ingredients[1].names).toBe('Ingredient 2');
    expect(ingredients[1].count).toBe(2);
    expect(ingredients[2].names).toBe('Ingredient 3');
    expect(ingredients[2].count).toBe(2);
    expect(ingredients[3].names).toBe('Ingredient B');
    expect(ingredients[3].count).toBe(2);
    expect(ingredients[4].names).toBe('Ingredient C');
    expect(ingredients[4].count).toBe(2);
    expect(ingredients[5].names).toBe('Ingredient A');
    expect(ingredients[5].count).toBe(1);
  });
});
