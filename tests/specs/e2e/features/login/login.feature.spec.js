// Generated from: e2e\features\login\login.feature
import { fixtures as test } from "../../../../../e2e/steps/header.ts";

test.describe('Login Esperluette Feature', () => {

  test.beforeEach('Background', async ({ Given, loginPo }, testInfo) => { if (testInfo.error) return;
    await Given('I go to login page', null, { loginPo }); 
  });
  
  test('Display login form', { tag: ['@Automated'] }, async ({ Then, loginPo }) => { 
    await Then('Login page should be displayed', null, { loginPo }); 
  });

  test('Validate the login form', { tag: ['@Automated'] }, async ({ When, Then, dashboardPo, loginPo }) => { 
    await When('I fill the login form with valide data', null, { loginPo }); 
    await Then('I am redirected to the home page from the login page', null, { dashboardPo }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('e2e\\features\\login\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@Automated"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I go to login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Login page should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":["@Automated"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I go to login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I fill the login form with valide data","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I am redirected to the home page from the login page","stepMatchArguments":[]}]},
]; // bdd-data-end