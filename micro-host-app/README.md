# 📦 App Host - Microfrontends Container

Este repositorio corresponde al **Host** principal que consume los distintos microfrontends de la aplicación mediante **Module Federation**.


## 🚀 Descripcion

El Host es la aplicación central que orquesta y consume microfrontends como:
- Lista de personajes de Rick and Morty 
- Lista de personajes de Harry Potter

El Host se encarga de:
- Definir la navegación y lógica principal.
- Importar dinámicamente los micros.
- Proveer dependencias comunes como React, React DOM, i18next, etc.


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

``` bash
src/
 ├── components/
 │    ├── Header.tsx               
 │    ├── Content.tsx               # Componente donde se cargan los microfrontend 
 │    ├── LanguageSelector.tsx
 ├── styles/
 │    └── layout.ts
 ├── App.tsx                        # Componente principal con navegación y carga de micros
 ├── main.tsx                       # Entry point React
 ├── i18n.ts                        # Configuración de internacionalización
 └── __tests__/                     # Tests unitarios
vite.config.ts                      # Configuración Vite y Module Federation
```

## 🛠️ Tecnologías

- React 19
- Vite + vite-plugin-federation
- Module Federation (Federación de módulos de Vite/Webpack 5)
- TypeScript
- i18next (Internacionalización)
- Styled-components (opcional, según tus estilos)
- Vitest + React Testing Library (Pruebas unitarias)


