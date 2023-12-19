/// <reference types="cypress"/>

describe('test link register43',() =>{
    
    it('Invoke app',function(){
        //launch
        cy.visit('https://demo.opencart.com/index.php?route=account/register&language=en-gb')

       // cy.get('div.nav:(nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click();
       cy.contains('Address Book').click();
        /* click on a link
        cy.gey('#id').click();

        // checkbox

        // enter user name
        cy.get('#input-firstname').type("gayatri");
        // enter password
        cy.get('#input-lastname').type('mishra');*/
    
    })
  

  it('click link',function(){
  
   // cy.get('div.nav:(nth-child(2) > ul:nth-child(1) > li:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click();
   cy.contains('Address Book').click();
    /* click on a link
    cy.gey('#id').click();

    // checkbox

    // enter user name
    cy.get('#input-firstname').type("gayatri");
    // enter password
    cy.get('#input-lastname').type('mishra');*/

})
})