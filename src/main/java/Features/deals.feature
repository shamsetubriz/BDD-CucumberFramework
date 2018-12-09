Feature: Deal Data Creation

Scenario: Free CRM Login Test Scenario

  Given User is on the Login Page
  When Title of the page is Free CRM
  Then User enters username and password
  | shamsmuhammad | dhaka123 |
  Then User clicks on login button
  Then User is on Home page
  Then User moves to new deals page
  Then User enters deals details
  | test deal | 1200 | 10 | 30 |
  Then Browser gets closed
