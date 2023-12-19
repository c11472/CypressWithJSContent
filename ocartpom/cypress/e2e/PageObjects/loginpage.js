/// <reference types="cypress"/>

class loginpage{
    //invoke app
    visit(){
        cy.visit("https://admin-demo.nopcommerce.com/login");
        
       // 
       
    }
    // enter username
    fillemail(value)
    {
        const field = cy.get('#Email') // Store locator in field
        field.clear()
        field.type(value)
        
        return this
    
    }
    
    //enter password

    fillpassword(value){
        const field = cy.get('#Password')
        field.clear()
        field.type(value)
        
        return this
    
    }
    
    //hit login
    hitlogin(){
        const button =cy.get('.button-1')
        button.click()
        cy.title().should('eq', 'Dashboard / nopCommerce administration');


    }

}
export default loginpage
