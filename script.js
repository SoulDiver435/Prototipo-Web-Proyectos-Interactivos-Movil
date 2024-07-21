let menuHambur = document.getElementById('menuHamburguesaDesplegado');
let menuHamburActivo = true;

let menuColeccionesDesplegado = document.getElementById('menuColeccionesDesplegado');
let coleccionesActivo = true;

let menuCategoriasDesp= document.getElementById('menuCategoriasDesp');
let CategoriasDespActivo = true;


function clickMenuHamb(){
    menuHamburActivo = !menuHamburActivo;

    if(menuHamburActivo){
        menuHambur.style.display='flex';
    }else{
        menuColeccionesDesplegado.style.display= 'none';
        menuHambur.style.display= 'none';
        menuCategoriasDesp.style.display= 'none';

        coleccionesActivo=false;
        CategoriasDespActivo=false;
    }
}

function clickColeccionesDesp(){
    coleccionesActivo = !coleccionesActivo;

    if(coleccionesActivo){
        menuColeccionesDesplegado.style.display='flex';
    }else{
        menuColeccionesDesplegado.style.display= 'none';
    }
}

function clickCategoriasDesp(){
    CategoriasDespActivo = !CategoriasDespActivo;

    if(CategoriasDespActivo){
        menuCategoriasDesp.style.display='flex';
    }else{
        menuCategoriasDesp.style.display= 'none';
    }
}


