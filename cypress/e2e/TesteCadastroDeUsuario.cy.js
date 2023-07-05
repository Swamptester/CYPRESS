/// <reference types="cypress" />

const telaLogin = require('../support/pages/TelaLogin');
const cadastroDeUsuario = require('../support/pages/CadastroDeUsuario');
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

 var cpfGerado

    it('CT-01 - Cadastro de perfil de acesso com sucesso', () => {
      dataHelper.readYamlFile('cadastroDeUsuarioData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        cadastroDeUsuario.clickOptionUsuarios();
        cadastroDeUsuario.clickButtonNovoUsuario();
        cpfGerado = cadastroDeUsuario.clickCpf();
        cadastroDeUsuario.clickEmailAleatorio();
        cadastroDeUsuario.clickNome(user.nome);
        cadastroDeUsuario.clickSobrenome(user.sobrenome);
        //cadastroDeUsuario.clickIdentificadorExterno(user.identificador);
        //cadastroDeUsuario.clickDominioAcessoExterno(user.dominio);
        cadastroDeUsuario.clickPerfil();
        cadastroDeUsuario.clickButtonCadastrar();
        cadastroDeUsuario.clickButtonSalvar();
        cadastroDeUsuario.verificacaoCadastradoComSucesso();
       
        cy.screenshot();
      });
    });
    it('CT-02 - Cadastro de perfil de acesso sem sucesso', () => {
      dataHelper.readYamlFile('cadastroDeUsuarioData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        cadastroDeUsuario.clickOptionUsuarios();
        cadastroDeUsuario.clickButtonNovoUsuario();
        cadastroDeUsuario.clickCpf(user.cpf);
        cadastroDeUsuario.clickEmail(user.email);
        cadastroDeUsuario.clickNome(user.nome);
        cadastroDeUsuario.clickSobrenome(user.sobrenome);
        //cadastroDeUsuario.clickIdentificadorExterno(user.identificador);
        //cadastroDeUsuario.clickDominioAcessoExterno(user.dominio);
        cadastroDeUsuario.clickPerfil();
        cadastroDeUsuario.clickButtonCadastrar();
        cadastroDeUsuario.verificacaoEmailExistente();
        
        cy.screenshot();
      });
    });
    it('CT-03 - Pesquisa por CPF', () => {
      dataHelper.readYamlFile('cadastroDeUsuarioData', 'usuario1');
      cy.get('@dataYaml').then((user) => {
        cadastroDeUsuario.clickOptionUsuarios();
        cadastroDeUsuario.clickBuscaCpf(cpfGerado);
        cadastroDeUsuario.resultadoPesquisa();

        cy.screenshot();
      });
    });
      });
    });
  
