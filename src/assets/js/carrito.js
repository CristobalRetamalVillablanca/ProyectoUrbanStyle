// ==============================
// CARRITO DE COMPRAS
// ==============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Guardar carrito
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto
function agregarAlCarrito(producto) {
  const index = carrito.findIndex(item => item.id === producto.id);
  if (index !== -1) {
    carrito[index].cantidad += producto.cantidad;
  } else {
    carrito.push(producto);
  }
  guardarCarrito();
  renderCarrito();
}

// Cambiar cantidad
function cambiarCantidad(index, delta) {
  carrito[index].cantidad += delta;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  guardarCarrito();
  renderCarrito();
}

// Eliminar producto
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  renderCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  renderCarrito();
}

// Renderizar carrito
function renderCarrito() {
  const contenedor = document.getElementById("carrito-items");
  const totalElem = document.getElementById("carrito-total");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    contenedor.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
        <div>
          <strong>${item.nombre}</strong><br>
          <small>$${item.precio.toLocaleString("es-CL")}</small>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-sm btn-outline-secondary me-1" onclick="cambiarCantidad(${index}, -1)">-</button>
          <span class="px-2">${item.cantidad}</span>
          <button class="btn btn-sm btn-outline-secondary ms-1" onclick="cambiarCantidad(${index}, 1)">+</button>
        </div>
        <span class="ms-3 fw-bold">$${subtotal.toLocaleString("es-CL")}</span>
        <button class="btn btn-sm btn-danger ms-2" onclick="eliminarDelCarrito(${index})">✕</button>
      </div>
    `;
  });

  totalElem.textContent = `$${total.toLocaleString("es-CL")}`;
}

// Pagar
function pagar() {
  if (carrito.length === 0) {
    alert("⚠️ El carrito está vacío");
    return;
  }
  alert("✅ Pedido completado con éxito");
  vaciarCarrito();
}

// ==============================
// Inicialización después de DOM
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  renderCarrito();

  const toggleBtn = document.getElementById("toggle-carrito");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const carritoElem = document.getElementById("carrito");
      if (carritoElem) carritoElem.classList.toggle("d-none");
    });
  }

  const btnPagar = document.getElementById("btn-pagar");
  if (btnPagar) {
    btnPagar.addEventListener("click", pagar);
  }
});
