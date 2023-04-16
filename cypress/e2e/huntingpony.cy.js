describe('Автотесты на оформление заказа', function () {
    it('Оформление заказа', function () {
         cy.clearCookies()
         cy.visit('https://huntingpony.com/');
         cy.get('[href="/collection/sumki-i-avtokresla"] > .img-ratio_cover > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click(); //переход на раздел сумок
         cy.get('[data-product-id="344951508"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); //переход на конкретную сумку
         cy.wait(3000);
         cy.get('.add-cart-counter__btn').click(); //добавление в корзину
         cy.get('[data-add-cart-counter-plus=""]').click(); //плюс один товар
         cy.wait(3000);
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.contains('Оформление заказа');
     })
})

 