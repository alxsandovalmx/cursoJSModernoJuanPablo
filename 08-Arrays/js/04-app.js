// Al Igual que los objetos un arreglo se puede modificar a pesar de utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

meses[0] = 'Nuevo Mes';

// También se puede añadir al final
meses[6] = 'Ultimo Mes';

// Si crea un elemento en una posicion adelantada, crea los elementos anteriores como undefined y al listarlos los omite
meses[10] = 'Ultimo mes';

// Al igual que los objetos en los arrays existen métodos que son bastante útiles, así que veamos algunos ejemplos en los siguientes videos

console.log(meses);

