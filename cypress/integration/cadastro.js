/// <reference types="cypress"  />

let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        cy.visit('index.php');

        //página de login
        cy.get('.login').click();

        //página de cadastro
        cy.get('input#email_create').type(chance.email());
        cy.get('button#SubmitCreate').click();
        
        //formulário
        cy.get('input#id_gender2').check();
        cy.get('input#customer_firstname').type(chance.first());
        cy.get('input#customer_lastname').type(chance.last());
        cy.get('input#passwd').type('Agilizei@2020');
        cy.get('select#days').select('28');
        cy.get('select#months').select('October');
        cy.get('select#years').select('1992');
        cy.get('input#newsletter').check();
        cy.get('input#optin').check();
        cy.get('input#firstname').type(chance.first());
        cy.get('input#lastname').type(chance.last());
        cy.get('input#company').type('Agilizei 2021');
        cy.get('input#address1').type(chance.address());
        cy.get('input#address2').type('Apto 1010 Bloco E');
        cy.get('input#city').type('Contagem');
        cy.get('select#id_country').select('United States');
        cy.get('select#id_state').select('California');
        cy.get('input#postcode').type('90210');
        cy.get('#other').type('Ao lado do Shopping');
        cy.get('input#phone').type(chance.phone());
        cy.get('input#phone_mobile').type(chance.phone());
        cy.get('input#alias').type(chance.address());

        //registrar
        cy.get('button#submitAccount').click();

        //cadastro realizado com sucesso
        cy.url().should('contain','http://automationpractice.com/index.php?controller=my-account');
        cy.contains("Welcome to your account. Here you can manage all of your personal information and orders.");



    })
    
});

//elementos
//class="login"
//pagina de login:
//input[id="email_create"]
//button[id="SubmitCreate"]
//formulario de castro
// input[id="id_gender1"]
//input#id'customer_firstname'
//input#id'customer_lastname'
//input#id='passwd'