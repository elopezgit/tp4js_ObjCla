// 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", 
// y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores
//  para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}. ¡Mucho gusto!`);
    }

    despedirse() {
        console.log(`Adiós, me llamo ${this.nombre}. ¡Hasta luego!`);
    }
}

// Crear dos objetos de la clase Persona
let persona1 = new Persona("Juan", 30, "ingeniero");
let persona2 = new Persona("María", 25, "médico");

// Llamar a los métodos saludar y despedirse de cada persona
persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();
