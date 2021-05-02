
describe('Register', function()
{
    beforeEach(function()
    {
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it ('register scenario', function() {
        
        cy.visit('https://demo.nopcommerce.com/') 
        
    
        cy.contains('Register').should('be.visible').click()
       // cy.get('input[type="checkbox"]').check()
        cy.get('input[name="FirstName"]').type(this.data.FirstName)
        cy.get('input[name="LastName"]').type(this.data.LastName)
       // cy.get(".date-picker-wrapper > [aria-invalid='false']:nth-child(1)").select(this.data.DateOfBirthDay)
        //cy.get(".date-picker-wrapper > [aria-invalid='false']:nth-child(2)").select(this.data.DateOfBirthMonth)
        //cy.get(".date-picker-wrapper > [aria-invalid='false']:nth-child(3").select(this.data.DateOfBirthYear)
        cy.get("#Email").type(this.data.Email)
        cy.get("[name='Company']").type(this.data.Company)
        cy.get("#Password").type(this.data.Password)
        cy.get("#ConfirmPassword").type(this.data.ConfirmPassword)
        cy.get("#register-button").contains('Register').should('be.visible').click()
        
    })
})
    describe('Login', function() { 
        it('Verify Title of the page', function(){

        
        cy.visit('https://demo.nopcommerce.com/') 
        cy.title().should('eq','nopCommerce demo store')
        cy.contains('Log in').should('be.visible').click()
    
        cy.get("#Email").type('neupanesamita2005@gmail.com')
        cy.get("#Password").type('user123')
        cy.get(".button-1.login-button").click()
    })
})   
