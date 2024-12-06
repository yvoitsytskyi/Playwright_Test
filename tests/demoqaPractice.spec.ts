import { expect, test } from '@playwright/test';
import { PageManager } from '../page_objects/1_pageManager';
import { waitForDebugger } from 'inspector';

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
		await pm.navigateTo().radioButtonPage();
		const yesBtnStatus = await pm.onRadioButtonPage().selectYesBtn();
		expect(yesBtnStatus).toBeTruthy();

		await pm.onRadioButtonPage().waitForNumberOfSeconds(2);
		const impressiveBtnStatus = await pm.onRadioButtonPage().selectImpressiveBtn();
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
		await pm.navigateTo().checkBoxPage();

		await pm.onCheckBoxPage().expandHome();
		await pm.onCheckBoxPage().waitForNumberOfSeconds(2);
		await pm.onCheckBoxPage().expandAll();
		await pm.onCheckBoxPage().collapseHome();
		await pm.onCheckBoxPage().collapseHome();
		await pm.onCheckBoxPage().collapseHome();
		await pm.onCheckBoxPage().expandHome();
		await pm.onCheckBoxPage().expandHome();
		await pm.onCheckBoxPage().expandAll();
		await pm.onCheckBoxPage().expandAll();
		await pm.onCheckBoxPage().collapseAll();
		await pm.onCheckBoxPage().expandAll();
		await pm.onCheckBoxPage().checkDesktop();
		await pm.onCheckBoxPage().checkDocuments();
		await pm.onCheckBoxPage().checkDownloads();
		await pm.onCheckBoxPage().waitForNumberOfSeconds(2);
		await pm.onCheckBoxPage().uncheckHome();

		// //? Делаем проход по всем чек боксам с помощью цикла
		// const allBoxes = page.locator('span .rct-checkbox');
		// for (const box of await allBoxes.all()) {
		// 	await box.uncheck();
		// 	expect(await box.isChecked()).toBeFalsy();
		// };
		// //? Второй цикл
		// for (const box of await allBoxes.all()) {
		// 	await box.check();
		// 	expect(await box.isChecked()).toBeTruthy();
		// };
	});
});