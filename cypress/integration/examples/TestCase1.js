describe('Daraz App', function()
{
    it('Verify Title of the page', function() {
        
        cy.visit('https://kclastute.com/') 
        cy.title().should('eq','KCL Astute Capital')
})
it('Verify Submenu', function() {
    cy.visit('https://kclastute.com/') 
    cy.contains('Login').trigger('mouseover')
    cy.contains('Login').click()
cy.contains('Mero Share Login').trigger('mouseover')
cy.contains('Mero Share Login').click()

  
})


})