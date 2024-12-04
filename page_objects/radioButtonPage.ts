import { Page } from "@playwright/test";
import { HelperBase } from "./2_helperBase";

export class RadioButtonPage extends HelperBase {
	constructor(page: Page) {
		super(page);
	};

	async selectYesBtn() {
		const yesRbtn = this.page.locator('.custom-radio #yesRadio');
		await yesRbtn.check({ force: true });
		const yesRbtnStatus = await yesRbtn.isChecked();
		return yesRbtnStatus;
	};

	async selectImpressiveBtn() {
		const impressiveRbtn = this.page.locator('.custom-radio #impressiveRadio');
		await impressiveRbtn.check({ force: true });
		const impressiveRbtnStatus = await impressiveRbtn.isChecked();
		return impressiveRbtnStatus;
	};
};