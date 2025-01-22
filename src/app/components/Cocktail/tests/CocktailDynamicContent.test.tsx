import { renderCocktail } from '@/app/components/Cocktail/tests/utils/render';
import { props } from '@/app/components/Cocktail/tests/mocks/mocks';
import userEvent from '@testing-library/user-event';

describe('CocktailItem component', () => {
  describe('Checkbox state', () => {
    it('should not be checked as done', () => {
      const { getDoneCheckbox } = renderCocktail({ ...props, done: false });

      expect(getDoneCheckbox(props)).not.toBeChecked();
    });

    it('should be checked as done', () => {
      const { getDoneCheckbox } = renderCocktail({
        ...props,
        done: true,
      });

      expect(getDoneCheckbox(props)).toBeChecked();
    });
  });

  describe('onChange callback', () => {
    it('should have an onChange callback when done is false', async () => {
      const onChangeSpy = jest.fn();
      const { getDoneCheckbox } = renderCocktail({
        ...props,
        done: false,
        onChange: onChangeSpy,
      });

      await userEvent.click(getDoneCheckbox(props));

      expect(onChangeSpy).toHaveBeenCalledWith('done', true);
    });

    it('should have an onChange callback when done is true', async () => {
      const onChangeSpy = jest.fn();
      const { getDoneCheckbox } = renderCocktail({
        ...props,
        done: true,
        onChange: onChangeSpy,
      });

      await userEvent.click(getDoneCheckbox(props));

      expect(onChangeSpy).toHaveBeenCalledWith('done', false);
    });
  });
});
