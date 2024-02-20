
// Tienes dos arrays, uno que representa los productos en stock y otro que 
// almacena los precios de los productos. Debes crear funciones que permitan 
// agregar nuevos productos al inventario, 
// eliminar productos agotados y calcular el valor total del inventario.

// Arrays que representan los productos en stock y sus precios
let inventario = ['producto1', 'producto2', 'producto3'];
let precios = [10, 20, 30];

// Función para agregar un nuevo producto al inventario con su precio
function agregarProducto(nombre, precio) {
    inventario.push(nombre);
    precios.push(precio);
}

// Función para eliminar un producto agotado del inventario
function eliminarProductoAgotado(nombre) {
    const index = inventario.indexOf(nombre);
    if (index !== -1) {
        inventario.splice(index, 1);
        precios.splice(index, 1);
    } else {
        console.log("El producto no está en el inventario.");
    }
}

// Función para calcular el valor total del inventario
function calcularValorTotal() {
    let valorTotal = 0;
    for (let i = 0; i < inventario.length; i++) {
        valorTotal += precios[i];
    }
    return valorTotal;
}

// Ejemplo de uso
console.log("Inventario inicial:", inventario);
console.log("Precios iniciales:", precios);

agregarProducto('producto4', 40);
console.log("Inventario después de agregar producto:", inventario);
console.log("Precios después de agregar producto:", precios);

eliminarProductoAgotado('producto2');
console.log("Inventario después de eliminar producto agotado:", inventario);
console.log("Precios después de eliminar producto agotado:", precios);

console.log("Valor total del inventario:", calcularValorTotal());
