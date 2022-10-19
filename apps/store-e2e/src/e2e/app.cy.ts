import {
  getAppName,
  getMyOrdersTitle,
  getWelcome,
  getButton,
} from '../support/app.po';

describe('store', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app name', () => {
    getAppName().contains('Store');
  });

  it('should display "Welcomen, today is ..." title', () => {
    getWelcome().contains('Welcome, today is ');
  });

  it('should display "My orders" title', () => {
    getMyOrdersTitle().contains('My orders');
  });

  it('should have only one tr', () => {
    cy.get('table').find('tr').should('have.length', 1);
  });

  it('should display "Add Order" button', () => {
    getButton().contains('Add Order');
  });
});
