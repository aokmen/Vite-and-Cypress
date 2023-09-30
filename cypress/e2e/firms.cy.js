describe('firms', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.viewport(1600, 1200)
    })
    
    it('firms test', () => {
      cy.login()
      cy.get('[data-test="titleFirms"]').contains("Firms").should('be.visible').click({force:true});
      cy.get('[data-test="firmsHeader"]').contains("Firms").should('be.visible')
      cy.get('[data-test="firmsButton"]').contains("NEW FIRM").should('be.visible')
      
    })
  })