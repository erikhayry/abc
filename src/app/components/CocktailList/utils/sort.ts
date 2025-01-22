import { Cocktail } from '@/app/components/Cocktail/types';
import { NON_ALPHABETICAL_REGEX } from '@/app/components/CocktailList/utils/regex';

function nameWithoutNonAlphabeticalCharacters({ name }: Cocktail) {
  return name.replace(NON_ALPHABETICAL_REGEX, '');
}

export function byName(a: Cocktail, b: Cocktail): number {
  const name = nameWithoutNonAlphabeticalCharacters;

  return name(a).localeCompare(name(b));
}
