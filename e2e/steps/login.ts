import { createBdd } from "playwright-bdd";

import { type AllFixtures, pageFixtures } from "../support/fixtures";

export const fixtures = pageFixtures;
const { Given, When, Then } = createBdd(fixtures);

Given('I go to login page', async ({ loginPo }: AllFixtures) => {
    await loginPo.goTo();
});
Then ('Login page should be displayed', async ({ loginPo }: AllFixtures) => {
    await loginPo.shouldBeDisplayed();
});

When('I fill the login form with valide data', async ({ loginPo }: AllFixtures) => {
    await loginPo.logAs('doriane.cc.dutertre@gmail.com', 'Jardindes&$!');
});
Then ('I am redirected to the home page from the login page', async ({ dashboardPo }: AllFixtures) => {
    await dashboardPo.shouldBeDisplayed();
});