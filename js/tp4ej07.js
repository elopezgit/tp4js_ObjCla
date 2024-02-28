// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.


class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    // Método para comparar dos contactos
    equals(otroContacto) {
        return this.nombre === otroContacto.nombre;
    }
}

class Agenda {
    constructor(capacidad = 10) {
        this.contactos = [];
        this.capacidad = capacidad;
    }

    // Método para añadir un contacto a la agenda
    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log("La agenda está llena. No se puede añadir más contactos.");
            return;
        }

        if (!this.existeContacto(contacto)) {
            this.contactos.push(contacto);
            console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
        } else {
            console.log(`El contacto ${contacto.nombre} ya existe en la agenda.`);
        }
    }

    // Método para verificar si un contacto existe en la agenda
    existeContacto(contacto) {
        return this.contactos.some(c => c.equals(contacto));
    }

    // Método para listar todos los contactos de la agenda
    listarContactos() {
        console.log("Lista de contactos:");
        this.contactos.forEach(contacto => {
            console.log(`${contacto.nombre}: ${contacto.telefono}`);
        });
    }

    // Método para buscar un contacto por su nombre y mostrar su teléfono
    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
        if (contactoEncontrado) {
            console.log(`El teléfono de ${nombre} es: ${contactoEncontrado.telefono}`);
        } else {
            console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
        }
    }

    // Método para eliminar un contacto de la agenda
    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.equals(contacto));
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.log(`El contacto ${contacto.nombre} ha sido eliminado.`);
        } else {
            console.log(`El contacto ${contacto.nombre} no existe en la agenda.`);
        }
    }

    // Método para verificar si la agenda está llena
    agendaLlena() {
        return this.contactos.length >= this.capacidad;
    }

    // Método para obtener la cantidad de huecos libres en la agenda
    huecosLibres() {
        return this.capacidad - this.contactos.length;
    }
}

// Función para mostrar el menú y procesar las opciones
function mostrarMenu(agenda) {
    while (true) {
        const opcion = prompt(
            "Selecciona una opción:\n" +
            "1. Añadir contacto\n" +
            "2. Buscar contacto\n" +
            "3. Eliminar contacto\n" +
            "4. Mostrar todos los contactos\n" +
            "5. Verificar si la agenda está llena\n" +
            "6. Verificar la cantidad de huecos libres\n" +
            "7. Salir"
        );

        switch (opcion) {
            case "1":
                const nombre = prompt("Introduce el nombre del contacto:");
                const telefono = prompt("Introduce el teléfono del contacto:");
                agenda.aniadirContacto(new Contacto(nombre, telefono));
                break;
            case "2":
                const nombreBuscar = prompt("Introduce el nombre del contacto a buscar:");
                agenda.buscarContacto(nombreBuscar);
                break;
            case "3":
                const nombreEliminar = prompt("Introduce el nombre del contacto a eliminar:");
                agenda.eliminarContacto(new Contacto(nombreEliminar, ""));
                break;
            case "4":
                agenda.listarContactos();
                break;
            case "5":
                console.log(`La agenda ${agenda.agendaLlena() ? "está" : "no está"} llena.`);
                break;
            case "6":
                console.log(`Hay ${agenda.huecosLibres()} huecos libres en la agenda.`);
                break;
            case "7":
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opción no válida. Inténtalo de nuevo.");
        }
    }
}

// Crear agenda telefónica con capacidad predeterminada
const agenda = new Agenda();

// Mostrar el menú interactivo
mostrarMenu(agenda);
