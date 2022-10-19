import { getAppName, getButton, getAllOrdersTitle } from '../support/app.po';

describe('store', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app name', () => {
    getAppName().contains('Back shop');
  });

  it('should display "All orders" title', () => {
    getAllOrdersTitle().contains('All orders');
  });

  it('should have only one tr', () => {
    cy.get('table').find('tr').should('have.length', 1);
  });

  it('should display "Send Order" button', () => {
    getButton().contains('Send order');
  });
});
