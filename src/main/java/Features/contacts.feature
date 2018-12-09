Feature: Free CRM Create Contact

  Scenario Outline: Free CRM Login Test Scenario

    Given User is on the Login Page
    When Title of the page is Free CRM
    Then User enters "<username>" and "<password>"
    Then User clicks on login button
    Then User is on Home page
    Then User moves to new contacts page
    Then User enters contact details "<firstname>" and "<lastname>" and "<department>"
    And Browser gets closed

    Examples:
      |   username    |   password  |   firstname   |   lastname  |   department   |
      | shamsmuhammad |   dhaka123  |   qurrat      |   shams     |   hr           |
      | shamsmuhammad |   dhaka123  |   ayaat       |   shams     |   dev          |