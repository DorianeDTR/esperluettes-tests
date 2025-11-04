import { createBdd } from "playwright-bdd";

import { type AllFixtures, pageFixtures } from "../support/fixtures";

export const fixtures = pageFixtures;
const { Given, When, Then } = createBdd(fixtures);

Given ('I am on the Homepage', async ({ homePo }: AllFixtures) => { 
    await homePo.goTo(); 
}); 

When ('I clic on the library button', async ({ headerPo }: AllFixtures) => {
    await headerPo.goToLibrary();
});
Then   ('I am redirected to the library page from the header', async ({ libraryPo }: AllFixtures) => {
    await libraryPo.shouldBeDisplayed();
});

When ('I clic on the news button', async ({ headerPo }: AllFixtures) => {
    await headerPo.goToNews();
});
Then   ('I am redirected to the news page from the header', async ({ newsPo }: AllFixtures) => {
    await newsPo.shouldBeDisplayed();
});