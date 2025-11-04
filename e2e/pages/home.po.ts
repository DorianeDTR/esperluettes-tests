import { expect, type Locator, type Page } from "@playwright/test";
import { BasePo } from "./base.po";

export class HomePo extends BasePo {
    get pageLocator(): Locator {
        return this.page.getByTestId('home-page');
    }

    constructor(page: Page) {
        super(page);
    }

    async goTo(): Promise<void> {
        await this.page.goto('/');
    }

    async shouldBeDisplayed(): Promise<void> {
        await expect(this.pageLocator).toBeVisible();
    }
}