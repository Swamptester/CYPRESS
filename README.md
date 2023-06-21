# PROJETO MODELO PARA TESTE WEB - CYPRESS

## PRÉ-REQUISITOS

Requisitos de software e hardware necessários para executar este projeto de automação

*   NODE JS >= 12
*   Visual Code

## ESTRUTURA DO PROJETO

| Diretório                    	| finalidade       	                                                                                        | 
|------------------------------	|---------------------------------------------------------------------------------------------------------- |
| cypress/config/			| Arquivos de configuração segregados por ambiente                                          |
| cypress/fixtures/   		| Massa de dados segregada por ambiente, escritos em arquivos yaml                    |
| cypress/integration/			| Local onde deve ser criado os testes                                                             	|
| cypress/plugins/			| Responsável pela configuração do cypress                   	|
| cypress/support/			| Metodos de suporte a interação com os elementos web realizando ações                   	| 
| cypress/support/helpers/			| Metodos de suporte a interação com os elementos web realizando ações                   	| 
| cypress/support/pages/			| Local onde deve ser criado as pages objects para facilitar a manutenção do projeto                 	| 

## DOWNLOAD DO PROJETO TEMPLATE PARA SUA MÁQUINA LOCAL

Faça o download do template no repositório de código para utilizar no seu projeto em especifico,
feito isso, fique a vontande para usufruir dos recursos disponíveis e
também customizar de acordo com sua necessidade.


## FRAMEWORKS UTILIZADOS

Abaixo está a lista de frameworks utilizados nesse projeto

* Cypress - Responsável pela interação com páginas web
* Allure - support.report em HTML

## COMANDO PARA EXECUTAR OS TESTES

Baixar Dependencias
```
npm install -y
```
Execução IDE
```
npm run cy:open
```

Execução terminal (Headless)
```
npm run cy:test
```

## COMANDO PARA GERAR EVIDÊNCIAS EM HTML (ALLURE)

Com o prompt de comando acesse a pasta do projeto, onde esta localizado o arquivo package.json, execute o comando abaixo para gerar as evidências em HTML

Executa os testes com geração do report
```
npm run cy:run-allure
npm run allure
```


## LINKS DE APOIO

* [Cypress - Documentação Oficial](https://docs.cypress.io/)