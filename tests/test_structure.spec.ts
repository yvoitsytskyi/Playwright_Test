import { expect, test } from '@playwright/test';

test.describe('Main tests', () => { 			//? Use '.describe' test hook to declare a group of tests(easier management)
	test.beforeEach(async ({ page }) => {		//? Use '.beforeEach' test hook to execute repeatable steps before each specific test(DRY principle)
		await page.goto('https://vertex-academy.com/tutorials/ru/samouchitel-po-java-s-nulya/');
		await page.getByRole('button', { name: 'Consent' }).click();
	});

	test('first test', async ({ page }) => {
		await page.getByRole('link', { name: "самоучители" }).first().hover();
		await page.getByRole('link', { name: 'HTML', exact: true }).click();
		await expect(page).toHaveURL('https://vertex-academy.com/tutorials/ru/samouchitel-po-htmlcss-s-nulya/');
		const lessonOneLink = page.getByRole('link', {name: 'Урок 1: История развития HTML'});
		await expect(lessonOneLink).toHaveText('Урок 1: История развития HTML'); //? Locator assertion. U can use 'expect.soft' for the soft assertion (Even if the test fails it'll do the next step)

		await lessonOneLink.click();
		const expectedText = 'Полностью раскрыть потенциал Всемирной паутины, путём создания протоколов и принципов, гарантирующих долгосрочное развитие Сети'; //? Сохранил ожидаемый текст в переменную

		//* можно сохранить контент в переменную 'text' и передать как параметр в сл. строку: "expect(text).toEqual(expectedText)"
		//? Using of User-faced locator .getByRole - better solution!!!
		const text = await page.getByRole('blockquote').textContent();
		
		//? using of locators 'blockquote p'
		// const text = await page.locator('blockquote p').textContent();

		//* а можно сделать так как здесь, но читаемость будет хуже
		// expect(await page.getByRole('blockquote').textContent()).toEqual(expectedText);   //? General assertion
		expect(text).toEqual(expectedText);   //? General assertion
	});

	test('second test', async ({ page }) => {
		await page.getByRole('link', { name: "JAVA" }).first().click();
	});

	test('third test', async ({ page }) => {
		await page.getByPlaceholder('Поиск').fill('конкатенация'); //? В большинстве случаев для заполнения полей используется метод '.fill()'
		// await page.getByPlaceholder('Поиск').pressSequentially('конкатенация', {delay:100}); //При необходимости симулировать набор клавиш можно использовать этот метод. Параметр 'delay' симулирует медленную печать
		await page.getByPlaceholder('Поиск').clear(); //? Очищает поле ввода
		await page.getByPlaceholder('Поиск').fill('конкатенация');
		await page.keyboard.press('Enter');
		await page.getByRole('link', { name: 'Конкатенация строк в Java' }).click();
		await expect(page.getByAltText('porsche-918_vertex-academy')).toBeVisible();
	});
});

