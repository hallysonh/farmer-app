import { getFarmerSearchCard, getNameField, getQueryField, getTitle } from '../support/app.po';

describe('farmer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    getTitle().contains('Farmer Search Component');
  });

  it('should display farmerSearchCard', () => {
    expect(getFarmerSearchCard()).to.not.null;
  });

  it('should display JOAO data', () => {
    cy.intercept('GET', '/api/farmers/search', { fixture: 'search-result.json' }).as('searchFarmer');

    getQueryField().type('JOAO');

    cy.wait('@searchFarmer');

    getNameField()
      .invoke('val')
      .then(inputValue => {
        expect(inputValue).equal('JOAO SILVA');
      });
  });

  it("should pass the audits", function () {
    cy.lighthouse({
      performance: 90,
      accessibility: 100,
      "best-practices": 80,
      seo: 90,
      pwa: 50,
    });
    cy.pa11y();
  });
});
