

class HomePage
{
 getUrl()
 {
     Cypress.env('url')
     return cy.visit(Cypress.env('url')) 
 }


Name()
{ 
    cy.fixture('example').then((data) => {
    return cy.get('#name').type(data.name);
    })
}

 Email()
      { cy.fixture('example').then((data) => {
    return cy.get('input#email.form-control').type(data.email)
      })
 }

Phone()
{
     cy.fixture('example').then((data) => {
        return cy.get('#phone').type(data.phone)
     }) 
} 

Address()
{
    cy.fixture('example').then((data) => {
       return cy.get('#textarea').type(data.address)
    }) 
} 

SelectGender()
{
    cy.fixture('example').then((data) => {
       return cy.get('#male').check().should('be.checked')
    }) 
} 

SelectDay()
{
    cy.fixture('example').then((data) => {
       cy.get('input#tuesday.form-check-input').check().should('be.checked')
       cy.get('input#saturday.form-check-input').check().should('be.checked')

    }) 
}
 
SelectCountry()
{
    cy.fixture('example').then((data) => {
        cy.get('select.form-control#country').select('India', {force: true}).invoke("val").should("eq", "india")
    }) 
}

SelectDate()
{
    cy.fixture('example').then((data) => {
        cy.get('[value="blue"]').click()
        // Locate the date picker input field
        cy.get('#datepicker:nth-child(1)').click();
        // Select a specific date
        cy.get('a.ui-state-default').contains('20').click();
    }) 
}
 
Alerts()
{
    cy.get('[onclick="myFunctionAlert()"]').click()
  cy.get('[onclick="myFunctionConfirm()"]').click()
}
// NewWindow()
// {
// cy.request('https://demo.opencart.com/').then((response) => {
  //   // Perform assertions or interact with elements on the response body
  //   cy.wait(5000)
  //   cy.wrap(response.body).find('button[type="button"].btn-inverse').click();
  // });
//}

DragAndDrop()
{
      //Secondary button pressed (usually the right button)
  cy.get('#draggable').drag('#droppable', {force:true})
}

}
export default HomePage