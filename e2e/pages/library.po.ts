import { expect, type Locator, type Page } from "@playwright/test"; 

import { BasePo } from "./base.po";

export class LibraryPo extends BasePo {
    get pageLocator(): Locator {
        return this.page.getByRole('heading', { name: 'Toutes les histoires' });
    }
    get storyCardTitle(): Locator {
        return this.page.getByRole('link', { name: 'L\'oiseau et la porcelaine' });
    }

     constructor(page: Page) {
    super(page);
    }
  
    async goTo(): Promise<void> {
        await this.page.goto('/stories');
    }

    async shouldBeDisplayed(): Promise<void> {
        await expect(this.pageLocator).toBeVisible();
    }
}