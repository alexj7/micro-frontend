# Microfrontends Challenge

## Descripción

Este repositorio contiene solo tres proyectos completamente independientes que implementan una arquitectura de microfrontends, de acuerdo a los requerimientos del challenge.

### Estructura:

- `host-app`: Proyecto principal (host) que orquesta y renderiza los microfrontends.
- `micro-character-list-1`: Microfrontend que muestra listado de personajes de Rick and Morty.
- `micro-character-list-2`: Microfrontend que muestra listado de personajes de Harry Potter.


```
N5-TEST/
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
└── README.md   // Explicación general y pasos para correr cada uno
```

## Cómo ejecutar:

1. Instalar dependencias en cada proyecto:
```bash
cd host-app && npm install
cd ../micro-character-list-1 && npm install
cd ../micro-character-list-2 && npm install