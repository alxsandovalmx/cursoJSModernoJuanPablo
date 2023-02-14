// Arrow functions en métodos de propiedad


const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

    set setCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get getCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
reproductor.borrar = id => console.log(`Borrando canción id ${id}`);

reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

// Probando set y get se utilizando de la siguiente forma
reproductor.setCancion = 'Enter Sandman';
reproductor.getCancion; // Enter Sandman

