// git@github.com:sebasbedoyal/platzi-curso-practico-javascript.git

// Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4; 
}; 

function areaCuadrado(lado){
    return lado * lado; 
}; 

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo(base, altura){
    return (Number(base) * Number(altura)) / 2;
}

// Código del círculo
// Diametro
 function diametroCirculo(radio){
    return radio * 2;
 }

// Circunferencia
function perimetroCirculo(radio){ 
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

// Área
function areaCirculo(radio){
    return Math.PI * (radio * radio);
}

//Aquí interactuamos con el HTML
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
};

//Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputLado1");
    const lado2 = document.getElementById("InputLado2");
    const base = document.getElementById("InputLadoBase");

    const valueLado1 = lado1.value;
    const valueLado2 = lado2.value;
    const valueLadoBase = base.value;

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueLadoBase);
    alert(perimetro);
};

function calcularAreaTriangulo(){
    const base = document.getElementById("InputLadoBase");
    const altura = document.getElementById("InputAltura");

    const valueLadoBase = base.value;
    const valueAltura = altura.value;

    const area = areaTriangulo(valueLadoBase, valueAltura);
    alert(area);
};

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = areaCirculo(value);
    alert(perimetro);
};