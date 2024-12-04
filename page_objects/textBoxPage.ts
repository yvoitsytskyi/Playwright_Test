import { Page } from "@playwright/test";
import { HelperBase } from "./2_helperBase";

export class TextBoxPage extends HelperBase {

	constructor(page: Page) {
		super(page);
	}

	/**
	 * Fills out user info
	 * @param fullName 
	 * @param Email 
	 * @param address 
	 * @param permAddress 
	 */
	async fillOutInputFields(fullName: string, Email: string, address: string, permAddress: string) {
		await this.page.getByPlaceholder('Full Name').fill(fullName);
		await this.page.getByPlaceholder('name@example.com').fill(Email);
		await this.page.getByPlaceholder('Current Address').fill(address);
		// await this.waitForNumberOfSeconds(2);
		await this.page.locator('#permanentAddress').fill(permAddress);
	};

	/**
	 * Clears the text fields
	 */
	async clearInputFields() {
		await this.page.getByPlaceholder('Full Name').clear();
		await this.page.getByPlaceholder('name@example.com').clear();
		await this.page.getByPlaceholder('Current Address').clear();
		// await this.waitForNumberOfSeconds(2);
		await this.page.locator('#permanentAddress').clear();
	};
};