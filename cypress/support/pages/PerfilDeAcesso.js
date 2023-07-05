let PerfilDeAcesso = function() {
    this.clickButtonConfig = () => {
      cy.xpath("//button[@class='btn btn-white'][contains(text(),'Configuração da financeira')]").click();
    };
  
   // this.clickButtonOptions = () => {
       // cy.xpath("(//button[@class='navbar-toggler'])[1]").click();
     // };
    this.clickOptionPerfisDeAcesso = () => {
      cy.xpath("//a[contains(., 'Perfis de acesso')]").click();
    };
  
    this.clickButtonNovo = () => {
        cy.get('div.ml-auto button.btn.btn-primary').click();
      };

    this.clickTituloDoPerfil = (text) => {
      cy.xpath("//input[contains(@type,'text')]").type(text);
    };
  
    this.clickButtonFinanceira = () => {
      cy.xpath("//span[@class='text-secondary font-weight-bold h2 m-0 ml-2'][contains(.,'Financeira')]").click();
    };
  
    this.clickOptionPodeVisualizarUsuarios = () => {
        cy.get("#permissoes\\[CRED_USUARIOS_LIST\\]").click();
      };

    this.clickOptionPodeListarPerfisDePermissoesParaUsuarios = () => {
      cy.xpath("//label[contains(.,'Pode listar perfis de permissões para usuários')]").click();
    };
  
    this.clickButtonCriar = () => {
      cy.xpath("//button[contains(.,'Criar')]").click();
    };

    this.verificaçãoMensagemDeCriadoComSucesso = () => {
        cy.xpath("//div[@role='alert'][contains(.,'Perfil criado com sucesso!')]")
  .should('be.visible')
  .should('contain.text', 'Perfil criado com sucesso!');
    }

    this.verificaçãoMensagemDeErro = () => {
        cy.xpath("//div[@role='alert']")
  .should('be.visible')
  .should('contain.text', 'É necessário selecionar ao menos uma permissão para cadastrar o perfil');
    }
  };
  
  export default new PerfilDeAcesso();
  