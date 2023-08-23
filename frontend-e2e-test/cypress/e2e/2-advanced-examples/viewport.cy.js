/// <reference types="cypress" />

context('Viewport', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/viewport')
  })

  it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport

    cy.get('#navbar').should('be.visible')
    // cy.viewport() Acepta un conjunto de tamaños preestablecidos.
    cy.viewport('samsung-s10')//DefinImos el tamaño preestablecido 
      //EJ:Con un Samsung S10 que tiene un tamaño de 360px*760px
    cy.wait(2300)
    
    cy.get('#navbar').should('not.be.visible')
    cy.get('.navbar-toggle').should('be.visible').click()
    cy.get('.nav').find('a').should('be.visible')

    //veamos cómo se ve nuestra aplicación en una pantalla súper grande estableciendo 2999PX * 2999PX
    cy.viewport(2999, 2999)
    cy.wait(2300)
    
    // para configurar fácilmente la pantalla al ancho y alto de un dispositivo


    // agregamos un cy.wait() entre cada cambio de ventana gráfica para que pueda ver
    // el cambio, de lo contrario, es demasiado rápido para verlo :)

    cy.viewport('macbook-15')
    cy.wait(1300)
    cy.viewport('macbook-13')
    cy.wait(1300)
    cy.viewport('macbook-11')
    cy.wait(1300)
    cy.viewport('ipad-2')
    cy.wait(1300)
    cy.viewport('ipad-mini')
    cy.wait(1300)
    cy.viewport('iphone-6+')
    cy.wait(1300)
    cy.viewport('iphone-6')
    cy.wait(1300)
    cy.viewport('iphone-5')
    cy.wait(1300)
    cy.viewport('iphone-4')
    cy.wait(1300)
    cy.viewport('iphone-3')
    cy.wait(1300)

    // cy.viewport() Acepta una orientación para todos los ajustes preestablecidos.
 
    cy.viewport('ipad-2', 'portrait')
    cy.wait(1300)
    cy.viewport('iphone-4', 'landscape')
    cy.wait(1300)

    // The viewport will be reset back to the default dimensions
    // in between tests (the  default can be set in cypress.config.{js|ts})
  })
})
