import { expect, test } from '@playwright/test';
import { PageManager } from '../page_objects/1_pageManager';

test.describe('DemoQa practice', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://demoqa.com/');
	});

	test('Login page', async ({ page }) => {
		const pm = new PageManager(page);
		await pm.navigateTo().loginPage();
		await pm.onLoginPage().loginInBookStore('User', '7777');
		await page.getByRole('button', { name: 'Login' }).click();
	});

	test('Register page', async ({ page }) => {
		const pm = new PageManager(page);
		await pm.navigateTo().loginPage();
		await pm.onLoginPage().registerInBookStore('Yevhen', 'Voitsytskyi', 'yvoitsytskyi', '1234567');
		await pm.onLoginPage().waitForNumberOfSeconds(1);
		await page.getByRole('button', { name: 'Register' }).click();
	});

	test('Radio button', async ({ page }) => {
		const pm = new PageManager(page);
		await pm.navigateTo().radioButton();
		const yesBtnStatus = await pm.onRadioBtnPage().selectYesBtn();
		expect(yesBtnStatus).toBeTruthy();

		await pm.onRadioBtnPage().waitForNumberOfSeconds(2);
		const impressiveBtnStatus = await pm.onRadioBtnPage().selectImpressiveBtn();
		expect(impressiveBtnStatus).toBeTruthy();
		const newYesBtnStatus = await page.locator('.custom-radio #yesRadio').isChecked();
		expect(newYesBtnStatus).toBeFalsy();
	});

	test('Text Box', async ({ page }) => {
		const pm = new PageManager(page);
		await pm.navigateTo().textBoxPage();
		await pm.onTextBoxPage().fillOutInputFields('fullName', 'Email', 'address', 'permAddress');
		await pm.onTextBoxPage().waitForNumberOfSeconds(2);
		await pm.onTextBoxPage().clearInputFields();
		await pm.onTextBoxPage().waitForNumberOfSeconds(2);
		await pm.onTextBoxPage().fillOutInputFields('Yevhen', 'myemail@example.com', 'Kharkiv', 'Budapest');
	});

	test('Check Box', async ({ page }) => {
		const pm = new PageManager(page);
		await pm.navigateTo().checkBox();

		await page.getByLabel('Toggle').click();
		const desktop = page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first();
		await desktop.check();


		expect(await desktop.isChecked()).toBeTruthy();
		await desktop.uncheck();
		expect(await desktop.isChecked()).toBeFalsy();

		await page.getByText('You have selected Yes').isVisible();
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
});