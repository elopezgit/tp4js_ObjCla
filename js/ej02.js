// Registro de notas de estudiantes: Tienes dos arrays, 
// uno con nombres de estudiantes y otro con sus respectivas notas en un curso. 
// Debes crear funciones que calculen el promedio de notas por estudiante y muestren un resumen 
// con los nombres de los estudiantes que aprobaron y reprobaron el curso.

// Arrays que representan los nombres de los estudiantes y sus notas
const estudiantes = ['Juan', 'María', 'Pedro', 'Ana'];
const notas = [[7, 8, 6], [9, 7, 8], [6, 5, 7], [8, 9, 7]];

// Función para calcular el promedio de notas por estudiante
function calcularPromedioNotas(estudianteIndex) {
    let sumaNotas = 0;
    for (let nota of notas[estudianteIndex]) {
        sumaNotas += nota;
    }
    return sumaNotas / notas[estudianteIndex].length;
}

// Función para mostrar un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso
function mostrarResumen() {
    let aprobados = [];
    let reprobados = [];

    for (let i = 0; i < estudiantes.length; i++) {
        const promedio = calcularPromedioNotas(i);
        if (promedio >= 7) {
            aprobados.push(estudiantes[i]);
        } else {
            reprobados.push(estudiantes[i]);
        }
    }

    console.log('Estudiantes aprobados:', aprobados);
    console.log('Estudiantes reprobados:', reprobados);
}

// Ejemplo de uso
mostrarResumen();
