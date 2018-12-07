Feature: Free CRM create new contact

  Scenario: Create a new contact scenario

    Given User is on Home page
    Then User clicks on contact button
    Then user mouse hover to New Contact option
    Then User clicks on new contact
    Then user enters firstname and last name
    Then user clicks on save
    Then verify new contact created

