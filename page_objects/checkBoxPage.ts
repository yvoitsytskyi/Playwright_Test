import { Page } from "@playwright/test"
import { HelperBase } from "./2_helperBase";

export class CheckBoxPage extends HelperBase {

	constructor(page: Page) {
		super(page)
	}

	async checkHome() {
		const homeCheckBox = this.page.locator('label').filter({ hasText: 'Home' });
		await homeCheckBox.check();
	};

	async uncheckHome() {
		const homeCheckBox = this.page.locator('label').filter({ hasText: 'Home' });
		const status = await homeCheckBox.isChecked();
		if (status) {
			await homeCheckBox.uncheck();
		};
	};

	async checkDesktop() {
		const desktopCheckBox = this.page.locator('label').filter({ hasText: 'Desktop' });
		await desktopCheckBox.check();
	};

	async uncheckDesktop() {
		const desktopCheckBox = this.page.locator('label').filter({ hasText: 'Desktop' });
		const status = await desktopCheckBox.isChecked();
		if (status) {
			await desktopCheckBox.uncheck();
		};
	};

	async checkDocuments() {
		const documentsCheckBox = this.page.locator('label').filter({ hasText: 'Documents' });
		await documentsCheckBox.check();
	};
	async uncheckDocuments() {
		const documentsCheckBox = this.page.locator('label').filter({ hasText: 'Documents' });
		const status = await documentsCheckBox.isChecked();
		if (status) {
			await documentsCheckBox.uncheck();
		};
	};

	async checkDownloads() {
		const downloadsCheckBox = this.page.locator('label').filter({ hasText: 'Downloads' });
		await downloadsCheckBox.check();
	};
	async uncheckDownloads() {
		const downloadsCheckBox = this.page.locator('label').filter({ hasText: 'Downloads' });
		const status = await downloadsCheckBox.isChecked();
		if (status) {
			await downloadsCheckBox.uncheck();
		};
	};

	async expandHome() {
		const expandBtn = this.page.locator('[class="rct-icon rct-icon-expand-close"]').nth(0);
		const expandBtnStatus = await expandBtn.isVisible();
		if (expandBtnStatus) {
			await expandBtn.click();
		};
	};
	async collapseHome() {
		const collapseBtn = this.page.locator('[class="rct-icon rct-icon-expand-open"]').nth(0);
		const collapseBtnStatus = await collapseBtn.isVisible();
		if (collapseBtnStatus) {
			await collapseBtn.click();
		};
	};

	async expandAll() {
		await this.page.getByTitle('Expand all').click();
	};

	async collapseAll() {
		await this.page.getByTitle('Collapse all').click();

	};
};