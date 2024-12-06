import { Page } from "@playwright/test";
import { NavigationPage } from './navigationPage';
import { LoginPage } from './loginPage';
import { RadioButtonPage } from "./radioButtonPage";
import { TextBoxPage } from "./textBoxPage";
import { CheckBoxPage } from "./checkBoxPage";

export class PageManager {

	private readonly page: Page;
	private readonly navigationPage: NavigationPage;
	private readonly loginPage: LoginPage;
	private readonly radioButtonPage: RadioButtonPage;
	private readonly textBoxPage: TextBoxPage;
	private readonly checkBoxPage: CheckBoxPage;

	constructor(page: Page) {
		this.page = page;
		this.navigationPage = new NavigationPage(this.page);
		this.loginPage = new LoginPage(this.page);
		this.radioButtonPage = new RadioButtonPage(this.page);
		this.textBoxPage = new TextBoxPage(this.page);
		this.checkBoxPage = new CheckBoxPage(this.page);
	};

	navigateTo() {
		return this.navigationPage;
	};

	onLoginPage() {
		return this.loginPage;
	};

	onRadioButtonPage() {
		return this.radioButtonPage;
	};

	onTextBoxPage() {
		return this.textBoxPage;
	};

	onCheckBoxPage() {
		return this.checkBoxPage;
	};
};