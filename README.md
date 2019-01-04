# SampleAngular

This is a sample Angular application which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

Routing is enabled and by default the application landing page displays the Country screen which has the country names.
The CountryComponent communicates with CountryService to retrieve the country names from external RestFul webservices using the Angular HTTPClient module.

Routing is configured to display a "Page Not Found" screen if the user tries to type any other link which is not defined in the route configurations.

Jasmine is used to write the test case and Karma runner is used to execute the test cases.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
