import { screen } from '@testing-library/react';
import { Filter, FilterProps } from '@/app/components/Filter/Filter';
import { renderComponent } from '@/app/components/test/renderComponent';
import { text } from '@/app/components/Filter/tests/utils/selectors';

export const getIngredientFilter = (name: string, numberOfResults: number) =>
  screen.getByLabelText(
    text.ingredientFilter(name, numberOfResults.toString()),
  );

export function render(props: Partial<FilterProps> = {}) {
  const { cocktails = [], onChange = jest.fn() } = props;
  const onChangeSpy = jest.fn(onChange);
  renderComponent(<Filter cocktails={cocktails} onChange={onChangeSpy} />);
  onChangeSpy.mockClear();

  return {
    getIngredientFilter,
    getOnChangeSpy: () => onChangeSpy,
  };
}
