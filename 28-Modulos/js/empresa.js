// 5) Heredar una lase exportada...

import { Cliente }  from './cliente.js';

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro); // Para heredar el constructor del Padre
        this.categoria = categoria;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
    }
}
