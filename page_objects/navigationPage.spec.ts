import { Page } from '@playwright/test';

export class NavigationPage {
	readonly page: Page;
	
	constructor(page: Page) {
		this.page = page;
	};

	async elements() {
		await this.page.goto('https://demoqa.com/');
		await this.page.getByRole('heading', { name: 'Elements' }).click();
	};
	async forms() {
		await this.page.goto('https://demoqa.com/');
		await this.page.getByRole('heading', { name: 'Forms' }).click();
	};
	async alertsFrameWindows() {
		await this.page.goto('https://demoqa.com/');
		await this.page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
	};
	async widgets() {
		await this.page.goto('https://demoqa.com/');
		await this.page.getByRole('heading', { name: 'Widgets' }).click();
	};
	async interactions() {
		await this.page.goto('https://demoqa.com/');
		await this.page.getByRole('heading', { name: 'Interactions' }).click();
	};
	async bookStoreApp() {
		await this.page.goto('https://demoqa.com/');
		await this.page.getByRole('heading', { name: 'Book Store Application' }).click();
	};

};