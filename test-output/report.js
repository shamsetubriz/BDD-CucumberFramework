$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "free crm create deal test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-deal-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on newdeal page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user fills the deal form",
  "rows": [
    {
      "cells": [
        "test deal",
        "1200",
        "10",
        "30"
      ],
      "line": 6
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "deal is created",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefenition.user_is_on_deal_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksStepDefenition.user_fills_the_deal_form(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksStepDefenition.deal_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "free crm create contact test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-contact-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is on contact page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user fills the contact form",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "contact is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "free crm create mail test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-mail-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on mail page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user fills the mail page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "mail is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-mail-test;",
  "rows": [
    {
      "cells": [
        "mail1"
      ],
      "line": 25,
      "id": "free-crm-app-test;free-crm-create-mail-test;;1"
    },
    {
      "cells": [
        "mai2"
      ],
      "line": 26,
      "id": "free-crm-app-test;free-crm-create-mail-test;;2"
    },
    {
      "cells": [
        "mail3"
      ],
      "line": 27,
      "id": "free-crm-app-test;free-crm-create-mail-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "free crm create mail test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-mail-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on mail page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user fills the mail page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "mail is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 27,
  "name": "free crm create mail test",
  "description": "",
  "id": "free-crm-app-test;free-crm-create-mail-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user is on mail page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user fills the mail page",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "mail is created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});