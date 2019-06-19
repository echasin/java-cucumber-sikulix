$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Test feature",
  "description": "    This test will run by navigating to skywritersaas.com\n    Log in the test account (ilabtest.ilabtest)\n    Create a new contact",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Click google chrome icon",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the google chrome icon",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Open_googleChrome()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigate to skywritersaas.com",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter skywritersaas.com into url search bar",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Navigate_to_skywriter()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login to account",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Use pre-existing credentials to login to account",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Login_account()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new Contact",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "New contact navigation",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.Navigate_newContact()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Input new contact data",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "New contact, input information",
  "keyword": "Given "
});
formatter.match({
  "location": "DesktopSteps.newContact_info()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});