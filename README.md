L'app consente la ricerca di offerte di lavoro in base alla location e al livello.
Di default vengono visualizzati i risultati per la località:Italia e livello:tutti.
Ho dovuto inserire un filtro per controllare che non venissero selezionate offerte in cui la location è vuota, per evitare che la chiamata API vada in errore.
Una volta visualizzata la lista delle offerte sarà possibile selezionare "visualizza dettaglio" per aprire una nuova path che contiene i dettagli dell'offerta. Utilizzo il routing per spostarmi da una 'pagina' all'altra.
Nella pagina di dettaglio viene fatta una nuova chimata API in base all'id preso dalla route.
All'interno del dettaglio c'è la possibilità di aprire una sezione in cui visualizzare i dettagli della compagnia.
Anche qui viene fatta una nuova chiamata API in base all'id della compagnia selezionata, stavolta rimanendo all'interno della stessa pagina.
I valori inseriti all'interno delle checkbox e l'input text vengono resettati ogni chiamata e reimpostati ai valori di defoult per scelta.
La sezione preferiti è stata inserita al solo scopo di verificare il funzionamento del 404ErrorComponent.
L'API da alcuni problemi in quanto i risultati delle chiamate a volte sono scarsi, se non inesistenti, quando sono utilizzati i ifiltri.
Nel caso in cui la chiamata non dia risultati sarà visualizzato un "no results found" per comunicare che la risposta è avvenuta, ma il risultato è vuoto.



# JobAplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Progetto_Angular-1

#Chiara-Perotto---Progetto-Angular-1

# Angular1

