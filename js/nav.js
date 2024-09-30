const iconNav = document.getElementById('dropButton');
let rotacion = 0;

iconNav.onclick = () => {
    rotacion += 180;
    iconNav.style.transform = `rotate(${rotacion}deg)`;
}