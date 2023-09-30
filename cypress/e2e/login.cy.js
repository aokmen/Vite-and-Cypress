describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1600, 1200)
  })
  
  it('login test', () => {
    
    cy.url().should('include', '/')
    cy.get('[data-test="loginHeader"]').contains("Login").should('be.visible')
    cy.get('[data-test="emailLogin"]').should('be.visible').type("ready2@ready.com")
    cy.get('[data-test="passwordLogin"]').should('be.visible').type("Ready.123")
    cy.get('[data-test="submitLogin"]').should('be.visible').click({force:true})
    cy.url().should('include', '/stocks')
  })
})