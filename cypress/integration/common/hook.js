import {Before,After,Given} from "cypress-cucumber-preprocessor/steps"
const url= "https://rahulshettyacademy.com/seleniumPractise/#/"

// Note: "before/after" hooks are Mocha hooks and will run after each feature file
before(()=>{
    cy.log('======before Mocha Hook=====')
})
after(()=>{
    cy.log('======after Mocha Hook=====')
    // cy.wait(2000)
})

// Note: "Before/After" hooks are Cucumber hooks and will run after each Scenario
Before(()=>{
    // cy.visit(Cypress.env('url'))
    cy.log("===Before Hook===")
    // remove('mochawesome-report');
})

/** Note : "Before" can be used on the basis of different tags as below
    Before({tags: "not @cart"},()=>{
        cy.visit(Cypress.env('url'))
        cy.log("===Before Hook===")
        
    })

    Before({tags: "@cart"},()=>{
        cy.visit(Cypress.env('url'))
        cy.log("===Before for Cart Hook===")
        
    })
*/

After(()=>{
    const screenshotsFolder = Cypress.config("screenshotsFolder");
      if (window.cucumberJson?.generate) {
          const testState = window.testState;
          const stepResult =
              testState.runTests[testState.currentScenario.name][testState.currentStep];
          if (stepResult?.status === "failed") {
              const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
              cy.readFile(
                  `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
                  "base64"
              ).then((imgData) => {
                  stepResult.attachment = {
                      data: imgData,
                      media: { type: "image/png" },
                      index: testState.currentStep,
                      testCase: testState.formatTestCase(testState.currentScenario),
                  };
              });

          }
      }
    // cy.visit(Cypress.env('url'))
    cy.log("===After Hook===")
    // cy.wait(2000)
})
