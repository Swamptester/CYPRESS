let userEditPage = function() {    

    this.fillLogin = (text) => {
        cy.get('#user_login').type(text)
    }    

    this.fillFullName = (text) => {
        cy.get('#user_full_name').type(text)
    }    

    this.fillEmail = (text) => {
        cy.get('#user_email').type(text)
    }    

    this.fillAge = (text) => {
        cy.get('#user_age').type(text)
    }   
    
    this.clickSave = () => {
        cy.contains('Salvar').click()
    }
}

export default new userEditPage()