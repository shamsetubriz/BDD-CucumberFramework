$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal Data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-login-test-scenario",
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
  "name": "User enters username and password",
  "rows": [
    {
      "cells": [
        "shamsmuhammad",
        "dhaka123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1200",
        "10",
        "30"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Browser gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefenition.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 3579966226,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 9917848,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 482022720,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1714238407,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 9782225,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 3903378075,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 255357545,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefenition.browser_gets_closed()"
});
formatter.result({
  "duration": 104491347,
  "status": "passed"
});
});