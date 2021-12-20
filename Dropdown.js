/// <reference types ="cypress /">

describe('handle the dropdown' ,function(){
    it('handle the static dropdown' ,function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(1000)

        //select('') => select the text or value
        // here we are checking the value is option1 or not
        cy.get('#dropdown-class-example').select('option1').and('have.value','option1')
        cy.get('#dropdown-class-example').select('option2').and('have.value','option2')
        cy.get('#dropdown-class-example').select('option3').and('have.value','option3')

        // here select option2 and checking the value is option3, its comes assertion error
      //  cy.get('#dropdown-class-example').select('option2').and('have.value','option3')

       // handle the dynamic dropdown

       cy.get('#autocomplete').type('ind')
       cy.wait(1000)
       cy.get('.ui-menu-item div').each(($ele,index,$list) =>{
        if($ele.text()==="Indonesia"){
            $ele.click()
        }
        

       })
    })
})