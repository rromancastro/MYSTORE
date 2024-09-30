const iconNav = document.getElementById('dropButton');
let rotacion = 0;

iconNav.onclick = () => {
    rotacion += 180;
    iconNav.style.transform = `rotate(${rotacion}deg)`;
}

let index = document.querySelector('.navBrand');
let living = document.getElementById('living');
let dormitorio = document.getElementById('dormitorio');
let comedor = document.getElementById('comedor');
let outlet = document.getElementById('outlet');
let selectedClass = "";

index.onclick = () => {
    localStorage.removeItem('classSelected');
    selectedClass = localStorage.setItem('classSelected', 'index');
}

living.onclick = () => {
    localStorage.removeItem('classSelected');
    selectedClass = localStorage.setItem('classSelected', 'living');
}

dormitorio.onclick = () => {
    localStorage.removeItem('classSelected');
    selectedClass = localStorage.setItem('classSelected', 'dormitorio');
}

comedor.onclick = () => {
    localStorage.removeItem('classSelected');
    selectedClass = localStorage.setItem('classSelected', 'comedor');
}

outlet.onclick = () => {
    localStorage.removeItem('classSelected');
    selectedClass = localStorage.setItem('classSelected', 'outlet');
}

switch (localStorage.getItem('classSelected')) {
    case 'living':
        living.className = 'sit';
        break;
    case 'dormitorio':
        dormitorio.className = 'sit'
        break;
    case 'comedor':
        comedor.className = 'sit'
        break;
    case 'outlet':
        outlet.className = 'sit'
        break;
    default:
        break;
}