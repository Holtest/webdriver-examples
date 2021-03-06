#form-auth-test-webdriverio
Form authorization test example with Mocha&Webdriver.io&Allure

## Setup

1. Install [node.js version 8+](https://nodejs.org/). This project uses modern Javascript features, that will not work in older versions.
2. Install npm.
3. Clone this repository `git clone git@github.com:github.com/Holtest/webdriver-examples.git && cd webdriver-examples`. 
4. Install dependencies `npm install`.
5. Run selenium server `npx selenium-standalone start`.
6. Run tests via `npm test`.
7. Run `npm run report` to build `html` report from results and it will be
opened in your browser.

## Project structure

* **test/** – test files. Our setup uses [Mocha].
    * **adpasspaut-001.js** – test with screen diff.
    * **adpasspaut-002.js** – test links.
    * **adpasspaut-003.js** – test auth.
    * **adpasspaut-004.js** – test err message.
    * **adpasspaut-005.js** – test capcha err message capchs.
* **util/** - additional helpers.
    * **config.js** – configuration file where specified base options for tests.
    * **browser.js** - browser provider for your tests.
* **img-pat/** - images to compare.
* **allure-results/** - test results.
* **.env** - environment variables with personal data:
    * AUTH_USER = 
    * AUTH_USER_PASSWORD = 
    * AUTH_USER_NAME = 
    * TEST_HOST = 
    * RESET_CREDINTAILS_URL = 
    * REGISTRATION_URL = 
    * HOST = localhost
    
