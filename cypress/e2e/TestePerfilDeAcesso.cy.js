/// <reference types="cypress" />

const telaLogin = require('../support/pages/TelaLogin');
const perfilDeAcesso = require('../support/pages/PerfilDeAcesso');
const dataHelper = require('../support/helpers/DataHelper');

describe('Initiative - Cypress Web', () => {
  context('Example - CRUD', () => {
    beforeEach(() => {
      cy.visit('https://qa.hmg.tec.br/');
      dataHelper.readYamlFile('loginData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        telaLogin.clickOptions();
        telaLogin.clickEmail(user.login);
        telaLogin.clickSenha(user.senha);
        telaLogin.clickButtonLogin()
      });
    });

    afterEach(() => {
      // Lógica para ser executada após cada teste
    });

    it('CT-01 - Cadastro de perfil de acesso com sucesso', () => {
      dataHelper.readYamlFile('perfilDeAcessoData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        perfilDeAcesso.clickButtonConfig();
       // perfilDeAcesso.clickButtonOptions();
        perfilDeAcesso.clickOptionPerfisDeAcesso();
        perfilDeAcesso.clickButtonNovo();
        perfilDeAcesso.clickTituloDoPerfil(user.tituloPerfil);
        perfilDeAcesso.clickButtonFinanceira();
        perfilDeAcesso.clickOptionPodeVisualizarUsuarios();
        perfilDeAcesso.clickOptionPodeListarPerfisDePermissoesParaUsuarios();
        perfilDeAcesso.clickButtonCriar();
        perfilDeAcesso.verificaçãoMensagemDeCriadoComSucesso();
    
        cy.screenshot();
      });
    });

    it('CT-01 - Cadastro de perfil de acesso sem sucesso', () => {
      dataHelper.readYamlFile('perfilDeAcessoData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        perfilDeAcesso.clickButtonConfig();
        //perfilDeAcesso.clickButtonOptions();
        perfilDeAcesso.clickOptionPerfisDeAcesso();
        perfilDeAcesso.clickButtonNovo();
        perfilDeAcesso.clickTituloDoPerfil(user.tituloPerfil);
      
        perfilDeAcesso.clickButtonCriar();
        perfilDeAcesso.verificaçãoMensagemDeErro();
        cy.screenshot();
      });
    });

   
      });
    });
  
