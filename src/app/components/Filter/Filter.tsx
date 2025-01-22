import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cocktail } from '@/app/components/Cocktail/types';
import { getIngredientsFrom } from '@/app/utils/ingredients/ingredients';
import { updateIngredients } from '@/app/components/Filter/utils/updateIngredients';

export interface FilterProps {
  cocktails: Cocktail[];
  onChange: (selectedIngredients: string[]) => void;
}

export const Filter = ({ cocktails, onChange }: FilterProps) => {
  const { t } = useTranslation();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    onChange(selectedIngredients);
  }, [onChange, selectedIngredients]);

  const handleCheckboxChange = (ingredient: string) => {
    setSelectedIngredients((previousSelectedIngredients) =>
      updateIngredients(previousSelectedIngredients, ingredient),
    );
  };

  return (
    <form className="flex flex-wrap">
      {getIngredientsFrom(cocktails).map((ingredient, index) => (
        <div
          key={ingredient.names}
          className="inline-flex items-center mr-2 mb-2"
        >
          <input
            type="checkbox"
            id={`ingredient-${index}`}
            className="hidden"
            name={t(ingredient.names)}
            onChange={() => handleCheckboxChange(ingredient.names)}
          />
          <label
            htmlFor={`ingredient-${index}`}
            className="cursor-pointer p-2 bg-gray-200"
          >
            {ingredient.names} | {ingredient.count}
          </label>
        </div>
      ))}
    </form>
  );
};
