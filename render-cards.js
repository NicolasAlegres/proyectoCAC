document.addEventListener('DOMContentLoaded', () => {
    // 1. Busca el contenedor principal en la página.
    const contenedor = document.getElementById('contenedor-libros');
    if (!contenedor) {
        // Si la página no tiene este contenedor (ej: index.html), no hace nada.
        return;
    }

    // 2. Lee qué categoría de libros debe mostrar desde el atributo 'data-categoria'.
    const categoria = contenedor.dataset.categoria;
    const librosDeCategoria = libros[categoria];

    if (!librosDeCategoria) {
        console.error(`No se encontraron libros para la categoría: ${categoria}`);
        return;
    }

    // 3. Prepara el HTML que se va a insertar.
    let cardsHTML = `
        <div class="container rounded py-2 mb-3" style="background-color: rgb(47, 83, 94);">
            <div class="row justify-content-center pb-1">`;


    // 4. Recorre cada libro de la categoría y crea una tarjeta para él.
    librosDeCategoria.forEach(libro => {
        // Usamos plantillas de texto (template literals) para construir el HTML de forma más limpia.
        cardsHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-4 ">
                <div class="card h-100">
                    <img src="${libro.imagen}" class="card-img-top" alt="${libro.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">Breve reseña</h5>
                        <p class="card-text">${libro.descripcion}</p>
                        <p class="precio">${libro.precio}$</p>
                        <button class="btn btn-primary agregar-btn" 
                                data-id="${libro.id}" 
                                data-nombre="${libro.nombre}" 
                                data-precio="${libro.precio}">
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    cardsHTML += '</div></div>'; // Cierra el div de la fila (row) y el nuevo contenedor.

    // 5. Inserta todo el HTML generado dentro del contenedor.
    contenedor.innerHTML = cardsHTML;
});