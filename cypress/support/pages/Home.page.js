export class HomePage {

   getProductBtn(prodName){
       return cy.contains(prodName).parent('div.product').find('button')
   }

   getProductPrice(prodName){
    return cy.contains(prodName).parent().find('p.product-price')
   }

   getItemCount(){
    return cy.get('div.cart-info tr:nth-child(1) td strong')
   }

}
export const homePage = new HomePage() 