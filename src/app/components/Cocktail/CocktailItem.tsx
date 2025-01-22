import { Cocktail as CocktailType } from '@/app/components/Cocktail/types';
import { useTranslation } from 'react-i18next';
import { DoneCheckbox } from '@/app/components/Cocktail/components/DoneCheckbox';
import { hasIngredients } from '@/app/components/Cocktail/utils/hasIngredients';
import { IngredientList } from '@/app/components/Cocktail/components/IngredientList';
import { ChangeEvent } from 'react';

export interface CocktailProps {
  cocktail: CocktailType;
  done: boolean;
  onChange: (field: string, value: boolean) => void;
}

export const CocktailItem = ({
  cocktail: { name, ingredients, instruction, note },
  done,
  onChange,
}: CocktailProps) => {
  const { t } = useTranslation();

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange('done', event.target.checked);
  };

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">{name}</h3>
      {hasIngredients(ingredients) ? (
        <IngredientList ingredients={ingredients} />
      ) : null}
      {instruction ? (
        <section
          className="instructions-section"
          aria-label={t('instructions')}
        >
          {instruction}
        </section>
      ) : null}
      {note ? <section className="note-section italic">{note}</section> : null}
      <DoneCheckbox name={name} done={done} onChange={handleCheckboxChange} />
    </div>
  );
};
