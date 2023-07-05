class TelaLogin {
  clickOptions() {
    //cy.xpath("//*[@id='ipt_optionsingin']/option[2]").click();
    //cy.get('select[id="ipt_optionsingin"]').select('acesso_interno').should('have.value', 'acesso_interno')
    cy.get('#ipt_optionsingin').select('acesso_interno');
  }

  clickEmail(text) {
    cy.get('#ipt_email').type(text);
  }

  clickSenha(text) {
    cy.get('#ipt_password').type(text);
  }

  clickButtonLogin() {
    cy.xpath("//button[@class='btn btn-primary col-12'][contains(.,'LOGIN')]").click();
  }

  clickForgetPassword() {
    cy.xpath("//a[contains(., 'Esqueceu a senha?')]").click();
    cy.url().should('eq', 'https://qa.hmg.tec.br/recovery-password');
  }
}

export default new TelaLogin();
