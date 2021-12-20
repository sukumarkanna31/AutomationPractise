/// <reference types="cypress" />

describe('Automate the framework',function(){
    
before(function(){
    //cy.fixture(); this methods helpful to talk with files present in fixtures folder
    cy.fixture('example').then(function(data)
    {

        this.data = data;

    })

})
    
it('FirstTestCase',function(){

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.wait(1000)
    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)


})
    
})