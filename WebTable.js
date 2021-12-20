/// <reference types ="cypress /">
/// <reference types ="cypress-iframe/">

describe('Handling webtables practise',function(){

    it('Automate handling webtables',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
        //tr td:nth-child(2) iterate the 2nd column elements in Table
        cy.get('tr td:nth-child(2)').each((ele,index,list)=>{

            //iterate the each and every element and store into the text
           const txt = ele.text();
           // if text matches with "Python" go inside the loop, fetch the "Price"
           if(txt.includes("REST")){
            //then() needs to resolve promise,move further element
            //index here we know the which index of python is present in table
            //eq(index) --dynamically passing the element
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
               const priceText = price.text(); // needs to print the text
               cy.log(priceText)

               //validating the conditions
               expect(priceText).to.contains(35) //if it is equals to price "35" test passed, otherwise fails
               expect(priceText).to.equal(35)
            })

           }

        })



    })
})

