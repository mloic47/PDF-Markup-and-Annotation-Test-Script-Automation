describe('Annotations', () => {

  beforeEach(() => {
    cy.login(')
  })

  it('I can add a note in the document', () => {
    cy.get('.add-annotation').click()
    cy.get('.annotation-text').type('This is a test annotation')
    cy.get('.annotation-save').click()
    cy.get('.annotation').should('be.visible')

  })
})