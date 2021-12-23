const precioOriginal = 120;
const descuento = 15;

const cupons = [
    {
        name: "cupon1",
        discount: "15"
    },
    {
        name: "cupon2",
        discount: "20"
    },
    {
        name: "cupon3",
        discount: "25"
    },
];


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

// Interactuar con HTML

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const InputDiscount = document.getElementById("InputDiscount");
    
    const priceValue = inputPrice.value;
    const discountValue = InputDiscount.value;
    
    const isCouponValueValid = function(cupon){
        console.log(cupon.name === discountValue);
        return cupon.name === discountValue;
    };

    const userCoupon = cupons.find(isCouponValueValid);

    if (!userCoupon) {
    alert("El cupón " + discountValue + " no es válido");
    }

    else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
        const resultP = document.getElementById("ResultPrice")
        resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
    }

};