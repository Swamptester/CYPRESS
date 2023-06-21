/// <reference types="cypress" />

let telaLogin = require('../support/pages/TelaLogin')
let userGridPage = require('../support/pages/UserGridPage')
let userEditPage = require('../support/pages/UserEditPage')
let userShowPage  = require('../support/pages/UserShowPage')
let dataHelper = require('../support/helpers/DataHelper')

describe('Initiative - Cypress Web',  () => {
    context('Example - CRUD', () => {
        
        beforeEach(()=> {
            cy.visit('/')
            telaLogin.clickUser()
        })

        afterEach(()=> {

        })

        it('CT-01 - Create', () => {
            userGridPage.clickNew()
            dataHelper.readYamlFile('loginData', 'usuario1')
            cy.get('@dataYaml').then((user) => {
                userEditPage.fillLogin(user.login)
                userEditPage.fillFullName(user.full_name)
                userEditPage.fillEmail(user.email)
                userEditPage.fillAge(user.age)
                userEditPage.clickSave()
                userShowPage.getLogin().should('have.text', user.login)
                userShowPage.getFullName().should('have.text', user.full_name)
                userShowPage.getEmail().should('have.text', user.email)
                userShowPage.getAge().should('have.text', user.age)
                cy.screenshot()
            })
        })
    })
})