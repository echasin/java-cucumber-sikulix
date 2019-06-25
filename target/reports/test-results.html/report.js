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
  "error_message": "FindFailed: username.png: (147x37) in S(0)[0,0 1280x800] E:Y, T:5.0\n  Line 2782, in file Region.java\n\r\n\tat org.sikuli.script.Region.wait(Region.java:2782)\r\n\tat org.sikuli.script.Region.find(Region.java:2329)\r\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\r\n\tat org.sikuli.script.Region.click(Region.java:3736)\r\n\tat step.definitions.DesktopSteps.Login_account(DesktopSteps.java:143)\r\n\tat ✽.Use pre-existing credentials to login to account(src/test/resources/features/test.feature:13)\r\n",
  "status": "failed"
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
  "error_message": "FindFailed: audienceicon.png: (46x36) in S(0)[0,0 1280x800] E:Y, T:5.0\n  Line 2782, in file Region.java\n\r\n\tat org.sikuli.script.Region.wait(Region.java:2782)\r\n\tat org.sikuli.script.Region.find(Region.java:2329)\r\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\r\n\tat org.sikuli.script.Region.click(Region.java:3736)\r\n\tat step.definitions.DesktopSteps.Navigate_newContact(DesktopSteps.java:158)\r\n\tat ✽.New contact navigation(src/test/resources/features/test.feature:16)\r\n",
  "status": "failed"
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
  "error_message": "FindFailed: firstname.png: (130x27) in S(0)[0,0 1280x800] E:Y, T:5.0\n  Line 2782, in file Region.java\n\r\n\tat org.sikuli.script.Region.wait(Region.java:2782)\r\n\tat org.sikuli.script.Region.find(Region.java:2329)\r\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\r\n\tat org.sikuli.script.Region.click(Region.java:3736)\r\n\tat step.definitions.DesktopSteps.newContact_info(DesktopSteps.java:171)\r\n\tat ✽.New contact, input information(src/test/resources/features/test.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});