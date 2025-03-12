# Microfrontends Challenge

## Descripción

Este repositorio contiene tres proyectos completamente independientes que implementan una arquitectura de microfrontends, de acuerdo a los requerimientos del challenge.

### Estructura:

- `host-app`: Proyecto principal (host) que orquesta y renderiza los microfrontends.
- `micro-character-list-2`: Microfrontend que muestra listado de personajes de Rick and Morty.
- `micro-character-list-1`: Microfrontend que muestra listado de personajes de Harry Potter.

## Cómo ejecutar:

1. Instalar dependencias en cada proyecto:
```bash
cd host-app && npm install
cd ../mfe1 && npm install
cd ../mfe2 && npm install