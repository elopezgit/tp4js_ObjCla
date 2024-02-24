// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
// año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
// pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:


// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
        this.DNI = this.generaDNI();
    }

    mostrarGeneracion() {
        let generacion;
        if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
            generacion = "Generación Z";
            console.log("Población de generación: 7.800.000");
            console.log("Circunstancia histórica: Expansión masiva de internet");
            console.log("Rasgo característico: Irreverencia");
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
            generacion = "Generación Y";
            console.log("Población de generación: 7.200.000");
            console.log("Circunstancia histórica: Inicio de la digitalización");
            console.log("Rasgo característico: Frustración");
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
            generacion = "Generación X";
            console.log("Población de generación: 9.300.000");
            console.log("Circunstancia histórica: Crisis del 73 y transición española");
            console.log("Rasgo característico: Obsesión por el éxito");
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            console.log("Población de generación: 12.200.000");
            console.log("Circunstancia histórica: Paz y explosión demográfica");
            console.log("Rasgo característico: Ambición");
        } else if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
            generacion = "Silent Generation";
            console.log("Población de generación: 6.300.000");
            console.log("Circunstancia histórica: Conflictos bélicos");
            console.log("Rasgo característico: Austeridad");
        } else {
            generacion = "No se puede determinar la generación";
        }
        console.log(`Nombre: ${this.nombre}, Generación: ${generacion}`);
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} no es mayor de edad.`);
        }
    }

    mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Año de Nacimiento: ${this.anioNacimiento}`);
        console.log(`DNI: ${this.DNI}`);
    }

    generaDNI() {
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
}

// Crear instancias de Persona
let persona1 = new Persona("Juan", 25, "H", 70, 175, 1995);
let persona2 = new Persona("María", 40, "M", 60, 165, 1980);
let persona3 = new Persona("Carlos", 15, "H", 55, 160, 2007);

// Mostrar generación de cada persona
console.log("Generación de cada persona:");
persona1.mostrarGeneracion();
persona2.mostrarGeneracion();
persona3.mostrarGeneracion();

console.log("--------------------------------------");

// Determinar si cada persona es mayor de edad
console.log("Mayoría de edad:");
persona1.esMayorDeEdad();
persona2.esMayorDeEdad();
persona3.esMayorDeEdad();

console.log("--------------------------------------");

// Mostrar datos de cada persona
console.log("Datos de cada persona:");
persona1.mostrarDatos();
console.log("--------------------------------------");
persona2.mostrarDatos();
console.log("--------------------------------------");
persona3.mostrarDatos();
