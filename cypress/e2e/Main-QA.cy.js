/// <reference types="Cypress" />


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')

cy.get('#name').type("Saleh Waleed")

cy.get('input#email.form-control').type('saleh.waleed@gmail.com')

cy.get('#phone').type('03379747452')

cy.get('#textarea').type('Islamabad, Pakistan')

cy.get('input[type="radio"].form-check-input[value="male"]').check().should('be.checked')

cy.get('#sunday').check().should('be.checked')

cy.get('input#tuesday.form-check-input').check().should('be.checked')

cy.get('input#saturday.form-check-input').check().should('be.checked')

cy.get('input#saturday.form-check-input').check().should('be.checked')

cy.get('select.form-control#country').select('India', {force: true}).invoke("val").should("eq", "india")

cy.get('[value="blue"]').click()

// Locate the date picker input field
cy.get('#datepicker:nth-child(1)').click();

// Select a specific date
 cy.get('a.ui-state-default').contains('15').click();

//  cy.get('table[name="BookTable"] tr td:nth-child(4)').each(($el, index, $list) => {
//   const newText = $el.text();
//   if (newText.includes("Javascript")) {
//     cy.get('table[name="BookTable"] tr td:nth-child(4)').eq(index).next().then(($newestText) => {
//       const newwText = $newestText.text();
//       cy.log(newwText);
//     });
//   }
// });

 // New Window
//  cy.origin('https://demo.opencart.com', () => {
//   cy.get('button[type="button"].btn-inverse');
// });


// cy.visit('https://demo.opencart.com/')
// cy.visit('https://demo.opencart.com', () => {
//   cy.origin('https://demo.opencart.com', () => {
//     cy.get('#search').type('Saleh')
//   })


  // cy.request('https://demo.opencart.com/').then((response) => {
  //   // Perform assertions or interact with elements on the response body
  //   cy.wait(5000)
  //   cy.wrap(response.body).find('button[type="button"].btn-inverse').click();
  // });
  
  cy.get('[onclick="myFunctionAlert()"]').click()
  cy.get('[onclick="myFunctionConfirm()"]').click()
  // cy.get('[onclick="myFunctionPrompt()"]').click()
  // cy.on('window:alert', (text) => {
  //   expect(text).to.contains('Harry potter');
  // });


  cy.get('button[ondblclick="myFunction1()"]').dblclick()

  //Secondary button pressed (usually the right button)
  
  cy.get('#draggable').drag('#droppable', {force:true})

// cy.window().then(win=>{
//   const stub= cy.stub(win, 'open').as('windowopen')
// })
  // cy.window().then(win=>{
  //   win.location.href = pop_url

  //   cy.wait(6000)
  //   // cy.go('back')

    // cy.get('#search').type('Saleh')
  })


})