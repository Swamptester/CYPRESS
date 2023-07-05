/// <reference types="cypress" />

let telaLogin = require('../support/pages/TelaLogin')
let dataHelper = require('../support/helpers/DataHelper')

describe('Initiative - Cypress Web', () => {
  context('Example - CRUD', () => {
    beforeEach(() => {
      cy.visit('https://qa.hmg.tec.br/')
    })

    afterEach(() => {
      // Lógica para ser executada após cada teste
    })

    it('CT-01 - Login incorreto', () => {
      dataHelper.readYamlFile('loginData', 'usuario2')
      cy.get('@dataYaml').then((user) => {
        telaLogin.clickOptions()
        telaLogin.clickEmail(user.login)
        telaLogin.clickSenha(user.senha)
        telaLogin.clickButtonLogin()
        cy.contains('Usuário ou senha incorretos').should('be.visible')
        cy.screenshot()
      })
    })

    it('CT-02 - Esqueceu a senha', () => {
      dataHelper.readYamlFile('loginData', 'usuario2')
      cy.get('@dataYaml').then((user) => {
      
      telaLogin.clickOptions()
      telaLogin.clickForgetPassword()
      cy.screenshot()
    })
  })

    it('CT-03 - Login com sucesso', () => {
      dataHelper.readYamlFile('loginData', 'usuario1')
      cy.get('@dataYaml').then((user) => {
        telaLogin.clickOptions()
        telaLogin.clickEmail(user.login)
        telaLogin.clickSenha(user.senha)
        cy.screenshot()
      })
    })
  })
})