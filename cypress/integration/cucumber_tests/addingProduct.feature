@test @addProduct
Feature: As a customer, I want to add different products from the cart so that I can buy them
    
  Background: User went to the site
    Given user has navigated to GreenKart site
    
    @addProduct1
    Scenario: 1-Check if the items have been added to the cart
      When user adds "Brocolli" to the cart
      And user adds "Cucumber" to the cart
      Then user should see "2" items showing on top right side
    
    @addProduct2  
    Scenario: 2-Check if the items have been added to the cart using data-table
      And user adds following items to the cart
        | ItemName | Price |
        | Mushroom |  75   |
        | Cucumber |  48   |
        | Potato   |  22   |
      Then user should see "3" items showing on top right side

    @addProduct3 @failedTest @wip
    Scenario: 3-Check if more items have been added to the cart
      When user adds "Tomato" to the cart
      And user adds "Beans" to the cart
      Then user should see "3" items showing on top right side
