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


- **Running tests with basic HTTP Authentication** (except Safari):
```sh
BASE_URL=http://<user>:<password>@localhost:8080/ npm test
```
- **Running tests in Docker** :
```sh
BASE_URL=http://<user>:<password>@localhost:8080/ npm run test:docker -- --cucumberOpts.tagExpression="@smoke"
```
## Reporting
 - **Note :** There are two types of reporting configured in this project (1)- Allure Reports (2)- JUnit
- **Allure Reports:** They can be invoked and seen by executing following command on your local after the test run
    - _Screenshot_ : You'll see the screenshot attached to the failing step
   
 ```sh
 npm run allure-report
```
    Note: You need to clear the ./allure-report for next run by exeuting command > npm run cleandir:allure

- **JUnit Reports:** An XML JUnit report gets automatically generated at ./front_end/reports/JUnitReports/*.xml location.
This can be fed into CI tool or in to different other plugins.
  
- **HTML Reports:** An XML JUnit report gets automatically generated at ./html/reports/index.html location.
 