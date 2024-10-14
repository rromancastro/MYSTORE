const iconNav = document.getElementById('dropButton');
let rotacion = 0;

iconNav.onclick = () => {
    rotacion += 180;
    iconNav.style.transform = `rotate(${rotacion}deg)`;
}


//Logica de Links
let index = document.querySelector('.navBrand');
let living = document.getElementById('living');
let dormitorio = document.getElementById('dormitorio');
let comedor = document.getElementById('comedor');
let outlet = document.getElementById('outlet');

let livingCard = document.getElementById('livingCard');
let dormitorioCard = document.getElementById('dormitorioCard');
let comedorCard = document.getElementById('comedorCard');
let outletCard = document.getElementById('outletCard');

let selectedClass = "";


index.onclick = () => {
    sessionStorage.removeItem('classSelected');
    selectedClass = sessionStorage.setItem('classSelected', 'index');
}

living.onclick = () => {
    sessionStorage.removeItem('classSelected');
    selectedClass = sessionStorage.setItem('classSelected', 'living');
}

dormitorio.onclick = () => {
    sessionStorage.removeItem('classSelected');
    selectedClass = sessionStorage.setItem('classSelected', 'dormitorio');
}

comedor.onclick = () => {
    sessionStorage.removeItem('classSelected');
    selectedClass = sessionStorage.setItem('classSelected', 'comedor');
}

outlet.onclick = () => {
    sessionStorage.removeItem('classSelected');
    selectedClass = sessionStorage.setItem('classSelected', 'outlet');
}

if (livingCard && dormitorioCard && comedorCard && outletCard) {
    livingCard.onclick = () => {
        sessionStorage.removeItem('classSelected');
        selectedClass = sessionStorage.setItem('classSelected', 'living');
    }

    dormitorioCard.onclick = () => {
        sessionStorage.removeItem('classSelected');
        selectedClass = sessionStorage.setItem('classSelected', 'dormitorio');
    }

    comedorCard.onclick = () => {
        sessionStorage.removeItem('classSelected');
        selectedClass = sessionStorage.setItem('classSelected', 'comedor');
    }

    outletCard.onclick = () => {
        sessionStorage.removeItem('classSelected');
        selectedClass = sessionStorage.setItem('classSelected', 'outlet');
    }
}



switch (sessionStorage.getItem('classSelected')) {
    case 'living':
        living.className = 'sit';
        break;
    case 'dormitorio':
        dormitorio.className = 'sit';
        break;
    case 'comedor':
        comedor.className = 'sit';
        break;
    case 'outlet':
        outlet.className = 'sit';
        break;
    case 'index':
        living.className = '';
        dormitorio.className = '';
        comedor.className = '';
        outlet.className = '';

        break;
    default:
        break;
}