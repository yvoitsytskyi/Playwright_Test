import { test } from '@playwright/test';

test('Locator syntax rules', async ({ page }) => {

	await page.goto('https://en.wikipedia.org/');

	//by Tag name
	page.locator('h1');

	//by ID
	await page.locator('#searchInput').fill('Playwright');

	//by Class value
	await page.locator('.cdx-text-input__input').click();

	//by attribute
	await page.locator('[placeholder="Search Wikipedia"]').hover();

	//by Class value (full)
	page.locator('[class="cdx-text-input cdx-text-input--has-start-icon"]');

	//combine different selectors
	page.locator('h1#Welcome_to_Wikipedia');

	// by partial text match
	page.locator(':text("October")');

	//by exact text match
	page.locator(':text-is("From today\'s featured article")');
});