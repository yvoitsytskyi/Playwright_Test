import { Page } from '@playwright/test';
import { HelperBase } from './2_helperBase';

export class LoginPage extends HelperBase {

	constructor(page: Page) {
		super(page);
	};

	/**
	 * **Details**
	 * 
	 * This method fills out form fields for Login
	 * @param name 
	 * @param password 
	 */
	async loginInBookStore(name: string, password: string) {
		await this.page.getByRole('textbox', { name: 'UserName' }).fill(name);
		await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
	};

	/**
	 * **Details**
	 * 
	 * This method navigates to the registration page.
	 * Fills out the form with user details
	 * @param firstName 
	 * @param lastName 
	 * @param userName 
	 * @param password 
	 */
	async registerInBookStore(firstName: string, lastName: string, userName: string, password: string) {
		await this.page.getByRole('button', { name: 'New User' }).click();
		await this.waitForNumberOfSeconds(1);
		await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
		await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
		await this.page.getByRole('textbox', { name: 'UserName' }).fill(userName);
		await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
	};
};