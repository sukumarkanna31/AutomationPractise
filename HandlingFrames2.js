/// <reference types = "cypress /">
/// <reference types ="cypress-iframe/">

import "cypress-iframe"

describe('Handling iframes', function(){
    it('Automate the test cases',function(){

        cy.visit('https://jqueryui.com/draggable/')
        cy.frameLoaded('.demo-frame')
        cy.wait(1000)
        cy.iframe().find('#draggable').then(function(ele){

            const frameText =ele.text();
        
            //assertion to verify text
            expect(frameText).to.contains('Drag me around')
            cy.log(frameText)

        })
    })
})