import dados from '../fixtures/dados.json'

describe('Simulação de compra de passagem no BlazeDemo', () => {
  

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorne false para evitar que o Cypress falhe o teste
    return false;
  });

  it('Deve completar o fluxo de compra de passagem', () => {
    // Acessa a página inicial do BlazeDemo
    cy.visit('https://blazedemo.com')

    // Restante do teste
    cy.contains('Welcome to the Simple Travel Agency!', { timeout: 10000 }).should('be.visible')
    cy.get('select[name="fromPort"]').select('Boston').should('have.value', 'Boston')
    cy.get('select[name="toPort"]').select('New York').should('have.value', 'New York')
    cy.get('input[type="submit"]').click()
    
    cy.url().should('include', '/reserve.php')
    cy.get('input[type="submit"]').first().click()
    cy.contains('Your flight from TLV to SFO has been reserved.', { timeout: 10000 }).should('be.visible')

    cy.url().should('include', '/purchase.php')
    cy.get('input#inputName').type('John Doe')
    cy.get('input#address').type('123 Main Street')
    cy.get('input#city').type('New York')
    cy.get('input#state').type('NY')
    cy.get('input#zipCode').type('10001')
    cy.get('input#creditCardNumber').type('1234567890123456')
    cy.get('input#creditCardMonth').clear().type('12')
    cy.get('input#creditCardYear').clear().type('2024')
    cy.get('input#nameOnCard').type('John Doe')
    cy.get('input#rememberMe').check()
    cy.get('input[type="submit"]').click()

    cy.url().should('include', '/confirmation.php')
    cy.contains('Thank you for your purchase today!', { timeout: 10000 }).should('be.visible')
    cy.get('table').within(() => {
    
    })
  });
});