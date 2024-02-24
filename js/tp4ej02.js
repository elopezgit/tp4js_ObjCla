// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a 
// mostrar la descripción del estado de la cuenta.



class CuentaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se han ingresado ${cantidad} pesos a la cuenta.`);
        } else {
            console.log("La cantidad a ingresar debe ser mayor que cero.");
        }
    }

    extraer(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se han extraído ${cantidad} pesos de la cuenta.`);
        } else {
            console.log("La cantidad a extraer debe ser mayor que cero y no puede exceder el saldo disponible.");
        }
    }

    informar() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo actual: ${this.saldo} pesos`);
    }
}

// Crear una instancia de la clase CuentaBancaria
let cuenta = new CuentaBancaria("Alex");

// Mostrar descripción del estado de la cuenta
cuenta.informar();

// Ingresar dinero en la cuenta
cuenta.ingresar(100);

// Mostrar descripción del estado de la cuenta después del ingreso
cuenta.informar();

// Extraer dinero de la cuenta
cuenta.extraer(50);

// Mostrar descripción del estado de la cuenta después de la extracción
cuenta.informar();
