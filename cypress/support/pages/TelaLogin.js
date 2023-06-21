let telaLogin = function() {    

    this.clickOptions = () =>{
        cy.get('#ipt_optionsingin').select('Acesso por Email').click()
        } 
    } 
    {    

        this.ClickEmail = (text) => {
            cy.get('#ipt_email').type(text)
            
        }  
    }
    {    

        this.ClickSenha = (text) => {
            cy.get('#ipt_password').type(text)
        }  
    }
    {    

        this.ClickButtonLogin = () => {
            cy.xpath("//button[@class='btn btn-primary col-12'][contains(.,'LOGIN')]").click();
        }  
    }
    {    

        this.ClickForgetPassword = () => {
            cy.xpath("//a[contains(., 'Esqueceu a senha?')]").click();
            cy.url().should('eq', 'https://qa.hmg.tec.br/recovery-password');
        };    
        }  
    


export default new telaLogin()