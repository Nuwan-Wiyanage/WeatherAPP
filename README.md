# WeatherAPP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9. This project uses bootstrap, angular material, fontawesome 4 and scss.  

# Ideal specifications  
 
node: 16.10.0  
npm: 7.24.0  
Angular: 14.2.12  
Angular CLI: 14.2.10  

# Design overview  

Countries and cities can be seleted from the dropdows in top of the page. These drop down contains predefined country and city details. If you want to add a new country or city you need to change the core/mock-data/countries-mock.data.ts file. (This can be implement using google geocode API)  

![image](https://user-images.githubusercontent.com/66863818/204129396-c421b6a8-03e3-4fc7-8edf-4b023ef5ba3e.png)  

Project structure  
![image](https://user-images.githubusercontent.com/66863818/204129470-b040685d-2e7a-44d3-8ce5-0947bd71a5bf.png)  
  
core module contains the components, mock-data, models, pipes and services which can be used in  anywhere in the project.  
home module is for the home page view and it also has isolated reusable components.  
angular routing is used and defualt routing configured to redirect to home page.  

## How to RUN on local Development server

Run `npm install` to download all the dependencies.

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

OpenWeather API response details can be found in https://openweathermap.org/api/one-call-api
