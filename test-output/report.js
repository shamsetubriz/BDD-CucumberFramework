$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contact",
  "description": "",
  "id": "free-crm-create-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-contact;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
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
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cdepartment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-contact;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "department"
      ],
      "line": 15,
      "id": "free-crm-create-contact;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "shamsmuhammad",
        "dhaka123",
        "qurrat",
        "shams",
        "hr"
      ],
      "line": 16,
      "id": "free-crm-create-contact;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "shamsmuhammad",
        "dhaka123",
        "ayaat",
        "shams",
        "dev"
      ],
      "line": 17,
      "id": "free-crm-create-contact;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-contact;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"shamsmuhammad\" and \"dhaka123\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters contact details \"qurrat\" and \"shams\" and \"hr\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 3527083446,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 9056749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shamsmuhammad",
      "offset": 13
    },
    {
      "val": "dhaka123",
      "offset": 33
    }
  ],
  "location": "LoginStepDefenition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 504017178,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2083075253,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 11004940,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 836592050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qurrat",
      "offset": 29
    },
    {
      "val": "shams",
      "offset": 42
    },
    {
      "val": "hr",
      "offset": 54
    }
  ],
  "location": "LoginStepDefenition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1255982003,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.browser_gets_closed()"
});
formatter.result({
  "duration": 145069232,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-create-contact;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User enters \"shamsmuhammad\" and \"dhaka123\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User moves to new contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User enters contact details \"ayaat\" and \"shams\" and \"dev\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 2367334417,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 7930326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shamsmuhammad",
      "offset": 13
    },
    {
      "val": "dhaka123",
      "offset": 33
    }
  ],
  "location": "LoginStepDefenition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 528092682,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1341074724,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 9513341,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.user_moves_to_new_contacts_page()"
});
formatter.result({
  "duration": 860233032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ayaat",
      "offset": 29
    },
    {
      "val": "shams",
      "offset": 41
    },
    {
      "val": "dev",
      "offset": 53
    }
  ],
  "location": "LoginStepDefenition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 1267554899,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefenition.browser_gets_closed()"
});
formatter.result({
  "duration": 103004944,
  "status": "passed"
});
});