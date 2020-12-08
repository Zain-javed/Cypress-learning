
/// <reference types="cypress" />

describe ("first", function(){
it ('test1', function(){
  cy.visit("https://app.repairdesk.co/index.php");
  //login in to account
  cy.get("#LoginForm_username").type ('zainjaved119@gmail.com')
  cy.wait(1000)
  cy.get("#LoginForm_password").type ('assassin321') 
  cy.wait(1000)
  cy.get ('.mt35 > .setup-btn') .click()
  //Closing Popup 
  cy.get(' [aria-labelledby="ui-id-9"]' )
  cy.wait(1000)
  cy.get('[aria-labelledby="ui-id-9"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon') .click()
  cy.get('[aria-labelledby="ui-id-8"]')
  cy.wait(1000)
  cy.get('[aria-labelledby="ui-id-8"] > .ui-dialog-titlebar > .ui-dialog-titlebar-close > .ui-icon') .click()
  //Opening Point of sale
  cy.get('#ja-44 > a').click()
  //Editing the category
  cy.get ( '#_repair' ) .find ('#yw0 > .slimScrollDiv > .items > :nth-child(2)') .find ('.edit_pen_repaircat') .click({force:true})  
  
  //Disabling the category
  cy.wait(1000)
  cy.get ( '#_repair' ) .find ('#yw0 > .slimScrollDiv > .items > :nth-child(2)') .find ('.disable_pen') .click({force:true}) 
})
//second


})
