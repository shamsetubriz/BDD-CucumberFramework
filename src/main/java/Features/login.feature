Feature: Free CRN Login Feature

Scenario: Free CRM Login Test Scenario

Given User is on the Login Page
When Title of the page is Free CRM
Then User enters "shamsmuhammad" and "dhaka123"
Then User clicks on login button
Then User is on Home page
  And Browser gets closed




  Scenario Outline: Free CRM Login Test Scenario

    Given User is on the Login Page
    When Title of the page is Free CRM
    Then User enters "<username>" and "<password>"
    Then User clicks on login button
    Then User is on Home page
    And Browser gets closed

    Examples:
      | username    | password |
      |shamsmuhammad|dhaka123  |
      |shamsmuhammad|dhaka123  |






