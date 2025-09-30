document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar un componente HTML en un placeholder
    function loadComponent(placeholderId, filePath) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            // Si no hay placeholder, no hacemos nada.
            return;
        }

        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`No se pudo encontrar ${filePath}`);
                }
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;

                // Si acabamos de cargar el navbar, ejecutamos su lógica interna
                if (placeholderId === 'navbar-placeholder') {
                    initializeNavbar(placeholder);
                }
            })
            .catch(error => {
                console.error(`Error al cargar ${filePath}:`, error);
                placeholder.innerHTML = `<p style='color:red;'>Error al cargar componente.</p>`;
            });
    }

    // Función para inicializar la lógica del navbar una vez cargado
    function initializeNavbar(navbarPlaceholder) {
        // Lógica para el menú hamburguesa
        const menu = document.getElementById('menu');
        const toggler = document.querySelector('.menu-toggle');

        if (toggler && menu) {
            toggler.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }

        // Lógica para mostrar/ocultar y cargar el script del carrito
        const showCart = navbarPlaceholder.dataset.showCart;

        if (showCart === 'false') {
            const cartContainer = document.getElementById('cart-container');
            if (cartContainer) {
                cartContainer.style.display = 'none';
            }
        } else {
            // Si el carrito se debe mostrar, cargamos su script
            const cartScript = document.createElement('script');
            cartScript.src = 'carrito.js';
            cartScript.defer = true;
            document.body.appendChild(cartScript);
        }
    }

    // Cargamos los componentes
    loadComponent('navbar-placeholder', 'nav.html');
    loadComponent('footer-placeholder', 'footer.html');
});
