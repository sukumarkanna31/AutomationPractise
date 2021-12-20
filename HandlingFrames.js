/// <reference types = "cypress /">
/// <reference types ="cypress-iframe/">

import "cypress-iframe"
describe('Automate frames',function(){

    it('Handing the i-frames',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(1000)
        cy.frameLoaded('#courses-iframe') //load the frame
        // switch to the frame
       cy.iframe().find('.btn btn-primary view-all-courses-btn').click()
        
        
    })

})