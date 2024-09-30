const sectProducts = document.getElementById('sectProducts');

function showProductsId(classProduct) {
    productos.forEach(producto => {
        if (producto.class == classProduct) {
            const productoCard = `
            <article class="card ${producto.stock}">
                <div class="foto">
                    <img src="${producto.img}" alt="producto">
                    <p>Sin Stock</p>
                </div>
                <div class="infoProd">
                    <div class="nombrePrecio">
                        <h6>${producto.name}</h6>
                        <p class="precio">$${producto.price}</p>
                    </div>
                    <p class="cuotas">${producto.cuotas}</p>
                    <div class="colores">
                        <div class="gris" tabindex="0"></div>
                        <div class="rojo" tabindex="0"></div>
                        <div class="azul" tabindex="0"></div>
                        <div class="negro"></div>
                    </div>
                    <button ${producto.stock}>
                        <p>Agregar al Carrito</p>
                        <p class="noStock">Sin Stock</p>
                    </button>
                </div>
            </article>`
            sectProducts.innerHTML += productoCard;
        }
        
    })
}

showProductsId("living");



