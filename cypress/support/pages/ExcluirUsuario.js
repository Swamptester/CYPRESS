let ExcluirUsuario = function() {

  this.selecionarElemento = () => {
    cy.contains('CPF')
      .click();
  };

  this.clickRemoverUsuario = () => {
    cy.xpath("//span[@class='text-danger cursor-pointer'][contains(.,'Remover usuário')]")
      .click();
  };

  this.clickButtonEnviar = () => {
    cy.xpath("//button[@type='button'][contains(.,'Enviar')]")
      .click();
  };

  this.verificacaoExclusaoComSucesso = () => {
    cy.xpath("//div[@role='alert'][contains(text(),'Usuário removido com sucesso')]")
      .should('be.visible')
      .should('contain.text', 'Usuário removido com sucesso');
  };


  this.voltar = () => {
    cy.xpath("//button[@type='button'][contains(.,'Voltar')]")
      .click();
  };

  

  // this.verificarElementoNaoVisivel = () => {
  //   selectedElement.should('not.be.visible');
  // };

};

module.exports = new ExcluirUsuario();
