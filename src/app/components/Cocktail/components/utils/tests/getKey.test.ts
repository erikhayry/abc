import { getKey } from '@/app/components/Cocktail/components/utils/getKey';
import { Ingredient } from '@/app/components/Cocktail/types';

describe('getKey', () => {
  it('returns concatenated names and amount when both are provided', () => {
    const ingredient: Ingredient = {
      names: ['Vodka', 'Orange Juice'],
      amount: '2 oz',
    };
    expect(getKey(ingredient)).toBe('Vodka,Orange Juice2 oz');
  });

  it('returns concatenated names and empty string when amount is not provided', () => {
    const ingredient: Ingredient = { names: ['Vodka', 'Orange Juice'] };
    expect(getKey(ingredient)).toBe('Vodka,Orange Juice');
  });

  it('returns concatenated names and empty string when amount is an empty string', () => {
    const ingredient: Ingredient = {
      names: ['Vodka', 'Orange Juice'],
      amount: '',
    };
    expect(getKey(ingredient)).toBe('Vodka,Orange Juice');
  });

  it('returns concatenated names and amount when names array has one element', () => {
    const ingredient: Ingredient = { names: ['Vodka'], amount: '2 oz' };
    expect(getKey(ingredient)).toBe('Vodka2 oz');
  });

  it('returns empty string when names array is empty and amount is not provided', () => {
    const ingredient: Ingredient = { names: [] };
    expect(getKey(ingredient)).toBe('');
  });

  it('returns amount when names array is empty and amount is provided', () => {
    const ingredient: Ingredient = { names: [], amount: '2 oz' };
    expect(getKey(ingredient)).toBe('2 oz');
  });
});
