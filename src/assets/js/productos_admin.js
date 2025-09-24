// Datos de ejemplo de productos
let productos = [
  { codigo: "PL003", nombre: "Polera Oversize", precio: 14990, stock: 10, descripcion: "Polera estilo urbano talla única" },
  { codigo: "PL004", nombre: "Chaqueta Denim", precio: 24990, stock: 5, descripcion: "Chaqueta jeans azul con estilo retro" },
  { codigo: "PL005", nombre: "Gorro Urban", precio: 7990, stock: 20, descripcion: "Gorro de lana negro con logo bordado" }
];

function cargarProductos() {
  const tabla = document.getElementById("tabla-productos");
  tabla.innerHTML = "";

  productos.forEach((producto, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${producto.codigo}</td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio.toLocaleString()}</td>
        <td>${producto.stock}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editarProducto(${index})">Editar</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

// Agregar producto
document.getElementById("form-agregar").addEventListener("submit", function(e) {
  e.preventDefault();

  const nuevo = {
    codigo: document.getElementById("codigo").value,
    nombre: document.getElementById("nombre").value,
    precio: parseFloat(document.getElementById("precio").value),
    stock: parseInt(document.getElementById("stock").value),
    descripcion: document.getElementById("descripcion").value
  };

  productos.push(nuevo);
  cargarProductos();
  this.reset();
  alert("✅ Producto agregado correctamente");
});

// Editar producto
function editarProducto(index) {
  const producto = productos[index];
  const nuevoPrecio = prompt("Nuevo precio:", producto.precio);
  const nuevoStock = prompt("Nuevo stock:", producto.stock);

  if (nuevoPrecio !== null && nuevoStock !== null) {
    productos[index].precio = parseFloat(nuevoPrecio);
    productos[index].stock = parseInt(nuevoStock);
    cargarProductos();
    alert("✅ Producto actualizado correctamente");
  }
}

// Eliminar producto
function eliminarProducto(index) {
  if (confirm("¿Seguro que deseas eliminar este producto?")) {
    productos.splice(index, 1);
    cargarProductos();
  }
}

// Inicializar
document.addEventListener("DOMContentLoaded", cargarProductos);
