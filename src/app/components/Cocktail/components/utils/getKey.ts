import { Ingredient } from '@/app/components/Cocktail/types';

export function getKey({ names, amount = '' }: Ingredient) {
  return names.toString() + amount;
}
