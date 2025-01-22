import {
  isCocktailDone,
  updateCocktailDoneState as updateCocktailState,
} from '@/app/components/CocktailList/utils/storage';
import { MOCK_NOW } from '@/app/tests/mocks/mockDate';

describe('CocktailItem storage utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('isCocktailDone', () => {
    it('returns true if the cocktail is marked as done in localStorage', () => {
      localStorage.setItem('1', MOCK_NOW.toString());
      expect(isCocktailDone(1)).toBe(true);
    });

    it('returns false if the cocktail is not marked as done in localStorage', () => {
      localStorage.setItem('2', MOCK_NOW.toString());
      expect(isCocktailDone(1)).toBe(false);
    });

    it('returns false if the cocktail is not present in localStorage', () => {
      expect(isCocktailDone(1)).toBe(false);
    });
  });

  describe('updateCocktailState', () => {
    it('updates the cocktail state to done in localStorage', () => {
      updateCocktailState(1, true);
      expect(localStorage.getItem('1')).toBe(MOCK_NOW.toString());
    });
  });
});
