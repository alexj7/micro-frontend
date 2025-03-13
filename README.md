# Microfrontends Challenge

Este repositorio contiene un sistema completo basado en Microfrontends desacoplados, implementados con React 19, Vite, y Module Federation.

El desarollo contiene **solo tres** proyectos completamente independientes que implementan una arquitectura de microfrontends, de acuerdo a los requerimientos del challenge.

## Notas

- Para facilitar la lectura y pruebas del mismo se incorporaron los 3 proyectos en un mismo repositorio. 

- Cada proyecto (host y micros) puede funcionar de forma completamente independiente.

- Cada proyecto tiene su propio Readme explicando su instalacion y estructura.

## Estructura:

- `host-app`: Proyecto principal (host) que orquesta y renderiza los microfrontends.
- `micro-character-list-1`: Microfrontend que muestra listado de personajes de Rick and Morty.
- `micro-character-list-2`: Microfrontend que muestra listado de personajes de Harry Potter.


```bash
micro-frontend/
│
├── host-app/
│   └── ... (código del host)
│
├── micro-character-list-1/
│   └── ... (código de microfrontend 1)
│
├── micro-character-list-1/
│   └── ... (código de microfrontend 2)
│
└── README.md   # Explicación general y pasos para correr cada uno
```

## Prerequisitos
Version de node utilizada v18.19.1

- Node.js (v18 o superior)
- Variables .env (para facilitar se ha subido el .env con valores locales)

## Cómo ejecutar:
1. Clonar el repo
    ```bash
    git clone https://github.com/alexj7/micro-frontend.git
    cd bank-api
    ```

2. Instalar dependencias en cada proyecto:
    ```bash
    # En host
    cd host
    npm install

    # En Micro 1 (Rick and Morty)
    cd ../micro-character-list-1
    npm install

    # En Micro 2 (Harry Potter)
    cd ../micro-character-list-2
    npm install
    ```
3. Levantar cada proyecto de forma independeinte en una terminal
    ```bash
    # Micro 1
    cd micro-character-list-1
    npm run dev

    # Micro 2
    cd micro-character-list-2
    npm run dev

    # Host (container)
    cd host
    npm run dev
    ```

## Producción (Deploy en Vercel)

| Proyecto                   | URL Producción                             |
|----------------------------|--------------------------------------------|
| **Host (Container App)**   | [https://micro-frontend-mng8.vercel.app/](https://micro-frontend-mng8.vercel.app/)      |
| **Rick and Morty Micro**   | [https://micro-frontend-orcin-chi.vercel.app/](https://micro-frontend-orcin-chi.vercel.app/) |
| **Harry Potter Micro**     | [https://micro-frontend-qmfd.vercel.app/](https://micro-frontend-qmfd.vercel.app/) |
