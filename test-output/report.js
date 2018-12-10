$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/hooks.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM app test",
  "description": "",
  "id": "free-crm-app-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3493650926,
  "status": "passed"
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
  "duration": 7877528355,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefenition.user_fills_the_deal_form(DataTable)"
});
formatter.result({
  "duration": 228063348,
  "status": "passed"
});
formatter.match({
  "location": "HooksStepDefenition.deal_is_created()"
});
formatter.result({
  "duration": 57204,
  "status": "passed"
});
formatter.after({
  "duration": 101096745,
  "status": "passed"
});
});