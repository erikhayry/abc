import { renderCocktail } from '@/app/components/Cocktail/tests/utils/render';
import {
  INGREDIENTS_MOCK_1,
  INGREDIENTS_MOCK_2,
  INGREDIENTS_MOCK_3,
  INGREDIENTS_MOCK_4,
  INGREDIENTS_MOCK_5,
  INGREDIENTS_MOCK_6,
  INSTRUCTIONS_MOCK,
  props,
} from '@/app/components/Cocktail/tests/mocks/mocks';

describe('CocktailItem component', () => {
  describe('Header', () => {
    it('should show title as header', () => {
      const selectors = renderCocktail(props);
      expect(selectors.getHeader()).toBeInTheDocument();
    });
  });

  describe('Ingredients', () => {
    it('should not render ingredients if not provided', () => {
      const selectors = renderCocktail({
        ...props,
        cocktail: { ...props.cocktail, ingredients: undefined },
      });
      expect(selectors.queryIngredientsList()).not.toBeInTheDocument();
    });

    it('should show ingredients with units', () => {
      const selectors = renderCocktail(props);

      expect(selectors.getIngredientsList()).toBeInTheDocument();
      expect(selectors.getIngredients()).toHaveLength(5);
      expect(selectors.getIngredients()[0]).toHaveTextContent(
        `1 ${INGREDIENTS_MOCK_1} or ${INGREDIENTS_MOCK_6}`,
      );
      expect(selectors.getIngredients()[1]).toHaveTextContent(
        `2 ${INGREDIENTS_MOCK_2}`,
      );
      expect(selectors.getIngredients()[2]).toHaveTextContent(
        `250 ${INGREDIENTS_MOCK_3}`,
      );
      expect(selectors.getIngredients()[3]).toHaveTextContent(
        INGREDIENTS_MOCK_4,
      );
      expect(selectors.getIngredients()[4]).toHaveTextContent(
        INGREDIENTS_MOCK_5,
      );
    });
  });

  describe('Instructions', () => {
    it('should have instructions', () => {
      const selectors = renderCocktail(props);
      expect(selectors.getInstructions()).toHaveTextContent(INSTRUCTIONS_MOCK);
    });
    it('should not render instructions if not provided', () => {
      const selectors = renderCocktail({
        ...props,
        cocktail: { ...props.cocktail, instruction: undefined },
      });
      expect(selectors.queryInstructions()).not.toBeInTheDocument();
    });
  });

  describe('Note', () => {
    it('should render note if provided', () => {
      const selectors = renderCocktail({
        ...props,
        cocktail: { ...props.cocktail },
      });
      expect(selectors.getNote()).toBeInTheDocument();
    });
  });
});
