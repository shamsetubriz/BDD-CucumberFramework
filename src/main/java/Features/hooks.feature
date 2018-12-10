Feature: Free CRM app test

  Scenario: free crm create deal test
    Given user is on newdeal page
    When user fills the deal form
    |test deal | 1200 | 10 | 30 |
    Then deal is created



  #Scenario: free crm create contact test

   # Given user is on contact page
   # When user fills the contact form
   # Then contact is created



 # Scenario Outline: free crm create mail test
  #  Given user is on mail page
  #  When user fills the mail page
  #  Then mail is created
  #  Examples:
  #        | mail1 |
  #        | mai2  |
  #        | mail3 |