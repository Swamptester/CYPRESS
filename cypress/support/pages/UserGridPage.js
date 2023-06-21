let userGridPage = function() {    

    this.clickNew = () =>{
        cy.contains('Novo Usuário').click()
    }    
}

export default new userGridPage()