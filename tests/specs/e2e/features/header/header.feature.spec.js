// Generated from: e2e\features\header\header.feature
import { fixtures as test } from "../../../../../e2e/steps/header.ts";

test.describe('Header Esperluette Feature', () => {

  test.beforeEach('Background', async ({ Given, homePo }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the Homepage', null, { homePo }); 
  });
  
  test('Access to the library page', { tag: ['@Automated'] }, async ({ When, Then, headerPo, libraryPo }) => { 
    await When('I clic on the library button', null, { headerPo }); 
    await Then('I am redirected to the library page from the header', null, { libraryPo }); 
  });

  test('Access to the news page', { tag: ['@Automated'] }, async ({ When, Then, headerPo, newsPo }) => { 
    await When('I clic on the news button', null, { headerPo }); 
    await Then('I am redirected to the news page from the header', null, { newsPo }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\header\\header.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@Automated"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the Homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I clic on the library button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I am redirected to the library page from the header","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@Automated"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the Homepage","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When I clic on the news button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I am redirected to the news page from the header","stepMatchArguments":[]}]},
]; // bdd-data-end