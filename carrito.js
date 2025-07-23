// carrito.js

// Función para actualizar el contador del carrito en el icono
function actualizarContador() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    document.getElementById("contador-carrito").textContent = carrito.length;
}

// Agregar productos al carrito al hacer clic en botones "Comprar"
document.querySelectorAll(".agregar-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

        const producto = {
            id: this.dataset.id,
            nombre: this.dataset.nombre,
            precio: parseFloat(this.dataset.precio)
        };

        carrito.push(producto);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarContador();
        alert(`${producto.nombre} agregado al carrito.`);
    });
});

// Mostrar productos dentro del modal/carrito popup
function mostrarProductosEnModal() {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    const contenedor = document.getElementById("productosCarrito");
    contenedor.innerHTML = "";

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    carrito.forEach((producto, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
            <button class="eliminarProducto btn btn-sm btn-danger" data-index="${index}">Eliminar</button>
        `;
        contenedor.appendChild(div);
    });

    // Añadir evento para eliminar productos
    document.querySelectorAll(".eliminarProducto").forEach(btn => {
        btn.addEventListener("click", e => {
            const index = e.target.getAttribute("data-index");
            let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
            carrito.splice(index, 1);
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
            actualizarContador();
            mostrarProductosEnModal();
        });
    });
}

// Variables para modal y botón carrito
const btnCarrito = document.getElementById("btnCarrito");
const modal = document.getElementById("carritoModal");
const cerrar = document.querySelector(".cerrar");

// Abrir modal al hacer clic en el icono carrito
btnCarrito.addEventListener("click", () => {
    mostrarProductosEnModal();
    modal.style.display = "block";
});

// Cerrar modal al hacer clic en la "X"
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar modal si clickeas afuera del contenido
window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

// Botón finalizar compra: guarda carrito para el formulario y redirige a la página de compra
document.getElementById("finalizarCompra").addEventListener("click", () => {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Guardar carrito para la página de formulario (para mostrar el resumen)
    sessionStorage.setItem("carritoParaCompra", JSON.stringify(carrito));

    // **NUEVO: Limpiar el carrito en la página principal ANTES de redirigir**
    sessionStorage.removeItem("carrito"); // Limpia el carrito principal
    

    // Actualizar el contador del carrito visible inmediatamente
    actualizarContador();

    // Redirigir a formulario de compra
    window.location.href = "conf-compra.html";
});

// Actualizar contador al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
});