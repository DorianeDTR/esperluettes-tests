import { expect, type Locator, type Page } from "@playwright/test"; 

import { BasePo } from "./base.po";

export class NewsPo extends BasePo {
    get pageLocator(): Locator {
        return this.page.getByRole('heading', { name: 'À la une' });
    }

     constructor(page: Page) {
    super(page);
    }
  
    async goTo(): Promise<void> {
        await this.page.goto('/news');
    }

    async shouldBeDisplayed(): Promise<void> {
        await expect(this.pageLocator).toBeVisible();
    }
}