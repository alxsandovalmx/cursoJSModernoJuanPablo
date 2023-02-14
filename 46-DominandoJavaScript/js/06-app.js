// New binding

/** También cuando creas un nuevo objeto con el object constructor tienes acceso a la palabra this via un nuevo objeto con new */

function Auto( model, color ) {
    this.model = model;
    this.color = color;
}
const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// Window binding
window.color = 'negro';

function hola() {
    console.log(color);
}

hola();
