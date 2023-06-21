/// <reference types="cypress" />

let telaLogin = require('../support/pages/TelaLogin')
let userGridPage = require('../support/pages/UserGridPage')
let userEditPage = require('../support/pages/UserEditPage')
let userShowPage  = require('../support/pages/UserShowPage')
let dataHelper = require('../support/helpers/DataHelper')

describe('Initiative - Cypress Web', () => {
  context('Example - CRUD', () => {
    beforeEach(() => {
      cy.visit('/')
      telaLogin.clickUser()
    })

    afterEach(() => {
      // Lógica para ser executada após cada teste
    })

    it('CT-01 - Login incorreto', () => {
      dataHelper.readYamlFile('loginData', 'usuario2')
      cy.get('@dataYaml').then((user) => {
        telaLogin.clickOptions()
        telaLogin.ClickEmail(user.login)
        telaLogin.ClickSenha(user.senha)
        telaLogin.ClickButtonLogin()
        cy.contains('Usuário ou senha incorretos').should('be.visible')
        cy.screenshot()
      })
    })

    it('CT-02 - Esqueceu a senha', () => {
      telaLogin.ClickForgetPassword()
      cy.screenshot()
    })

    it('CT-03 - Login com sucesso', () => {
      dataHelper.readYamlFile('loginData', 'usuario1')
      cy.get('@dataYaml').then((user) => {
        telaLogin.clickOptions()
        telaLogin.ClickEmail(user.login)
        telaLogin.ClickSenha(user.senha)
        cy.screenshot()
      })
    })
  })
})