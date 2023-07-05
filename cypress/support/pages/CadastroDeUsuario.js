let CadastroDeUsuario = function() {
  this.clickButtonConfig = () => {
    cy.xpath("//button[@class='btn btn-white'][contains(text(),'Configuração da financeira')]").click();
  };

  this.clickOptionUsuarios = () => {
    cy.xpath("//a[contains(.,'Usuários')]").click();
  };

  this.clickButtonNovoUsuario = () => {
    cy.xpath("//button[@class='btn btn-primary']").click();
  };

  var generatedCpf;
  const gerarCpf = require('gerar-cpf');
  this.clickCpf = () => {
    
     generatedCpf = gerarCpf();

    cy.get("#cpf").type(generatedCpf); 
    return generatedCpf;
  }; 
    
  this.clickEmailAleatorio = () => {
    const timestamp = Date.now();
    const email = `email_${timestamp}@example.com`;
    cy.get("#email").type(email);
  };

  this.clickNome = (text) => {
    cy.get("#nome").type(text);
  };

  this.clickSobrenome = (text) => {
    cy.get("#sobrenome").type(text);
  };

  this.clickEmail = (text) => {
    cy.get('#email').type(text)
  };

  this.clickPerfil = () => {
    cy.get('#perfil').select('as')
  };

  this.clickButtonCadastrar = () => {
    cy.xpath("//button[@type='submit'][contains(text(),'Cadastrar')]").click();
  };

  this.clickButtonSalvar = () => {
    cy.wait(5000); // Aguarda 5 segundos para garantir que o elemento seja carregado
    cy.xpath("//button[contains(@type,'submit')]").click();
  };

  this.verificacaoCadastradoComSucesso = () => {
    cy.xpath("//div[@role='alert'][contains(text(),'Usuário editado com sucesso!')]")
      .should('be.visible')
      .should('contain.text', 'Usuário editado com sucesso!');
  };

  this.verificacaoEmailExistente = () => {
    cy.xpath("//small[@class='text-danger form-text'][contains(text(),'Email já cadastrado para outro cpf')]")
      .should('be.visible')
      .should('contain.text', 'Email já cadastrado para outro cpf');
    };
  
    this.clickBuscaCpf = (cpf) => {
      cy.get('#search').type(cpf);
      cy.get('#search').type('{enter}');
    };
  
    this.resultadoPesquisa = (cpf) => {
      cy.xpath(`//div[@class='cards cursor-pointer'][contains(text(),'${cpf}')]`)
        .should('have.length', 1);
    };
    
    this.verificarElementoNaoVisivel = (selectedElement) => {
      selectedElement.should('not.be.visible');
    };
  };
  
  module.exports = new CadastroDeUsuario();
  
