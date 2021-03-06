export class PopupPage {
  getTitle () {
    return cy.get('.article-preview .preview-title')
  }

  getHeader () {
    return cy.get('.popup .popup-content .header').last()
  }

  getContent () {
    return cy.get('.popup .popup-content .content')
  }

  getFullscreenContent () {
    return cy.get('.popup .popup-content.fullscreen')
  }

  getText () {
    return cy.get('.preview-text')
  }
}
