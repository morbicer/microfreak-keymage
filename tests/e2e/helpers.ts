import type { Page } from '@playwright/test';

export const APP_URL = new URL('../../dist/index.html', import.meta.url).href;

export async function openApp(page: Page, hash = '') {
  await page.goto(APP_URL + hash);
  await page.getByTestId('keyboard').waitFor();
}

export const state = async (page: Page, id: string) => (await page.getByTestId(id).getAttribute('data-state')) ?? '';
