const productInfoPage = document.querySelector('#productInfoPage');
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function showProductInfoPage (idBuscado) {
    let producto = productos.find(productos => productos.id == idBuscado);
    document.title = "Confort.CO - " + producto.name;
    const productPage = `
    <article class="productInfo ${producto.stock}">
            <div class="fotos">
                <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${producto.img}.png"alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${producto.img}-2.png"alt="...">
                      </div>
                      <div class="carousel-item">
                        <img src="${producto.img}-3.png"alt="...">
                      </div>
                    </div>
                  </div>
                  <div class="carouselSelect">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"><img src="${producto.img}.png" alt=""></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"><img src="${producto.img}-2.png" alt=""></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"><img src="${producto.img}-3.png" alt=""></button>
                  </div>
                <p>Sin Stock</p>
            </div>
            <div class="infoProdPage">
                <h6>${producto.name}</h6>
                <div>
                    <p class="precio">$${producto.price.toLocaleString()}</p>
                    <p class="cuotas">${producto.cuotas}</p>
                </div>
                <ul>
                    <li><p>${producto.medidas}</p></li>
                    <li><p>${producto.desc1}</p></li>
                    <li><p>${producto.desc2}</p></li>
                </ul>
                <div id="colores">
                        <div class="gris" tabindex="0"></div>
                        <div class="rojo" tabindex="0"></div>
                        <div class="azul" tabindex="0"></div>
                        <div class="negro"></div>
                </div>
                <button ${producto.stock} id="addToCart"">
                    <p>Agregar al Carrito</p>
                    <p class="noStock">Sin Stock</p>
                </button>
            </div>
        </article>
    `
    productInfoPage.innerHTML += productPage;

    let colores = document.getElementById('colores');
    if (producto.colors == "disabled") {
        colores.id = 'disabled';
    }


    // LOGICA AGREGAR AL CARRITO
    let addToCart = document.getElementById('addToCart');
    const precioEstatico = producto.price;


    addToCart.addEventListener('click', function(e) {
      if(cartProducts.includes(producto)) {
        producto.cantidad += 1;
        producto.price = precioEstatico * producto.cantidad;
        console.log(cartProducts);
        guardarCarrito(cartProducts);
        cargarCarrito();
        productsCartList.innerHTML = '';
        agregarCarritoAlDOM();
        total = cartProducts.reduce((acumulador, producto) => acumulador + producto.price, 0);
        totalH3.innerText = "Total: $" + total.toLocaleString();
        Swal.fire({
          title: "¡El producto fue agregado al carrito!",
          icon: "success"
        });
      } else {
        cartProducts.push(producto);
        producto.cantidad = 1;
        producto.price = precioEstatico;
        console.log(cartProducts);
        guardarCarrito(cartProducts);
        cargarCarrito();
        productsCartList.innerHTML = '';
        agregarCarritoAlDOM();
        total = cartProducts.reduce((acumulador, producto) => acumulador + producto.price, 0);
        totalH3.innerText = "Total: $" + total.toLocaleString();
        Swal.fire({
          title: "¡El producto fue agregado al carrito!",
          icon: "success"
        });
      }
    })


}

console.log("id buscado " + sessionStorage.getItem('idSelected'));
showProductInfoPage(sessionStorage.getItem('idSelected'));
