/// <reference types ="cypress /"

describe('Handling test suite',function(){

    it('Automate  test case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        // cypress is asychronous in nature, there is no gurantee in sequence of execution,
        // cypress will take care of it
        // promise--> a promise is state or behaviour of your step,
        // its consist of 3 types 
        // a)resolve --> step is executed b)Rejected: step is rejected c)pending: if step is trying to load to wait
        cy.get('.products').as('prodLocator') // here as() method we are passing "reference name"
        cy.get('@prodLocator').find('.product').should('have.length',4)
        cy.get('@prodLocator').find('.product').each((i,index,list) =>{
                     const vegTxt = i.find('h4.productName').text();
                     if(vegTxt.includes("Carrot")){
                     cy.wrap(i1).find('button').click();
                     }

        })


    })
})