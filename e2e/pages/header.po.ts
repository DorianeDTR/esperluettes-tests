import { expect, type Locator, type Page } from "@playwright/test";
import { BasePo } from "./base.po";

export class HeaderPo extends BasePo {
    get pageLocator(): Locator {
        return this.page.getByRole('navigation');
    }
    get libraryBtn(): Locator {
        return this.page.getByRole('link', { name: ' Bibliothèque ' });
    }
    get newsBtn(): Locator {
        return this.page.getByRole('link', { name: 'Actus' });
    }

    constructor(page: Page) {
        super(page);
    }

    async goToLibrary(): Promise<void> {
        await this.libraryBtn.click();
    }
    async goToNews(): Promise<void> {
        await this.newsBtn.click();
    }
}