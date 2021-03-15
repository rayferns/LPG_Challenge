# Leisure Pass Group - Challenge
## _Test Assessment_

Technology Assessment - Software Engineer in Test,

- Document and create an automated testing framework and strategy for the various features, metrics and user journeys that can be found on this page - https://gocity.com/boston/en-us/products/all-inclusive.
- Feel free to use any tools you feel are fit for the task at hand; this can include any programming language or testing framework you prefer.

## Test Strategy
Tools used to implement an automation test framework
- Visual Studio Code
- Node v15.8.0
- NPM v7.5.3
- Cypress v6.6.0
- Cypress-axe v0.12.2
- @applitools/eyes-cypress v3.20.2

JavaScript programming language was used, with Cypress tool to automate the website

## To run the test

Clone the project to local folder and follow the steps

Pre-requisites
- Install the node dependencies
- Set the system environment variable - APPLITOOLS_API_KEY with Your API key for running tests

```sh
cd [project folder]
npm run cy:E2Etest 
OR
npm run cy:bostonAllInclusive
```

## Future Enhancements
---------
1. Apply Data Driven framework to read data from JSON file instead of hard coding test data
2. Apply BDD framework on the existing Page Object model, with user story feature files
3. Add Test data within the testdata.json files to avoid hard coding of data
