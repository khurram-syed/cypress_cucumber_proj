@test @cart
Feature: As a customer, I want to check cart items so that I can buy them
    
  Background: User went to the site
    Given user has navigated to GreenKart site
    @cart    
    Scenario: 1-Check if the cart items are getting added correctly
      When user adds "Brocolli" to the cart
      And user adds "Cucumber" to the cart
      Then user should see "2" items showing in the cart
      And user should see following items with prices
        | ItemName | Price |
        | Brocolli |  120   |
        | Cucumber |  48   |
       
    
    