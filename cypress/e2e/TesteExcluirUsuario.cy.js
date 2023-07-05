/// <reference types="cypress" />

const telaLogin = require('../support/pages/TelaLogin');
const cadastroDeUsuario = require('../support/pages/CadastroDeUsuario');
const perfilDeAcesso = require('../support/pages/PerfilDeAcesso');
const excluirUsuario = require('../support/pages/ExcluirUsuario');
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

    var usuarioAExcluir

    it('CT-01 - Exclusão de usuário', () => {
      dataHelper.readYamlFile('cadastroDeUsuarioData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        cadastroDeUsuario.clickOptionUsuarios();
        cadastroDeUsuario.clickButtonNovoUsuario();
        usuarioAExcluir = cadastroDeUsuario.clickCpf();
        cadastroDeUsuario.clickEmailAleatorio();
        cadastroDeUsuario.clickNome(user.nome);
        cadastroDeUsuario.clickSobrenome(user.sobrenome);
        cadastroDeUsuario.clickPerfil();
        cadastroDeUsuario.clickButtonCadastrar();
        cadastroDeUsuario.clickButtonSalvar();
        cadastroDeUsuario.verificacaoCadastradoComSucesso();
        excluirUsuario.voltar();
        excluirUsuario.voltar();
        cadastroDeUsuario.clickBuscaCpf(usuarioAExcluir);
        excluirUsuario.selecionarElemento();
        excluirUsuario.clickRemoverUsuario();
        excluirUsuario.clickButtonEnviar();
        excluirUsuario.verificacaoExclusaoComSucesso();
        cy.screenshot();
      });
    });
  });
});