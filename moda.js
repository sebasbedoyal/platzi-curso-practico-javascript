function calcularModa(lista){
    
    var listaCount = {};
    
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    var listaArray = Object.entries(listaCount).sort();
    
    var listaRepeticiones = [];
    for (i of listaArray){
        var valor = listaRepeticiones.push(i[1]);
    };
    listaRepeticiones = listaRepeticiones.sort();
    
    var itemsRepeticiones = listaRepeticiones.length - 1;
    var maxRepeticiones = listaRepeticiones[itemsRepeticiones];
    
    Moda = [];
    for (i of listaArray){
        if(i[1] === maxRepeticiones){
            var valor = Moda.push(i[0]);
        }    
    };

return Moda;

};



