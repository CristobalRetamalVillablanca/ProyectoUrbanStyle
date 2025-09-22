// Datos de ejemplo de pedidos
const pedidos = [
  { id: 101, cliente: "Juan Pérez", producto: "Polera Oversize", cantidad: 2, estado: "Pendiente" },
  { id: 102, cliente: "María López", producto: "Chaqueta Denim", cantidad: 1, estado: "Confirmado" },
  { id: 103, cliente: "Carlos Díaz", producto: "Gorro Urban", cantidad: 3, estado: "Enviado" }
];

function cargarPedidos() {
  const tabla = document.getElementById("tabla-pedidos");
  tabla.innerHTML = "";

  pedidos.forEach((pedido, index) => {
    tabla.innerHTML += `
      <tr>
        <td>${pedido.id}</td>
        <td>${pedido.cliente}</td>
        <td>${pedido.producto}</td>
        <td>${pedido.cantidad}</td>
        <td>
          <select class="form-select form-select-sm" onchange="actualizarEstado(${index}, this.value)">
            <option ${pedido.estado === "Pendiente" ? "selected" : ""}>Pendiente</option>
            <option ${pedido.estado === "Confirmado" ? "selected" : ""}>Confirmado</option>
            <option ${pedido.estado === "Enviado" ? "selected" : ""}>Enviado</option>
            <option ${pedido.estado === "Entregado" ? "selected" : ""}>Entregado</option>
          </select>
        </td>
        <td>
          <button class="btn btn-info btn-sm" onclick="verDetalle(${index})">Detalle</button>
          <button class="btn btn-danger btn-sm" onclick="eliminarPedido(${index})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

function verDetalle(index) {
  const pedido = pedidos[index];
  alert(`📦 Pedido #${pedido.id}\nCliente: ${pedido.cliente}\nProducto: ${pedido.producto}\nCantidad: ${pedido.cantidad}\nEstado: ${pedido.estado}`);
}

function actualizarEstado(index, nuevoEstado) {
  pedidos[index].estado = nuevoEstado;
  alert(`✅ Estado actualizado a: ${nuevoEstado}`);
}

function eliminarPedido(index) {
  if (confirm("¿Seguro que deseas eliminar este pedido?")) {
    pedidos.splice(index, 1);
    cargarPedidos();
  }
}

document.addEventListener("DOMContentLoaded", cargarPedidos);
