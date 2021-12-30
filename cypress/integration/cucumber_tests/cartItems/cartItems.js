import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

import {cart} from '../../../support/pages/CartDropdown.page'
// const url= "https://rahulshettyacademy.com/seleniumPractise/#/"

// Given('user has navigated to GreenKart site', ()=>{
//     cy.log("user has navigated to GreenKart site")
//     cy.visit(url)
//     // cy.log("Getting thi.data.name value :"+this.data.name)
//     // cy.wait(3000)
// })

// When('user adds {string} to the cart', (prodName)=>{
//     cy.log(`user adds ${prodName} to the cart`)
//     homePage.getProductBtn(prodName).click()
// })

Then('user should see {string} items showing in the cart', (itemCount)=>{
    cy.log(`user should see "${itemCount}" items showing in the cart`)
    cart.getCartIcon().click()
    cart.getCartItems().should('have.length',itemCount)
    // cy.pause()
})

Then('user should see following items with prices', (dataTable)=>{
    cy.log(`user should see following items with prices`)
    dataTable.hashes().forEach(item => {
        cy.log("Item Name : "+item.ItemName)
        cart.getProductName(item.ItemName).should('be.visible')
        cart.getProductPrice(item.ItemName).should('have.text',item.Price)
        cart.getProductName(item.ItemName).siblings().should('have.text',item.Price) // siblings()
    } )
    // homePage.getItemCount().should('have.text',`${itemCount}`)
    // cy.pause()
})