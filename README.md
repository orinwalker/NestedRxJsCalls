# NestedRxJsCalls

## About this Application
Author: Orin Walker
For questions/comments/suggestions contact: orin.walker@gmail.com

This project demonstrates the use of calls to two-different web-service endpoints via RxJs. The application makes use of http://jsonplaceholder.com as a Fake/Mock REST API to return Blog Posts and Users (Authors).

## Blog Posts
The first web-service endpoint gathers a list of user blog posts and contains the author's userId, using this web-service endpoint: http://jsonplaceholder.typicode.com/posts

## Users/Authors
The second web-service endpoint returns User/Author data (where '1' represents the userId): http://jsonplaceholder.typicode.com/users/1

## Combining the Data for Presentation
The blog post data (IPosts) is iterated over, and then the post's userId is passed to the /users webservice. Passing the userId, allows the /users web-service to return the appropriate user (IUser) object.

## Typescript Interfaces
The service located at http://www.json2ts.com/ allows generation of interfaces for the jsonplaceholder user and blog posts data. The app then uses the generated interfaces rather than using the more generic 'any' type

## Safe Navigation Operator
The user's name may not be immediately available use to the asynchonious nature of the RsJS call, so the safe navigation operator (?.) must be used to ensure console errors are not thrown.

Example: apost.user?.name

## Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

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
