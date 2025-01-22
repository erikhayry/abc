import React from 'react';
import { useTranslation } from 'react-i18next';

interface IngredientItemProps {
  names: string[];
  amount?: string;
}

export const IngredientItem = ({ amount, names }: IngredientItemProps) => {
  const { t } = useTranslation();

  return (
    <>
      {amount ? <span>{amount}</span> : null}
      <span> {names.join(` ${t('or')} `)}</span>
    </>
  );
};
