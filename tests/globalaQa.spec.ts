import { test } from "@playwright/test";

test.describe('GlobalsQA tests', () => {

	test('Drag and drop with iframe', async ({ page }) => {
		await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
		await page.locator('.fc-button-label').filter({ hasText: 'Consent' }).click();

		//Drag and drop
		const iframe = page.locator('#post-2669').getByRole('paragraph').locator('iframe').contentFrame();
		await iframe.getByText('High Tatras').first().dragTo(iframe.locator('#trash'));
		await iframe.getByText('High Tatras 4').first().dragTo(iframe.locator('#trash'));
		await iframe.getByText('High Tatras 2').first().dragTo(iframe.locator('#trash'));

		// Manual drag and drop
		await page.reload();
		await iframe.getByText('High Tatras').first().hover();
		await page.mouse.down();
		await iframe.locator('#trash').hover();
		await page.mouse.up();
		await iframe.getByText('High Tatras 2').first().hover();
		await page.mouse.down();
		await iframe.locator('#trash').hover();
		await page.mouse.up();
	});


})
