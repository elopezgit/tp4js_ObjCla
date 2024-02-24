// 1- Crea un objeto llamado auto que tenga algunas características como el color,
//  marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó


const auto = {
    color: 'rojo',
    marca: 'Toyota',
    modelo: 'Corolla',
    encendido: false,

// Método para encender el auto
    encender: function() {
        if (!this.encendido) {
            this.encendido = true;
            console.log('El auto se encendió.');
        } else {
            console.log('El auto ya está encendido.');
        }
    },

    // Método para apagar el auto
    apagar: function() {
        if (this.encendido) {
            this.encendido = false;
            console.log('El auto se apagó.');
        } else {
            console.log('El auto ya está apagado.');
        }
    }
};

// Ejemplo de uso
auto.encender(); // Output: El auto se encendió.
auto.apagar();  // Output: El auto se apagó.
