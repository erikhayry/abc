import {
  CocktailList,
  CocktailListProps,
} from '@/app/components/CocktailList/CocktailList';
import { screen, within } from '@testing-library/react';
import React from 'react';
import { renderComponent } from '@/app/components/test/renderComponent';
import { getDoneCheckbox } from '@/app/components/Cocktail/tests/utils/render';

const getCocktailListItems = () => screen.getAllByRole('heading', { level: 3 });
const getCocktailListForLetter = (letter: string) =>
  screen.getByRole('list', { name: letter });
const toTextContent = ({ textContent }: HTMLElement) => textContent || '';

export function renderCocktailList({ cocktails }: CocktailListProps) {
  renderComponent(<CocktailList cocktails={cocktails} />);

  return {
    getCocktailListForLetter,
    getCocktailListItems: () => getCocktailListItems().map(toTextContent),
    getCocktailListItemNamesForLetter: (letter: string) =>
      within(getCocktailListForLetter(letter))
        .getAllByRole('heading', { level: 3 })
        .map(toTextContent),
    getDoneCheckbox: (name: string) =>
      getDoneCheckbox({
        done: false,
        onChange(): void {},
        cocktail: { id: 1, name },
      }),
  };
}
