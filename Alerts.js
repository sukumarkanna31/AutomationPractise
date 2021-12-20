/// <reference types="cypress" />

describe('Automate the Alerts',function(){

    it('Automate confirm Alert',function(){
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(1000)
         
        // click on "Alert" button
        cy.get('#alertbtn').click()
        
        //Accept the alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Hello , share this practice page and share your knowledge");
          })


    
          //click on the "Confirm" button & click on 'Ok' button in Alert
          cy.get('#confirmbtn').click()

          //confirm the alerts
          cy.on('window:confirm', (str)=>{

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
          })
        

        /*  Clicking the CANCEL [X] button in the confirmation popup :
            ==========================================================

             cy.on("window:confirm", (str) => {
             return false;
          });


        */

    })
})