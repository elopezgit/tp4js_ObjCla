// Arrays que almacenan los nombres y estados de los proyectos
const nombresProyectos = ['Proyecto A', 'Proyecto B', 'Proyecto C'];
const estadosProyectos = ['En curso', 'Iniciado', 'Pendiente'];

// Función para agregar un nuevo proyecto
function agregarProyecto(nombre, estado) {
    nombresProyectos.push(nombre);
    estadosProyectos.push(estado);
}

// Función para cambiar el estado de un proyecto
function cambiarEstadoProyecto(nombre, nuevoEstado) {
    const index = nombresProyectos.indexOf(nombre);
    if (index !== -1) {
        estadosProyectos[index] = nuevoEstado;
    } else {
        console.log("El proyecto no existe.");
    }
}

// Función para asignar un responsable a un proyecto
function asignarResponsable(nombre, responsable) {
    // Aquí podrías implementar la lógica para asignar un responsable a un proyecto
    console.log(`Se ha asignado a ${responsable} como responsable del proyecto ${nombre}.`);
}

// Función para generar un resumen de proyectos en curso
function resumenProyectosEnCurso() {
    console.log("Proyectos en curso:");
    for (let i = 0; i < nombresProyectos.length; i++) {
        if (estadosProyectos[i] === 'En curso') {
            console.log(`${nombresProyectos[i]} - ${estadosProyectos[i]}`);
        }
    }
}

// Ejemplo de uso
agregarProyecto('Proyecto D', 'Iniciado');
cambiarEstadoProyecto('Proyecto B', 'En curso');
asignarResponsable('Proyecto C', 'Juan Perez');
resumenProyectosEnCurso();
