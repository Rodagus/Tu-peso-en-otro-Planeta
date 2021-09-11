var g_mercurio = 3.7;
var g_venus = 8.87;
var g_marte = 3.72;
var g_tierra = 9.8;
var g_jupiter = 24.79;
var g_saturno = 10.44;
var g_urano = 8.87;
var g_neptuno = 11.15;

// La idea es que al dar click en el boton Otra vez! se le pregunte al usuario en que planeta desea saber su peso 
// Luego se le da un anuncio de que esta en cierto planeta y solo quedaria preguntarle por su peso en la tierra
// La ultima acción es darle el peso al usuario en el planeta que el escogió

function elegirPlaneta(){
    document.getElementsByClassName('boton')

    var user = prompt('En que planeta quieres saber tu peso'); 
    
    if (user == 'mercurio') {
        alert('estás en el planeta Mercurio');    
        peso = prompt('¿Cual es tu peso en la tierra?');

        var peso_final;
        peso_final = peso * g_mercurio / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML =`<br/> Tu peso en Mercurio: ${peso_final} kg`;

    }else if (user == 'venus') {
        alert('Estas en el planeta Venus')
        peso = prompt('¿Cual es tu peso en la tierra?');

        var peso_final;
        peso_final = peso * g_venus / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML = `<br/> Tu peso en Venus: ${peso_final} kg`;

    }else if (user == 'marte') {
        alert('Estas en el planeta Marte')
        peso = prompt('¿Cual es tu peso en la tierra?');

        var peso_final;
        peso_final = peso * g_marte / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML = `<br/> Tu peso en Marte: ${peso_final} kg`;

    }else if(user == 'jupiter') {
        alert('Estas en el planeta Jupiter');
        peso = prompt('¿Cual es tu peso en la tierra?');

        var peso_final;
        peso_final = peso * g_jupiter / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML = `<br/> Tu peso en Jupiter: ${peso_final} kg`;

    }else if ( user == 'saturno') {
        alert('Estas en el planeta Saturno');
        peso = prompt('¿Cual es tu peso en la tierra?');

        var peso_final;
        peso_final = peso * g_saturno / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML = `<br/> Tu peso en Saturno: ${peso_final} kg`;

    }else if (user == 'urano') {
        alert('Estas en el planeta Urano');
        peso = prompt('¿Cual es tu peso en la tierra?')
    
        var peso_final;
        peso_final = peso * g_urano / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML = `<br/> Tu peso en Urano: ${peso_final} kg`;

    }else if (user == 'neptuno'){
        alert ('Estas en el planeta Neptuno');
        peso = prompt('¿Cual es tu peso en la tierra?');

        var peso_final; 
        peso_final = peso * g_neptuno / g_tierra;
        peso_final = peso_final.toFixed(2);
        document.getElementById('pesoPlaneta').innerHTML = `<br/> Tu peso en Neptuno: ${peso_final} kg`;

    }else {
        alert('No ha escogido ningun planeta')
    }
}
elegirPlaneta();

