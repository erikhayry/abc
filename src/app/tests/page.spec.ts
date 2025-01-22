import { expect, test } from '@playwright/test';
import { renderHome } from './utils/renderHome';
import {
  MOCKTAIL_1,
  MOCKTAIL_2,
  MOCKTAIL_3,
  MOCKTAIL_6,
  SUBLIST_MOCKTAIL_1,
  SUBLIST_MOCKTAIL_2,
} from './mocks/mockCocktails';

test.describe('Home page', () => {
  test('should render the main heading', async ({ page }) => {
    const { getHeader } = await renderHome(page);

    await expect(await getHeader()).toBeVisible();
  });

  test('should render each cocktail with the correct name', async ({
    page,
  }) => {
    const { getCocktailByName } = await renderHome(page);

    await expect(await getCocktailByName(MOCKTAIL_1)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_2)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_3)).toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_1)).toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_2)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_6)).toBeVisible();
  });

  test('should filter cocktails when a filter checkbox is clicked', async ({
    page,
  }) => {
    const { getFilterCheckbox, getCocktailByName } = await renderHome(page);

    await (await getFilterCheckbox('Ingredient 1', 4)).click();
    await (await getFilterCheckbox('Ingredient 3', 2)).click();

    await expect(await getFilterCheckbox('Ingredient 1', 2)).toBeVisible();
    await expect(await getFilterCheckbox('Ingredient 3', 2)).toBeVisible();

    await expect(await getCocktailByName(MOCKTAIL_1)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_2)).not.toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_3)).toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_1)).not.toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_2)).not.toBeVisible();
  });

  test('should filter cocktails when a filter checkbox is clicked for cocktail with interchangeable ingredients', async ({
    page,
  }) => {
    const { getFilterCheckbox, getCocktailByName } = await renderHome(page);

    await (await getFilterCheckbox('Ingredient 1', 4)).click();

    await expect(await getFilterCheckbox('Ingredient 1', 4)).toBeVisible();

    await expect(await getCocktailByName(MOCKTAIL_1)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_2)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_3)).toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_1)).not.toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_2)).toBeVisible();
  });

  test('should remove filter when a filter checkbox is unchecked', async ({
    page,
  }) => {
    const { getFilterCheckbox, getCocktailByName } = await renderHome(page);

    await (await getFilterCheckbox('Ingredient 1', 4)).click();
    await (await getFilterCheckbox('Ingredient 3', 2)).click();
    await (await getFilterCheckbox('Ingredient 3', 2)).click();

    await expect(await getCocktailByName(MOCKTAIL_1)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_2)).toBeVisible();
    await expect(await getCocktailByName(MOCKTAIL_3)).toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_1)).not.toBeVisible();
    await expect(await getCocktailByName(SUBLIST_MOCKTAIL_2)).toBeVisible();
  });
});
