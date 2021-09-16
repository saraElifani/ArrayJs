const arrayParole = [];

function inputParole() {
    //prendo in input testo
    let parole = testo.value.split(" ");
    //aggiungo elemento dentro array
    arrayParole.push(parole);
    visualizzaParoleInArray();
    //svuoto campo di input
    testo.value = "";
}

function visualizzaParoleInArray() {
    const inizio = "<ol>\n";
    const fine = "\n</ol>";
    let listaParole = "";
    //ciclo array parole 
    for (i = 0; i < arrayParole.length; i++) {
        listaParole += "<li>" + arrayParole[i] + "</li>";
    }
    //stampo risultato
    stampa.innerHTML = listaParole;
}




