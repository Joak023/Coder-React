const contenedorTarjetas = document.getElementById("productos-container")

function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
      const nuevoVehiculo = document.createElement("div");
      nuevoVehiculo.classList = "tarjeta-producto";
      nuevoVehiculo.innerHTML = `
      <img src="./img/productos/${producto.id}.jpg">
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button>Agregar al carrito</button>
      `
      contenedorTarjetas.appendChild(nuevoVehiculo);  
      nuevoVehiculo.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto))
    });
}


crearTarjetasProductosInicio(vehiculo)