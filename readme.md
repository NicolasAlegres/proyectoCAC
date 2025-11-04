# Librería "Somos Arte" - E-commerce de Libros

Este es el proyecto final para el curso de JavaScript de Codo a Codo, una aplicación de e-commerce front-end para una librería ficticia. El sitio es completamente responsivo y fue refactorizado para mejorar su estructura, mantenibilidad y profesionalismo.

## 🚀 Demo en Vivo

Podés ver el proyecto desplegado en Netlify: **[Somos Arte](https://somos-arte.netlify.app/)**

---

## 🌟 Características Principales

- **Renderizado Dinámico de Productos:** Las tarjetas de los libros se generan dinámicamente usando JavaScript a partir de un array de objetos, simulando la carga desde una API.
- **Carrito de Compras Persistente:**
  - Añade y elimina productos del carrito.
  - El estado del carrito se mantiene al navegar entre páginas y al recargar, o cerrar la pestaña gracias al uso de `localStorage`.
  - El contador de productos en el navbar se actualiza en tiempo real.
- **Componentes Reutilizables:** El `navbar` y el `footer` se cargan dinámicamente en todas las páginas mediante `fetch`, evitando la duplicación de código HTML y facilitando el mantenimiento.
- **Diseño Responsivo (Mobile-First):** La interfaz está diseñada para ser completamente funcional y estéticamente agradable en cualquier dispositivo, desde móviles hasta escritorios.
- **Navegación Clara:** El sitio está dividido en secciones (Inicio, Ficción, No Ficción, Cocina) para una fácil exploración del catálogo.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Para la estructura semántica del contenido.
- **CSS3:** Para estilos personalizados, animaciones y un layout responsivo moderno.
- **JavaScript (ES6+):** Para toda la lógica de la aplicación, incluyendo:
  - Manipulación del DOM.
  - Eventos para la interactividad del usuario.
  - `fetch` para la carga de componentes asíncronos.
  - `localStorage` para la persistencia de datos del lado del cliente.

---

## 📦 Ejecución en Local

Este proyecto no requiere un proceso de compilación ni dependencias complejas. Para ejecutarlo en tu máquina local, sigue estos pasos:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd nombre-del-directorio/proyecto
    ```
3.  **Abre `index.html`:**
    Abre el archivo `index.html` en tu navegador web preferido. La forma más sencilla es arrastrar y soltar el archivo en una ventana del navegador.

---

## Manejo de Formulario

El formulario se maneja con formspree, lo cuál lo hace funcional y operativo.

---

## Scripts y su Función

- **`main.js`:** carga todos los componentes. nav, footer y la logica del sitio.

- **`libros.js`:** carga todos los productos, simula una base de datos.

- **`formulario.js`:** prepara el resumen del pedido del cliente en la página de confirmación.

- **`carrito.js`:** carga la logica del carrito de compras. 

---



## 🚀 Despliegue

Este proyecto está desplegado y hosteado en **Netlify**. El proceso para desplegar una aplicación estática como esta es el siguiente:

1.  **Subir el código a GitHub:**
    Asegurarse de que el proyecto esté en un repositorio de GitHub.

2.  **Crear una cuenta en Netlify:**
    Registrarse en [Netlify](https://www.netlify.com/) (se puede usar una cuenta de GitHub para un registro rápido).

3.  **Conectar el Repositorio:**
    - En el dashboard de Netlify, ir a "Add new site" -> "Import an existing project".
    - Elegir "GitHub" como proveedor y autorizar el acceso.
    - Seleccionar el repositorio del proyecto.

4.  **Configurar la Publicación:**
    - **Branch to deploy:** Elegir la rama principal (`main` o `master`).
    - **Build command:** Dejar este campo **vacío**, ya que no se requiere un proceso de construcción.
    - **Publish directory:** Especificar la carpeta que contiene los archivos del sitio, en este caso: `proyecto`.

5.  **Desplegar:**
    Hacer clic en "Deploy site". Netlify se encarga del resto, publicando el contenido de la carpeta especificada.
