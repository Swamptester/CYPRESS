let dataHelper = function(){

    const YAML = require('yamljs')

    this.readYamlFile = (file, attribute) =>{
        const path = `${Cypress.env("ENV")}/${file}.yaml` 
        cy.log(`Ambiente: ${Cypress.env("ENV")}`)
        cy.log(`Arquivo: fixture/${path}`)
        cy.fixture(path).then((str) => {
        // parse the string into object literal
            const finalData = YAML.parse(str)
            cy.wrap(finalData[attribute]).as('dataYaml')            
        })
        
    }

}

module.exports = new dataHelper()