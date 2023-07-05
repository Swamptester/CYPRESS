/// <reference types="cypress" />

const telaLogin = require('../support/pages/TelaLogin');
const perfilDeAcesso = require('../support/pages/PerfilDeAcesso');
const atualizacaoDeUsuario = require('../support/pages/AtualizacaoDeUsuario');
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
        telaLogin.clickButtonLogin();
        dataHelper.readYamlFile('perfilDeAcessoData', 'usuario1');
        cy.get('@dataYaml').then((user) => {
          perfilDeAcesso.clickButtonConfig();
          // perfilDeAcesso.clickButtonOptions();
        });
      });
    });

    afterEach(() => {
      // Lógica para ser executada após cada teste
    });

    it('CT-01 - Atualização de Usuario', () => {
      dataHelper.readYamlFile('cadastroDeUsuarioData', 'usuario2');
      cy.get('@dataYaml').then((user) => {
        atualizacaoDeUsuario.clickOptionUsuarios();
        atualizacaoDeUsuario.clickUsuario(user.cpf);
        atualizacaoDeUsuario.clickPermissãoDoUsuario();
        atualizacaoDeUsuario.clickButtonSalvar();
        atualizacaoDeUsuario.verificacaoAtualizadoComSucesso();
        atualizacaoDeUsuario.verificacaoOpçãoDesmarcada();
    
        cy.screenshot();
      });
    });
   
      });
    });
  
