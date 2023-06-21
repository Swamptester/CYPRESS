let userShowPage = function() {    

    this.getLogin = () => {
        return cy.get('#login')
    }    

    this.getFullName = (text) => {
        return cy.get('#full_name')
    }    

    this.getEmail = (text) => {
        return cy.get('#email')
    }    

    this.getAge = (text) => {
        return cy.get('#age')
    }   

}

export default new userShowPage()