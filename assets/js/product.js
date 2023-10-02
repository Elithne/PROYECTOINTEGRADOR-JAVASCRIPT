// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", () => {
  // Obtiene la referencia al contenedor HTML donde se mostrarán los detalles del producto.
  const cardContainer = document.getElementById("details-card");

  // Obtiene los parámetros de la URL, en este caso, el ID del producto de la página actual.
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Obtiene todos los productos almacenados en el almacenamiento local (localStorage).
  const allProducts = JSON.parse(localStorage.getItem("productos"));

  // Busca el producto correspondiente al ID en la lista de productos.
  const productDetails = allProducts.find(
      (product) => product.id === productId
  );

  // Si se encontraron detalles del producto, se muestra la información en el contenedor.
  if (productDetails) {
      cardContainer.innerHTML = `
      <div class="row">
          <div class="col-md-4">
              <img src="${productDetails.imagen}" class=" card-img m-md-4 py-2" alt="${productDetails.nombre}">
          </div>
          <div class="col-md-8">
              <div class="card-body text-center">
                  <h5 id="name" class="card-title pb-2">${productDetails.nombre}</h5>
                  <p id="description" class="card-text">Producto #${productDetails.id}</p>
                  <p id="description" class="card-text">${productDetails.descripcion}</p>
                  <p id="details" class="card-text">${productDetails.detalle}</p>
                  <p id="price" class="card-text">Precio: $${productDetails.precio}</p>
                  <p id="stars" class="card-text">Valoración: ${productDetails.valoracion}</p>
              </div>
          </div>
      </div>`;
  }
});
