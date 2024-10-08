
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

  
  // AGREGAR AL DOM
  const productsCartList = document.getElementById('productsCartList');
  function agregarCarritoAlDOM() {
    cartProducts.forEach(producto => {
        const card = document.createElement('article');
        card.className = 'cardCartList';
        card.id = producto.id;

        card.innerHTML = `
            <div class="cardCartListInfo">
                <h3>${producto.name}</h3>
                <p>ID: ${producto.id}</p>
                <p>$${producto.price.toLocaleString()}
                <button id="removeItem">Eliminar</button></p>
            </div>
            <img src="${producto.img}.png" alt="">
            `;

        productsCartList.appendChild(card);

    })
  }

  function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  }

let cartProducts = cargarCarrito();

let total = cartProducts.reduce((acumulador, producto) => acumulador + producto.price, 0);
let totalH3 = document.getElementById('totalH3');
(total != 0) ? (totalH3.innerText = "Total: $" + total.toLocaleString()) : (totalH3.innerText = "El carrito está vacio, vamos a llenarlo!");

  console.log(cartProducts);
  agregarCarritoAlDOM();
//   localStorage.removeItem('carrito');
