**Note:** This project has been imported from my GitLab repo and its updated version is on my  [GitLab Repo](https://gitlab.com/emailsyed245/cypress_cucumber_proj). Due to security issues on GitHub, I'll be moving all my repos to Gitlab.

# Installations
- **Note:** [Node.js](https://www.nodejs.org/) Recommend using v16.16.1
- If you used a previous node verison, delete node_modules dir and make a clean install.
- To install all the packages (after cloning/downloading the project), following command needs to be run
```sh
npm install
```

## Usage

- **Run the tests in headless mode(by default Electron)** (default) :

```sh
npx cypress run
```
- **Run the tests in Chrome browser** (default) :

```sh
npx cypress run -b chrome --headed
```
- **Run the tests in Edge browser** :

```sh
npx cypress run -b edge --headed
```
- **Running tests for specific tag** :
```sh
npx cypress-tags run -e TAGS="@cart" -b chrome --headed
```
- **Running tests with specific Environment** (i.e. setting BASE_URL env. variable) :

```sh
npx cypress-tags run -e TAGS="@cart" --env url="http://qaclickacademy.com/practice.php" -b chrome --headed
```

- **Running tests in Docker** :
```sh
 npm run test:docker
```
## Reporting
 - **Note :** There are two types of reporting configured in this project (1)- Mochawesome Reports (2)- Cucumber Reports
- **Mochawesome:** First you need to install "mocha" and "mochawesome" (already installed) packages before configuring in "Cypress.json" ("reporter": "mochawesome",). 
       
 ```sh
 NOTE: You will see reports at location /mochawesome-report/mochawesome.html
```
    Note: You need to clear the /mochawesome-report/mochawesome.html for next run by exeuting command > npm run del:mocha_reports

- **Cucumber - HTML Reports:** Cucumber HTML reports (with attached screenshots) either gets generated using following npm script command - (They are configured in package.json file and it gets generated with given path in file ./reports/cucumber-html-report.js )
 ```sh
 > npm run run_cucumb_test
```
OR running explicity following command after test run
 ```sh
 > node ./reports/cucumber-html-report.js
```

- **JUnit Reports:** ((TBC)) An XML JUnit report gets automatically generated at ./front_end/reports/JUnitReports/*.xml location. This can be fed into CI tool or in to different other plugins.
  
