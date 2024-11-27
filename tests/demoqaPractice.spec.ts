import { expect, test } from '@playwright/test';

test.describe('DemoQa practice', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(('https://demoqa.com/'));
	});

	test('Radio button', async ({ page }) => {
		await page.getByRole('heading', { name: 'Elements' }).click();
		await page.locator('li').getByText('Radio Button').click();
		// await page.locator('.custom-radio #yesRadio').check({force:true})
		// await page.locator('.custom-radio #impressiveRadio').check({force:true})
		const yesRb = page.locator('.custom-radio #yesRadio');
		const impressiveRb = page.locator('.custom-radio #impressiveRadio');

		await yesRb.check({ force: true });
		const yesRbStatus = await yesRb.isChecked();
		expect(yesRbStatus).toBeTruthy();
		await page.getByText('You have selected Yes').isVisible();

		await impressiveRb.check({ force: true });
		const impressiveRbStatus = await impressiveRb.isChecked();
		expect(impressiveRbStatus).toBeTruthy();
		expect(await yesRb.isChecked()).toBeFalsy();
		await page.getByText('You have selected Yes').isHidden();
		await page.getByText('You have selected Impressive').isVisible();
	});

	test('Check Box', async ({ page }) => {
		await page.getByRole('heading', { name: 'Elements' }).click();
		await page.locator('li').getByText('Check Box').click();
		await page.getByLabel('Toggle').click();

		const desktop = page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first();
		await desktop.check();
		expect(await desktop.isChecked()).toBeTruthy();
		await desktop.uncheck();
		expect(await desktop.isChecked()).toBeFalsy();

		const documents = page.locator('label').filter({ hasText: 'Documents' }).getByRole('img').first();
		await documents.check()
		expect(await documents.isChecked()).toBeTruthy();

		const downloads = page.locator('label').filter({ hasText: 'Downloads' }).getByRole('img').first();
		await downloads.check();
		expect(await downloads.isChecked()).toBeTruthy();
		await downloads.uncheck();
		expect(await downloads.isChecked()).toBeFalsy();

		//? Делаем проход по всем чек боксам с помощью цикла
		const allBoxes = page.locator('span .rct-checkbox');
		for (const box of await allBoxes.all()) {
			await box.uncheck();
			expect(await box.isChecked()).toBeFalsy();
		};
		//? Второй цикл
		for (const box of await allBoxes.all()) {
			await box.check();
			expect(await box.isChecked()).toBeTruthy();
		};
	});

	test('Lists and dropdowns', async ({ page }) => {
		await page.getByRole('heading', { name: 'Widgets', }).filter({hasText: 'Widgets'}).click();
		await page.getByRole('list').getByText('Select Menu').click();
		await page.locator('#oldSelectMenu').click();
	});

	//FIXME Тест нестабилен в headed моде. Необходимо разобраться подробнее!

	test('Tool tips', async ({ page }) => {
		await page.getByRole('heading', { name: 'Widgets' }).click();
		await page.getByRole('list').getByText('Tool tips').click();
		
		await page.getByRole('button', { name: 'Hover me to see' }).hover();
		const ttText = await page.locator('div .tooltip-inner').textContent();
		expect(ttText).toEqual('You hovered over the Button');
		
		await page.getByRole('textbox', { name: 'Hover me to see' }).hover();
		const tfText = await page.getByText('You hovered over the text').textContent();
		expect(tfText).toEqual('You hovered over the text field');
	});
	
	test('Web Tables', async ({ page }) => {
	
		//TODO закончить с этим тестом

	});
	
	test('Date Picker', async ({ page }) => {
		await page.getByRole('heading', { name: 'Widgets' }).click();
		await page.getByRole('list').getByText('Date Picker').click();
		await page.locator('#datePickerMonthYearInput').click();

		await page.locator('.react-datepicker__month').click();

	});
});