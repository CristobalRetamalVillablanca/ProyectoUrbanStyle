document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-container");

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "d-flex");

    card.innerHTML = `
      <div class="card h-100 w-100 text-center shadow-sm" style="color: #111111">
        <a href="producto.html?id=${prod.codigo}">
          <img src="${prod.imagen}" class="card-img-top h-100" alt="${prod.nombre}" style="background-color: #B0B0B0; object-fit: cover;">
        </a>
        <div class="card-body d-flex flex-column" style="background-color: #B0B0B0">
          <h5 class="card-title">
            <a href="producto.html?id=${prod.codigo}" style="text-decoration: none; color: inherit;">
              ${prod.nombre}
            </a>
          </h5>
          <p class="card-text flex-grow-1">${prod.descripcion}</p>
          <p class="fw-bold">$${prod.precio.toLocaleString("es-CL")}</p>
          <button class="btn btn-success mt-auto"
                  onclick="agregarAlCarrito({
                    id: '${prod.codigo}',
                    nombre: '${prod.nombre}',
                    precio: ${prod.precio},
                    cantidad: 1
                  })">
            Agregar al carrito
          </button>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
