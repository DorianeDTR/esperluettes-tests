import type { Page } from "@playwright/test";
import { test as base } from "playwright-bdd";

import { DashboardPo } from "../pages/dashboard.po";
import { HeaderPo } from "../pages/header.po";
import { HomePo } from "../pages/home.po";
import { LibraryPo } from "../pages/library.po";
import { LoginPo } from "../pages/login.po";
import { NewsPo } from "../pages/news.po";

export interface Pages {
    dashboardPo: DashboardPo;
    headerPo: HeaderPo;
    homePo: HomePo;
    libraryPo: LibraryPo;
    loginPo: LoginPo;
    newsPo: NewsPo;
}

export interface AllFixtures extends Pages {
    page: Page;
}

export const pageFixtures = base.extend<Pages>({
    dashboardPo: async ({ page }, use) => {
        await use(new DashboardPo(page));
    },
    headerPo: async ({ page }, use) => {
        await use(new HeaderPo(page));
    },
    homePo: async ({ page }, use) => {
        await use(new HomePo(page));
    },
    libraryPo: async ({ page }, use) => {
        await use(new LibraryPo(page));
    },
    loginPo: async ({ page }, use) => {
        await use(new LoginPo(page));
    },
    newsPo: async ({ page }, use) => {
        await use(new NewsPo(page));
    },
});