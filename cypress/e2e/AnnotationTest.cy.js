import { DashboardPage } from "./pages/DashboarPage";
import { dashboard } from "../fixtures/dashboardTestData";

const dashboardPage = new DashboardPage();

describe('Annotations', () => {

  beforeEach(() => {
    cy.loginAsSuperAdmin();
    
  })

  it('I can add a note in the document', () => {
    // open the project
    cy.get(dashboardPage.project_card).click();
    cy.contains(dashboard.review_test).then(($el) => {
      const newTabUrl = $el.attr('href'); // or use .attr('href') depending on the element
  
      // Now manually visit the captured URL
      cy.visit(newTabUrl);
    });
  

  })
})