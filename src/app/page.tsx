'use client';
import React, { useEffect, useState } from 'react';
import { Cocktail } from '@/app/components/Cocktail/types';
import { CocktailList } from '@/app/components/CocktailList/CocktailList';
import { Filter } from '@/app/components/Filter/Filter';
import { fetchCocktails } from '@/app/utils/page/fecthCoctials';
import { filterCocktails } from '@/app/utils/page/filter';

export default function Home() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [filteredCocktails, setFilteredCocktails] = useState<Cocktail[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cocktails = await fetchCocktails();
      setCocktails(cocktails);
      setFilteredCocktails(cocktails);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredCocktails(filterCocktails(cocktails, selectedIngredients));
  }, [selectedIngredients, cocktails]);

  const handleFilterChange = (ingredients: string[]) => {
    setSelectedIngredients(ingredients);
  };

  return (
    <div className="grid grid-cols-3 min-h-screen bg-gray-100 text-gray-800 font-times p-5">
      <main className="col-span-3 flex flex-col gap-10">
        <h1 className="text-4xl lg:text-9xl font-bold underline text-center">
          ABC of Cocktails
        </h1>
        <div className="flex flex-col xl:flex-row">
          <div className="max-h-[200px] xl:max-h-none xl:w-1/5 order-2 overflow-auto xl:ml-5">
            <Filter
              cocktails={filteredCocktails}
              onChange={handleFilterChange}
            />
          </div>
          <div className="w-full lg:w-4/5">
            <CocktailList cocktails={filteredCocktails} />
          </div>
        </div>
      </main>
    </div>
  );
}
