import { Page } from '@playwright/test';
import mockCocktails from '@/app/tests/mocks/mockCocktails';
import { text as filterText } from '@/app/components/Filter/tests/utils/selectors';
import { role as cocktailRole } from '@/app/components/Cocktail/tests/utils/selectors';
import { role } from '@/app/tests/utils/selectors';

export const renderHome = async (page: Page) => {
  await page.route('**/api/cocktails', (route) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify(mockCocktails),
    }),
  );

  await page.goto('http://localhost:3000');

  return {
    getHeader: async () => page.getByRole(...role.header()),
    getCocktailByName: async (name: string) =>
      page.getByRole(...cocktailRole.header(name)),
    getFilterCheckbox: async (name: string, numberOfResults: number) =>
      page.getByText(
        filterText.ingredientFilter(name, numberOfResults.toString()),
      ),
  };
};
