// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// También llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...

const reproductor = {
    
    // En un objeto reproducir seria una propiedad, pero como tiene una funcion se le llama metodo de propiedad
    reproducir: function( id ) {
        console.log(`Reproduciendo canción id ${id}`);
    },

    pausar: function() {
        console.log('pausando...');
    },

    borrar: function( id ) {
        console.log(`Borrando canción con id: ${id}`)
    },

    crearPlaylist: function( nombre ) {
        console.log(`Creando la Playlist ${nombre}`);
    },

    reproducirPlaylist: function( nombre ) {
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }

};

reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden crearse por fuera de la deficion del objeto
reproductor.borrar = function( id ) {

    console.log(`Borrando canción con id: ${id}`)

};

reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

