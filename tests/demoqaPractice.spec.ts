import { expect, test } from '@playwright/test';
import { NavigationPage } from '../page_objects/navigationPage.spec';

test.describe('DemoQa practice', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://demoqa.com/');
	});

	test('Radio button', async ({ page }) => {
		await page.getByRole('heading', { name: 'Elements' }).click();
		await page.locator('li').getByText('Radio Button').click();
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

	// test('Lists and dropdowns', async ({ page }) => {
	// 	await page.getByRole('heading', { name: 'Widgets', }).filter({ hasText: 'Widgets' }).click();
	// 	await page.getByRole('list').getByText('Select Menu').click();
	// 	await page.locator('#oldSelectMenu').selectOption({ label: 'red' });
	// });

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

	//TODO разобраться с темой - таблицы
	// test('Web Tables', async ({ page }) => {
	// });

	test('Date Picker', async ({ page }) => {
		await page.getByRole('heading', { name: 'Widgets' }).click();
		await page.getByRole('list').getByText('Date Picker').click();
		const InputField = page.locator('#datePickerMonthYearInput');

		let date = new Date();
		let newDate = date.setDate(date.getDate() + 5).toLocaleString();
		await InputField.fill(newDate);
		await expect(InputField).toHaveValue(newDate);

		// await page.getByRole('listbox').getByRole('option', { name: "Choose Thursday, November 21st, 2024" }).click();
	});

	test('Slider', async ({ page }) => {
		await page.getByRole('heading', { name: 'Widgets', }).filter({ hasText: 'Widgets' }).click();
		await page.locator('li').filter({ hasText: 'Slider' }).click();
		const slider = page.getByRole('slider');
		// await slider.locator('')
		await slider.evaluate(node => {
			node.setAttribute('value', '30');
			node.setAttribute('style', "30");
		});
		await slider.click();
	});

	test('page object using', async ({ page }) => {
		const navigateTo = new NavigationPage(page);
		await navigateTo.elements();
		await navigateTo.interactions();
		await navigateTo.alertsFrameWindows();
	})
});