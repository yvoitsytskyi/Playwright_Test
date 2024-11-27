import { test } from '@playwright/test';

test('wiki page checking', async ({ page }, testInfo) => {
	await page.goto('https://en.wikipedia.org/wiki/Main_Page/');
	await page.getByPlaceholder('Search Wikipedia').fill('Playwright');
	await page.getByRole('button', { name: 'Search' }).click();
	page.getByText('Playwright', { exact: true });
	await testInfo.attach("Playwright header", {
		body: await page.screenshot(),
		contentType: 'image/png',
	});
	// await page.locator('#ca-edit').click();
	await page.getByRole('link', { name: 'Edit' }).first().click();
	await testInfo.attach("Modal Tittle", {
		body: await page.screenshot(),
		contentType: 'image/png',
	});
	await page.getByTitle('Welcome to Wikipedia').isVisible();
	await page.getByRole('button', { name: 'Start Editing' }).first().click();
	await page.getByTitle('Welcome to Wikipedia').isHidden();
});
