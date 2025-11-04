document.addEventListener("DOMContentLoaded", function () {
  // Función para cargar un componente HTML en un placeholder
  function loadComponent(placeholderId, filePath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) {
      // Si no hay placeholder, no hacemos nada.
      return;
    }

  

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No se pudo encontrar ${filePath}`);
        }
        return response.text();
      })
      .then((data) => {
        placeholder.innerHTML = data;

        // Si acabamos de cargar el navbar, ejecutamos su lógica interna
        if (placeholderId === "navbar-placeholder") {
          initializeNavbarLogic(placeholder);

          initializeCartLogic(placeholder);
        }
      })
      .catch((error) => {
        console.error(`Error al cargar ${filePath}:`, error);
        placeholder.innerHTML = `<p style='color:red;'>Error al cargar componente.</p>`;
      });
  }

  function initializeNavbarLogic(container = document) {
    const toggler = container.querySelector(".menu-toggle");
    const menu = container.querySelector(".menu");

    if (toggler && menu) {
      toggler.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }
  }
  function initializeCartLogic(container = document) {
    const showCart = container.dataset ? container.dataset.showCart : "true";
    const cartContainer = document.getElementById("cart-container");

    if (showCart === "false" && cartContainer) {
      if (cartContainer) {
        cartContainer.style.display = "none";
      }
    } else {
      // Si el carrito se debe mostrar, cargamos su script
      const cartScript = document.createElement("script");
      cartScript.src = "carrito.js";
      cartScript.defer = true;
      document.body.appendChild(cartScript);
    }
  }

  // Cargamos los componentes
  loadComponent("navbar-placeholder", "nav.html");
  loadComponent("footer-placeholder", "footer.html");
  // Ejecuta la lógica para el navbar y el carrito que ya existen en index.html

    const footerCopy = document.createElement("p");
  footerCopy.textContent = `© Librería Somos Arte ${new Date().getFullYear()}. Todos los derechos reservados.`; // se agrega automaticamente el año actual.va a ir cambiando cada año.
  document.body.appendChild(footerCopy); // ejecuto la logica para cargar el texto abajo del footer

  //el texto aparece abajo por "document.body.appendChild" siempre colola el elemento al final del body.

  /* const footerPlaceholder = document.getElementById("footer-placeholder")
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML += 90`
    <p> © Librería Somos Arte 2025. Todos los derechos reservados. </p>`;
} 
   //solo lo usaria en el caso de que hubiera problemas con el footer. ademas de que asi lo puedo migrar a otros framewokrs.
  
  */

  
  if (!document.getElementById("navbar-placeholder")) {
    initializeNavbarLogic();
    initializeCartLogic();
  }
  
});


