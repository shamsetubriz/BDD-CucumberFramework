$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/dealMap.feature");
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
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "shamsmuhammad",
        "dhaka123"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User moves to new deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters deals details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 14
    },
    {
      "cells": [
        "test deal1",
        "1200",
        "10",
        "30"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal2",
        "2200",
        "20",
        "40"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal3",
        "3200",
        "30",
        "50"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Browser gets closed",
  "keyword": "Then "
});
formatter.match({
  "location": "DealMapStepDefenition.user_is_on_the_Login_Page()"
});
formatter.result({
  "duration": 3346561976,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.title_of_the_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10156960,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 533187006,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1747767100,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 12133975,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.user_moves_to_new_deals_page()"
});
formatter.result({
  "duration": 1742443632,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 5541821432,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefenition.browser_gets_closed()"
});
formatter.result({
  "duration": 109065454,
  "status": "passed"
});
});