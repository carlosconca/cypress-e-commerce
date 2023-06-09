/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//check box 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window alert
cy.on('window:alert', (str) =>{
    //Mocha
    expect(str).to.eq('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm', (str) =>{
    //Mocha
    expect(str).to.eq('Hello , Are you sure you want to confirm?')
})
cy.get('#opentab').invoke('removeAttr', 'target').click()

cy.url().should('include', 'rahulshettyacademy')

cy.go('back')

}  )
 
 
 
}  )