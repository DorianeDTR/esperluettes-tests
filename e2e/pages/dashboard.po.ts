import { expect, type Locator, type Page } from "@playwright/test";

import { Auth } from "../tools/auth";
import { BasePo } from "./base.po";

export class DashboardPo extends BasePo {
    get pageLocator(): Locator {
        return this.page.getByRole('heading', { name: 'Bienvenue Kiouhay' });
    }



    constructor(page: Page) {
    super(page);
    }
  
    async goTo(): Promise<void> {
        await this.page.goto('/dashboard');
    }
  
    async shouldBeDisplayed(): Promise<void> {
        // console.log('URL:', this.page.url());
        await expect(this.pageLocator).toBeVisible();
    }
}


