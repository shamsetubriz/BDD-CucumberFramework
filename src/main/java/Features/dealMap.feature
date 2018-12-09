Feature: Deal Data Creation

  Scenario: Free CRM Login Test Scenario

    Given User is on the Login Page
    When Title of the page is Free CRM
    Then User enters username and password
      |  username     | password  |
      | shamsmuhammad | dhaka123  |
    Then User clicks on login button
    Then User is on Home page
    Then User moves to new deals page
    Then User enters deals details
      | title | amount | probability | commission |
      | test deal1 | 1200 | 10 | 30 |
      | test deal2 | 2200 | 20 | 40 |
      | test deal3 | 3200 | 30 | 50 |
    Then Browser gets closed
