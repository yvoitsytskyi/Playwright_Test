import { Page } from '@playwright/test';
import { HelperBase } from './2_helperBase';

export class NavigationPage extends HelperBase {

	constructor(page: Page) {
		super(page);
	};

	private async getCurrentPage() {
		if (this.page.url() !== 'https://demoqa.com/')
			await this.page.goto('https://demoqa.com/');
	};

	async radioButton() {
		await this.getCurrentPage()
		await this.page.getByRole('heading', { name: 'Elements' }).click();
		await this.page.locator('li').getByText('Radio Button').click();
	};

	async checkBox() {
		await this.getCurrentPage()
		await this.page.getByRole('heading', { name: 'Elements' }).click();
		await this.page.locator('li').getByText('Check Box').click();
	};

	async toolTips() {
		await this.getCurrentPage()
		await this.page.getByRole('heading', { name: 'Widgets' }).click();
		await this.page.getByRole('list').getByText('Tool tips').click();
	};

	async loginPage() {
		await this.getCurrentPage()
		await this.page.getByRole('heading', { name: 'Book Store Application' }).click();
		await this.page.getByRole('list').getByText('Login').click();
	};

	async textBoxPage() {
		await this.getCurrentPage();
		await this.page.getByRole('heading', { name: 'Elements' }).click();
		await this.page.locator('li').getByText('Text Box').click();
	};
};