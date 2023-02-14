// El problema que solucionan los prototypes...

function Cliente( nombre, saldo ) {
    this.nombre = nombre;
    this.saldo  = saldo;
}

const alexis = new Cliente('Alexis', 400);

console.log(alexis);


// Supongamos que queremos una función que muestre el nombre y saldo...
function formatearCliente( cliente ) {
    const { nombre, saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

console.log( formatearCliente( alexis ));

function Empresa( nombre, saldo, categoria ) {
    this.nombre     = nombre;
    this.saldo      = saldo;
    this.categoria  = categoria;
}

const ccj = new Empresa('Código Con Juan', 400, 'cursos en linea');
console.log(ccj);

// Debido a que tengo una propiedad nueva, es dificil reutilizar esa función, lo cual nos llevaria digamos a muchas funciones que no sabriamos cuales utilizar para los diferentes objetos, esa es una ventaja que nos dan los prototypes ya que podemos crear funciones que se podrían atar o utilizar unicamente con determinados objetos...

// Tendriamos que crear otra funcion para tratar los objetos con campos adicionales
function formatearEmpresa( empresa ) {
    const { nombre, saldo, categoria } = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria de ${categoria}`;
}

console.log( formatearEmpresa( ccj )  );

// Los prototypes nos permiten expandir funciones que son exclusivas en este caso de cliente y funciones exclusivas de empresa, de esa forma, solo se expande el prototype segun se necesite.

