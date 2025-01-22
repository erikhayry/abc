import React from 'react';
import { CocktailItem } from '@/app/components/Cocktail/CocktailItem';
import { Cocktail } from '@/app/components/Cocktail/types';
import {
  isCocktailDone,
  updateCocktailDoneState,
} from '@/app/components/CocktailList/utils/storage';
import { getCocktailsGroupedByLetters } from '@/app/components/CocktailList/utils/getCocktailsGroupedByLetters';
import { byName } from '@/app/components/CocktailList/utils/sort';

export type CocktailListProps = {
  cocktails: Cocktail[];
};

export const CocktailList = ({ cocktails }: CocktailListProps) => {
  const handleChange = (id: number, isChecked: boolean) => {
    updateCocktailDoneState(id, isChecked);
  };

  return (
    <div>
      {getCocktailsGroupedByLetters(cocktails).map(({ letter, cocktails }) => (
        <div key={letter}>
          <h2
            id={letter}
            className="text-3xl lg:text-7xl font-bold underline my-10"
          >
            {letter}
          </h2>
          <ul
            aria-labelledby={letter}
            className="grid grid-cols-1 xl:grid-cols-3 gap-8"
          >
            {cocktails.sort(byName).map((cocktail) => (
              <CocktailItem
                key={cocktail.id}
                cocktail={cocktail}
                done={isCocktailDone(cocktail.id)}
                onChange={(_, isChecked) =>
                  handleChange(cocktail.id, isChecked)
                }
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
