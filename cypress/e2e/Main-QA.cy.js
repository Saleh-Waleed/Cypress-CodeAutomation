/// <reference types="Cypress" />
import HomePage_POM from './HomePage_POM'


describe('template spec', () => {
  it('HomePage functionalities', () => {

    const homePage = new HomePage_POM
    // main_pom.getUrl()
    cy.fixture('example').then((data) => {
      // Visiting the URL
      Cypress.env('url');
      cy.visit(Cypress.env('url'));

 homePage.Name()
      
 homePage.Email()

homePage.Phone()

homePage.Address()

homePage.SelectGender()

homePage.SelectDay()

homePage.SelectCountry()

homePage.SelectDate()

   // Web Table : Content  
  
  homePage.Alerts()  

homePage.DragAndDrop()
  })

})
})
