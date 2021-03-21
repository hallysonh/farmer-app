import { getFarmerSearchCard, getNameField, getQueryField, getTitle } from '../support/app.po';

const DESKTOP_USERAGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4420.0 Safari/537.36 Chrome-Lighthouse';

const DESKTOP_EMULATION_METRICS = {
  mobile: false,
  width: 1350,
  height: 940,
  deviceScaleFactor: 1,
  disabled: false,
};

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
    const thresholds = {
      "performance": 50,
      "accessibility": 100,
      "best-practices": 90,
      "seo": 100,
      "pwa": 50
    };
    const lighthouseConfig = {
      formFactor: 'desktop',
      screenEmulation: DESKTOP_EMULATION_METRICS,
      emulatedUserAgent: DESKTOP_USERAGENT,
    };

    cy.lighthouse(thresholds, lighthouseConfig);

    cy.pa11y();
  });
});
