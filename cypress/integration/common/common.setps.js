import {Given} from "cypress-cucumber-preprocessor/steps"
import {homePage} from '../../support/pages/Home.page'
const url= "https://rahulshettyacademy.com/seleniumPractise/#/"

Given('user has navigated to GreenKart site', ()=>{
    cy.log("user has navigated to GreenKart site")
    cy.visit(Cypress.env('url'))
    // cy.log("Getting thi.data.name value :"+this.data.name)
    
    cy.pause()
})

When('user adds {string} to the cart', (prodName)=>{
    cy.log(`user adds ${prodName} to the cart`)
    homePage.getProductBtn(prodName).click()
    
})