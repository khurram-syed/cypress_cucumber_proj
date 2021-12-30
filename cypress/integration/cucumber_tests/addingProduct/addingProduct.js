import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import {homePage} from '../../../support/pages/Home.page'
// const url= "https://rahulshettyacademy.com/seleniumPractise/#/"
// // import {Before} from "cypress-cucumber-preprocessor/steps"
// // Before(()=>{
// //     cy.log("**Before Each***")
// //     cy.fixture('example').then(function(data){
// //         this.data=data
// //     })
    
// // })

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

When('user adds following items to the cart', (dataTable)=>{
    cy.log(`user adds following items to the cart`)
    const data = dataTable.raw()
    cy.log("dataTable.raw() :"+data[1][0]) // 2nd row 1st column : Mushroom
    cy.log("dataTable.rows :"+dataTable.rows()) //
    cy.log("dataTable.hashes :"+dataTable.hashes())
    dataTable.hashes().forEach(item => {
        cy.log('Adding => '+item.ItemName)
        homePage.getProductBtn(item.ItemName).click()
        homePage.getProductPrice(item.ItemName).then(price => {
            cy.log("Price Text :"+price.text())
            expect(price.text()).to.equal(item.Price)
        })
    })
})

Then('user should see {string} items showing on top right side', (itemCount)=>{
    cy.log(`user should see ${itemCount} items showing on top right side`)
    homePage.getItemCount().should('have.text',`${itemCount}`)
    // cy.pause()
})
