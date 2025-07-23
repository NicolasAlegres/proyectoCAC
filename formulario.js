// Al cargar la página, recuperamos el carrito guardado
const carrito = JSON.parse(sessionStorage.getItem("carritoParaCompra")) || [];
const pedidoInputHidden = document.getElementById("pedidoInput"); // El input oculto para Formspree
const formFinal = document.getElementById("formFinal"); // El formulario completo

if (carrito.length === 0) {
  document.getElementById("resumenCompra").innerHTML = "<p>No hay productos en el carrito.</p>";
} else {
  // Creamos resumen visible y resumen para enviar en formulario
  let resumenVisible = "<ul>";
  let resumenParaEnviar = "Detalle de la compra:\n\n";
  let total = 0;

  carrito.forEach((producto, i) => {
    resumenVisible += `<li>${producto.nombre} - $${producto.precio.toFixed(2)}</li>`;
    resumenParaEnviar += `${i + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
    total += producto.precio;
  });

  resumenVisible += `</ul><p><strong>Total: $${total.toFixed(2)}</strong></p>`;
  resumenParaEnviar += `\nTotal: $${total.toFixed(2)}`;

  document.getElementById("resumenCompra").innerHTML = resumenVisible;
  document.getElementById("pedidoInput").value = resumenParaEnviar;
}

// Limpiar carrito después de enviar el formulario
document.getElementById("formFinal").addEventListener("submit", () => {
  sessionStorage.removeItem("carritoParaCompra");
  sessionStorage.removeItem("carrito");
});
