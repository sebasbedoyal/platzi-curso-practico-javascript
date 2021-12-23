function calcularMediana(lista){

    var lista = lista.sort()
    
    var mitadLista = parseInt(lista.length / 2);
    
    function esPar(numero){
        if (numero % 2 === 0){
            return true;
        } else {
            false;
        }
    };
    
    var mediana;
    
    if (esPar(lista.length)){
        var elemento1 = lista[mitadLista];
        var elemento2 = lista[mitadLista - 1];
        var mediana = (elemento1 + elemento2) / 2 ;
        return mediana;
    
    } else {
        mediana = lista[mitadLista];
        return mediana;
    }

};
