describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://app.zipboard.co')
    cy.get('#login-username').type('loic')
  })
})