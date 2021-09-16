var arrayParole = [];

function inputParole() {
    //prendo in input testo
    var parole = testo.value;
    //aggiungo elemento dentro array
    arrayParole.push(parole);
    inserisciParoleInArray();
    //svuoto campo di input
    testo.value = "";
}

function inserisciParoleInArray() {
    var listaParole = "";
    //ciclo array parole 
    for (i = 0; i < arrayParole.length; i++) {
        listaParole += " " + arrayParole[i];
    }
    //stampo risultato
    stampa.innerHTML = listaParole;
}




