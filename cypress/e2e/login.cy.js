
describe('Автотесты на форму логина и пароля', function () {
    it('Позитивный кейс авторизации', function () {
         cy.clearCookies()
         cy.visit('https://login.qa.studio/');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Восстановление пароля', function () {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Негативный кейс авторизации - неверный пароль', function() {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio555');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Негативный кейс авторизации - неверный логин', function() {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('yupin53@yandex.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Негативный кейс авторизации - в логине нет @', function() {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Приведение к строчным буквам в логине', function() {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#mail').type('GERmandolniKOV.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('be.enabled').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();
     })

     it('Эффект наведения на кнопку внизу страницы', function() {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('.link').trigger('mouseover')
     })
 })

 