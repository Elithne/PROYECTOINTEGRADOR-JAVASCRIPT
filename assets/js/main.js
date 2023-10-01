// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene la información de productos almacenada en el localStorage.
    const productsInfo = JSON.parse(localStorage.getItem("productos"));
    console.log(productsInfo); // Imprime la información de productos en la consola.

    // Llama a la función createCards pasando la información de productos como argumento.
    createCards(productsInfo);

    // Realiza una solicitud fetch para obtener datos de productos desde un archivo "products.json".
    fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
            // Almacena los datos de productos obtenidos en el localStorage.
            localStorage.setItem("productos", JSON.stringify(data.productos));
        });

    // Función para crear tarjetas de productos y mostrarlos en la página.
    function createCards(data) {
        card = "";
        data.forEach(dato => {
            // Crea una tarjeta de producto con los datos proporcionados.
            card += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 my-1 d-flex align-items-stretch">
                <div class="card p-2 m-2 shadow-sm bg-danger-subtle">
                    <img src="${dato.imagen}" class="card-img-top" alt="${dato.nombre}">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title product-title">${dato.nombre}</h5>
                        <p class="card-text text-muted">${dato.descripcion}</p>
                        <div id="abajo" class="d-flex justify-content-md-between mt-auto flex-column">
                            <p class="card-text p-2 text-muted">Precio: $${dato.precio}</p>                           
                            <div>
                                <a href="details.html?id=${dato.id}" class="btn btn-danger">VER MAS</a>
                            </div>                    
                        </div>                    
                    </div>                   
                </div>
            </div>`;
        })    
        // Actualiza el contenido del contenedor de tarjetas con las tarjetas generadas.
        cardsContainer.innerHTML = card;
    }
});