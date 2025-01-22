import React from 'react';
import {
  CocktailItem,
  CocktailProps,
} from '@/app/components/Cocktail/CocktailItem';
import { renderComponent } from '@/app/components/test/renderComponent';
import { screen } from '@testing-library/react';
import { role, text } from '@/app/components/Cocktail/tests/utils/selectors';

export const getDoneCheckbox = (props: CocktailProps) =>
  screen.getByRole(...role.doneCheckbox(props.cocktail.name));

export const renderCocktail = (props: CocktailProps) => {
  renderComponent(<CocktailItem {...props} />);

  return {
    getHeader: () => screen.getByRole(...role.header(props.cocktail.name)),
    getIngredients: () => screen.getAllByRole(...role.ingredients()),
    getIngredientsList: () => screen.getByRole(...role.ingredientsList()),
    queryIngredientsList: () => screen.queryByRole(...role.ingredientsList()),
    getInstructions: () => screen.getByLabelText(text.instructions()),
    queryInstructions: () => screen.queryByLabelText(text.instructions()),
    getNote: () => screen.getByText(text.note(props)),
    getDoneCheckbox,
  };
};
