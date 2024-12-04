import { Page } from "@playwright/test";
import { NavigationPage } from './navigationPage';
import { LoginPage } from './loginPage';
import { RadioButtonPage } from "./radioButtonPage";
import { TextBoxPage } from "./textBoxPage";

export class PageManager {

	private readonly page: Page;
	private readonly navigationPage: NavigationPage;
	private readonly loginPage: LoginPage;
	private readonly radioButton: RadioButtonPage;
	private readonly textBoxPage: TextBoxPage;

	constructor(page: Page) {
		this.page = page;
		this.navigationPage = new NavigationPage(this.page);
		this.loginPage = new LoginPage(this.page);
		this.radioButton = new RadioButtonPage(this.page);
		this.textBoxPage = new TextBoxPage(this.page);
	};

	navigateTo() {
		return this.navigationPage;
	};

	onLoginPage() {
		return this.loginPage;
	};

	onRadioBtnPage() {
		return this.radioButton;
	};

	onTextBoxPage() {
		return this.textBoxPage;
	}

};