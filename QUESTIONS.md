# Preguntas Técnicas - Challenge Microfrontends

A continuacion dejo las repuestas a la preguntas expuestas en el challenge

---

## 1. ¿Qué es la accesibilidad (accessibility)? ¿Cómo se logra?

La accesibilidad se refiere a la creación de productos, servicios y entornos digitales que sean comprensibles, utilizables y practicables por todas las personas, incluyendo aquellas con discapacidades, de manera autónoma y segura. 

---

## 2. Diferencias entre Session Storage, Local Storage y Cookies

Comparto una tabla con las diferencias escenciales entre cada solucion para manejar almacenamiento:

| Característica            | Session Storage                  | Local Storage                     | Cookies                             |
|--------------------------|---------------------------------|----------------------------------|-------------------------------------|
| **Persistencia**          | Hasta cerrar la pestaña          | Hasta que el usuario o app las elimine | Definida por fecha de expiración   |
| **Tamaño aprox.**         | 5MB                             | 5MB                              | 4KB                                 |
| **Accesible por servidor**| ❌ No                            | ❌ No                             | ✅ Sí (se envían en cada request), puede compartir informacion por ejemplo con un API en Backend   |
| **Alcance**               | Solo pestaña actual              | Todo el dominio                  | Dominio o rutas específicas         |

---

## 3. ¿Qué es el event loop de JavaScript? (Promesas, async/await)

El event loop es lo que le permite a JavaScript manejar código asíncrono a pesar de ser un lenguaje de un solo hilo de ejecución (single-threaded) y funciona de la siguiente manera:

- El código que se está ejecutando en ese momento se encuentra en el `Call Stack`.
- Las tareas asíncronas como `fetch`, `setTimeout`, o cualquier API del navegador, se envían a un segundo plano (Web APIs).
- Cuando estas tareas se completan, pasan a la `Task Queue` (o Microtask Queue en el caso de promesas y async/await).
- Finalmente, el event loop verifica si el `Call Stack `está vacío y, de ser así, mueve las tareas de la cola al Call Stack para ejecutarlas.

---

## 4. ¿Cómo evitar demasiadas llamadas a API desde hooks?

- Asegurarse de tener las dependencias correctas en `useEffect `.
- Usar técnicas como debounce para limitar llamadas frecuentes.
- Cachear los datos con librerías como React Query.
- Validar antes de llamar (ej: que haya datos previos o condiciones).

---

## 5. ¿Cómo gestionas el estado global? ¿Por qué?

Depende mucho del tamaño y la complejidad del proyecto:

- Para estados simples o compartidos entre pocos componentes, suelo usar Context API.
- Para estados más grandes, complejos o globales (como entidades principales de negocio, tokens, user data, etc.), prefiero Zustand por ser ligero, simple y sin tanta sobrecarga coo otras soluciones que he utilizad: Redux o Mobx.

Preferencias propias:

- Context: para recursos compartidos entre componentes o pantallas principales, por ejemplo, formularios multi-step o estados de UI (tema, idioma).
- Zustand: cuando necesito manejar estados globales persistentes o críticos, como el token de autenticación, usuario logueado, o datos que se usan en varias partes de la app (carrito, perfiles, settings). 
  
---

## 6. ¿Qué es progressive rendering?

Es una técnica para ir mostrando contenido mientras se carga el resto, mejorando la experiencia del usuario.

Ejemplos:
- Lazy loading de componentes o imágenes.
- Mostrar loaders o skeletons mientras llegan datos.
- Server-side streaming para renderizar contenido poco a poco (usado en frameworks modernos como Next.js).