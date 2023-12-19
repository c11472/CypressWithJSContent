/// <reference types="cypress"/>

import loginpage from "./PageObjects/loginpage"

describe('pom demo',() =>{
    it('pom test',function(){
        const login = new loginpage() // object for page class
        login.visit()
        
        
        login.fillemail('admin@yourstore.com') // test dat as parameter
        login.fillpassword('admin') // provide testdata as param
        login.hitlogin()
        

        //cy.title().should('eq', 'Your store. Login');

        
        
        
    
    })
}) // suite block end

