/// <reference types="cypress"/>
describe('sample test demo1',() =>{
    
    it('tutorialpoint',function(){
        cy.visit('https://www.tutorialspoint.com/index.htm');
        cy.wait(2000);
        cy.get('li.nav__item:nth-child(4) > a:nth-child(1)').click();
        cy.get()

        
    }) 
  })
  