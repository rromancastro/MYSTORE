const searchButton = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');
let arrayProductosBuscados = [];


const searchContainer = document.getElementById('sectProductsSearch') || null;

searchButton.addEventListener('click', iniciarBusqueda);

function iniciarBusqueda() {
    localStorage.setItem('searchVar', searchInput.value);
    console.log('busqueda: ' + localStorage.getItem('searchVar'));

    arrayProductosBuscados = productos.filter(producto => producto.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(localStorage.getItem('searchVar')));
    console.log(arrayProductosBuscados);
    localStorage.setItem('arrayProductosBuscados', JSON.stringify(arrayProductosBuscados));

}


if (searchContainer) {
    JSON.parse(localStorage.getItem('arrayProductosBuscados')).forEach(producto => {
        const card = document.createElement("article");
        card.className = 'card '+producto.stock;
        card.id = producto.id;
    
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
            searchContainer.appendChild(card);

            //Logica Click Producto
        let cardContent = card.querySelectorAll('*');
        for (let i = 0; i < cardContent.length; i++) {
            cardContent[i].id = producto.id;
        }
        card.addEventListener('click', (e) => {
            sessionStorage.setItem('idSelected', e.target.id);
        });
    });
}



console.log('busqueda: ' + localStorage.getItem('searchVar'));
console.log(JSON.parse(localStorage.getItem('arrayProductosBuscados')));
