export class CartDropdown {

   getCartIcon(){
     return cy.get('a.cart-icon')
   }

   getCartItems(){
     return cy.get('div.cart li.cart-item')
   }

   getProductName(prodName){
     return cy.get('div.cart li.cart-item').contains(prodName)
   }

   getProductPrice(prodName){
     return cy.get('div.cart li.cart-item').contains(prodName).parent().find('.product-price')
   }

   getProductNameRemoveLink(prodName){
    return cy.contains(prodName).parent().find('a.product-remove')
  }
}
export const cart = new CartDropdown() 