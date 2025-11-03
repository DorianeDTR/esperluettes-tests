import { expect, type Locator, type Page } from "@playwright/test";

import { Auth } from "../tools/auth";
import { BasePo } from "./base.po";

export class LoginPo extends BasePo {
    private auth = new Auth();
    get pageLocator(): Locator {
        return this.page.locator('form[action=""https://esperluettes.hemit.fr/login"]');
    }
    get loginInput(): Locator {
        return this.pageLocator.locator('input[name="email"]');
    }
    get passwordInput(): Locator {
        return this.pageLocator.locator('input[name="password"]');
    }
    get submitButton(): Locator {
        return this.pageLocator.locator('button[type="submit"]');
    }
    get rememberMeCheckbox(): Locator {
        return this.pageLocator.locator('input[name="remember"]');
    }

    constructor(page: Page) {
        super(page);
    }

    async goto(): Promise<void> {
        await this.page.goto('/login');
    }

    async shouldBeDisplayed(): Promise<void> {
        await expect(this.pageLocator).toBeVisible();
    }

    async logAs(login: string, password: string): Promise<void> {
        await this.loginInput.fill(login);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async logAsUser(userName: string): Promise<void> {
        const user = this.auth.getUser(userName);
        await this.logAs(user.login, user.password);
    }
}