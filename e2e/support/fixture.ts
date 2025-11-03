import type { Page } from "@playwright/test";
import { test as base } from "playwright-bdd";

import { LoginPo } from "../pages/login.po";

interface Pages {
    loginPo: LoginPo;
}

export interface AllFixtures extends Pages {
    page: Page;
}

export const pageFixtures = base.extend<Pages>({
    loginPo: async ({ page }, use) => {
        await use(new LoginPo(page));
    },
});