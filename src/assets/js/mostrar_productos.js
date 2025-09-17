
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos-container");

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("col-md-3");

    card.innerHTML = `
      <div class="card h-100 text-center shadow-sm bg-dark border-0" style="color: #111111">
        <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" style="background-color: #B0B0B0">
        <div class="card-body d-flex flex-column" style="background-color: #B0B0B0">
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">${prod.descripcion}</p>
          <p class="fw-bold">$${prod.precio.toLocaleString("es-CL")}</p>
          <button class="btn btn-success mt-auto">Agregar al carrito</button>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
});
