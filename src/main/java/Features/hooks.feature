Feature: Free CRM app test

  Scenario: free crm create deal test
    Given user is on newdeal page
    When user fills the deal form
      | test deal | 1200 | 10 | 30 |
    Then deal is created