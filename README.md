# OnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Demo
(https://www.youtube.com/watch?v=iS7hDdWgDsM)

## Despre proiect
Am ales sa creez un mini magazin online, pe care ne putem crea un cont, loga si vizualiza produse, utilizand angular.
## Rute multiple
Am adaugat multiple rute, ce pot fi accesat utilizand navbar-ul si componente ale site-ului precum product card.
## Rute publice si private
Atat pagina de dashboard cat si pagina cu detaliile unui produs, pot fi accesate doar de catre un utilizator logat.
Paginile de home, log in, sign up si all products pot fi accesate de orice utilizator.
## Componente reutilizabile
Am creat componente reutilizabile precum product card (reutilizata de componenta home si componenta products) si rating (reutilizata de orice componenta product card sau product details).
## Comunicare intre componenta
Atunci cand o componenta product card reutilizeaza, spre exemplu rating, aceasta dintai (product card) trimite ca parametru rate (number) si count (number) catre rating (pentru a fi afisate stelutele corespunzator).
De asemena, componenta product card primeste ca parametru un product si ii afiseaza proprietatile.
## Pagina cu form
Am utilizat form-uri atat in pagina de sign up, cat si in pagina de login.
## Backend
Am utilizat Firebase pentru partea de autentificare si creare conturi.
Am utilizat Fake Store API pentru partea de produse.
## Firebase API key
Api key-ul pentru Firebase lipseste, trebuie pus in src/environments/environment.ts, astfel:
```typescript
    export const environment = {
        production: false,
        firebase: {
            apiKey: "@@@@THE API KEY MUST BE HERE!!!!",
            authDomain: "frontend-5d02d.firebaseapp.com",
            projectId: "frontend-5d02d",
            storageBucket: "frontend-5d02d.appspot.com",
            messagingSenderId: "316412274303",
            appId: "1:316412274303:web:2efe0efa605163da34414a"
        },
        apiProductsUrl: "https://fakestoreapi.com/products"
    };
```
Pentru Fake Store API, nu este necesar niciun API key.