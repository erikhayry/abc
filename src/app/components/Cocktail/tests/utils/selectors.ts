import { CocktailProps } from '@/app/components/Cocktail/CocktailItem';
import { DONE } from '@/app/i18n';
import { Selector } from '@/app/tests/types';

export const INSTRUCTIONS_LABEL = 'Instructions';

export const text = {
  instructions: () => INSTRUCTIONS_LABEL,
  note: (props?: CocktailProps) => props?.cocktail.note || '',
};

type Role = {
  header: (name: string) => Selector;
  ingredients: () => Selector;
  ingredientsList: () => Selector;
  doneCheckbox: (name: string) => Selector;
};

export const role: Role = {
  header: (name: string) => ['heading', { name, level: 3, exact: true }],
  ingredients: () => ['listitem'],
  ingredientsList: () => [
    'list',
    {
      name: `ingredients list`,
    },
  ],
  doneCheckbox: (name: string) => ['checkbox', { name: `${name} ${DONE}` }],
};
