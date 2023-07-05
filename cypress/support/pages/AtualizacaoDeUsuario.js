let AtualizacaoDeUsuario = function() {
    this.clickButtonConfig = () => {
      cy.xpath("//button[@class='btn btn-white'][contains(text(),'Configuração da financeira')]").click();
    };
  
    this.clickOptionUsuarios = () => {
      cy.xpath("//a[contains(.,'Usuários')]").click();
    };
  
    this.clickUsuario = (text) => {
      cy.get('#search').type(text);
      cy.contains('CPF').first().click();
    };

    this.clickPermissãoDoUsuario = () => {
      // Desmarcar a opção
      cy.get('#permissoes\\[CRED_PERFIL_DELETE\\]')
        .uncheck();
    };

      this.clickButtonSalvar = () => {
        cy.wait(5000); // Aguarda 5 segundos para garantir que o elemento seja carregado
        cy.xpath("//button[contains(@type,'submit')]").click()
      };
    

      this.verificacaoAtualizadoComSucesso = () => {
        cy.xpath("//div[@role='alert'][contains(.,'Usuário editado com sucesso!')]")
        .should('be.visible')
        .should('contain.text', 'Usuário editado com sucesso!');
      };


    this.verificacaoOpçãoDesmarcada = () => {
      // Verificar se está desmarcada
      cy.get('#permissoes\\[CRED_PERFIL_DELETE\\]')
      .should('not.be.checked');
    };
    };
  
  
  
  export default new AtualizacaoDeUsuario();
  