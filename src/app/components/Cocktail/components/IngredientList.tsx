import React from 'react';
import { IngredientItem } from '@/app/components/Cocktail/components/IngredientItem';
import { Ingredient } from '@/app/components/Cocktail/types';
import { useTranslation } from 'react-i18next';
import { getKey } from '@/app/components/Cocktail/components/utils/getKey';

interface IngredientListProps {
  ingredients: Ingredient[];
}

export const IngredientList = ({ ingredients }: IngredientListProps) => {
  const { t } = useTranslation();

  return (
    <ul
      className="ingredients-list list-disc pl-4"
      aria-label={t('ingredientsList')}
    >
      {ingredients.map((ingredient) => (
        <li key={getKey(ingredient)} className="ingredient-item mb-2">
          <IngredientItem names={ingredient.names} amount={ingredient.amount} />
        </li>
      ))}
    </ul>
  );
};
