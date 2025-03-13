# 🧬 Microfrontend - Rick and Morty Character List

Este microfrontend muestra un listado de personajes de Rick and Morty. Está diseñado para funcionar de forma independiente o integrado dentro de un Host mediante Module Federation.

## 🚀 Descripción

-	Listado de personajes de Rick and Morty.
-	Totalmente funcional por sí solo
-	Compatible con integración vía Module Federation (Federación de módulos).

## ⚙️ Instalación

1. Instalar dependencias:
    ```bash
    npm install
    ```
2. Levantar en local
   ```bash
    npm run start
    ```
3. Correr test
    ```bash
    npm run test
    npm run test:watch
    ```

## 🗂️ Estructura del Proyecto


```bash
src/
 ├── assets/                # Assets visuales
 ├── components/            # Componentes visuales
 │    └── Card              # Carpete para agrupar ficheros de un component
 │      └── index.tsx       # logica del componente
 │      └── __tests__       # Test del componente
 ├── hooks/                 # Hooks compartidos generales para utilizar en la app 
 ├── i18n/                  # Dependencia individual en caso de ser inicializado de forma dependiente
 ├── pages/                 # Componentes a ser expuestos como microfrontends
 ├── services/              # Peticiones API
 ├── styles/                # Estilos locales
 │    └── layout.ts
 ├── App.tsx                # Componente principal
 ├── main.tsx               # Entry point React
 ├── i18n.ts                # Configuración de i18n
 └── __tests__/             # Pruebas unitarias
vite.config.ts              # Configuración Vite + Module Federation
```

## 🛠️ Tecnologías

- React 19
- Vite + vite-plugin-federation
- Module Federation (Federación de módulos de Vite/Webpack 5)
- TypeScript
- i18next (Internacionalización)
- Styled-components (opcional, según tus estilos)
- Vitest + React Testing Library (Pruebas unitarias)

## API

API publica para obtener los personajes de Rick y Morty: [API Documentation](https://rickandmortyapi.com/api/character)

