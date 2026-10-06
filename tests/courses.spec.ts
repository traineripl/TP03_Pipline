import { test, expect, Page } from '@playwright/test';

async function ajouter(page: Page, nom: string) {
  await page.getByLabel('Nouvel article').fill(nom);
  await page.getByRole('button', { name: 'Ajouter' }).click();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('affiche une liste vide au départ', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Liste de courses' })).toBeVisible();
  await expect(page.getByText('Votre liste est vide')).toBeVisible();
  await expect(page.getByRole('status')).toHaveText('0 article');
});

test('ajoute un article', async ({ page }) => {
  await ajouter(page, 'Lait');
  await expect(page.getByText('Lait')).toBeVisible();
  await expect(page.getByRole('status')).toHaveText('1 article');
  await expect(page.getByText('Votre liste est vide')).toBeHidden();
});

test('ajoute plusieurs articles', async ({ page }) => {
  await ajouter(page, 'Lait');
  await ajouter(page, 'Pain');
  await ajouter(page, 'Oeufs');
  await expect(page.getByRole('listitem')).toHaveCount(3);
  await expect(page.getByRole('status')).toHaveText('3 articles');
});

test('vide le champ après un ajout', async ({ page }) => {
  await ajouter(page, 'Lait');
  await expect(page.getByLabel('Nouvel article')).toHaveValue('');
});

test("n'ajoute pas un article vide", async ({ page }) => {
  await page.getByRole('button', { name: 'Ajouter' }).click();
  await expect(page.getByRole('status')).toHaveText('0 article');
  await expect(page.getByRole('listitem')).toHaveCount(0);
});

test('supprime un article', async ({ page }) => {
  await ajouter(page, 'Lait');
  await page.getByRole('button', { name: 'Supprimer Lait' }).click();
  await expect(page.getByText('Votre liste est vide')).toBeVisible();
  await expect(page.getByRole('status')).toHaveText('0 article');
});
