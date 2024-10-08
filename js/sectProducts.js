const sectProducts = document.getElementById('sectProducts');


function showProductsId(classProduct) {
    productos.forEach(producto => {
        const card = document.createElement("article");
        card.className = 'card '+producto.stock;
        card.id = producto.id;

        if (producto.class == classProduct) {
            card.innerHTML = ` <a href="./productInfo.html">
                <div class="foto">
                   <img src="${producto.img}.png" alt="producto">
                   <p>Sin Stock</p>
               </div>
               <div class="infoProd">
                   <div class="nombrePrecio">
                       <h6>${producto.name}</h6>
                       <p class="precio">$${producto.price.toLocaleString()}</p>
                   </div>
                   <p class="cuotas">${producto.cuotas}</p>
                   </a>
               </div>
            `
        }
        if (producto.class !== classProduct) {
            card.style.display = 'none';
        }
        sectProducts.appendChild(card);

        //Logica Click Producto
        let cardContent = card.querySelectorAll('*');
        for (let i = 0; i < cardContent.length; i++) {
            cardContent[i].id = producto.id;
        }
        card.addEventListener('click', (e) => {
            sessionStorage.setItem('idSelected', e.target.id);
        })

        
    })
    
}

console.log(sessionStorage.getItem('classSelected'));

showProductsId(sessionStorage.getItem('classSelected'));



