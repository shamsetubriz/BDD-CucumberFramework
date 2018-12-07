$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRN Login Feature",
  "description": "",
  "id": "free-crn-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crn-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username and passwor",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User is on Home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_Login_Page()"
});
formatter.result({
  "duration": 3718772560,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10650718,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_enters_username_and_passwor()"
});
formatter.result({
  "duration": 662345713,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1666122866,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 6433985,
  "status": "passed"
});
});