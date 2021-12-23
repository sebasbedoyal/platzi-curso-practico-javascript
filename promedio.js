function calcularPromedio(lista){
    
    var sumaAcumulada = 0;
    var cantidadItems = lista.length;
    
    for (i of lista){
        sumaAcumulada = sumaAcumulada + i;
    };

    var promedioLista = sumaAcumulada / cantidadItems;
    return promedioLista;

};