import { NON_ALPHABETICAL_REGEX } from '@/app/components/CocktailList/utils/regex';
import { Cocktail } from '@/app/components/Cocktail/types';

function groupByFirstLetter(
  acc: Record<string, Cocktail[]>,
  cocktail: Cocktail,
) {
  const firstLetter = cocktail.name
    .replace(NON_ALPHABETICAL_REGEX, '')[0]
    .toUpperCase();
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }
  acc[firstLetter].push(cocktail);

  return acc;
}

export function getCocktailsGroupedByLetters(
  cocktails: Cocktail[],
): { letter: string; cocktails: Cocktail[] }[] {
  return Object.entries(cocktails.reduce(groupByFirstLetter, {}))
    .map(([letter, cocktails]) => ({
      letter,
      cocktails,
    }))
    .sort(({ letter: a }, { letter: b }) => a.localeCompare(b));
}
