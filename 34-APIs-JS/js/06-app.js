// Speech API - Para reconocer el audio del microfono
// Debe recibir permisos del usuario para usar el microfono

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

 microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {

    // Chrome funciona sobre webkit
    const SpeechRecognition =  webkitSpeechRecognition;
    // Crea un objeto SpeechRecognition
    const recognition = new SpeechRecognition();

    // Existen 4 etapas: 
    // 1. Iniciar el Recognition, 2: Comenzar a escuchar, 3: Cuando el usuario termina de hablar y 4: Mostrar el resultado
    
    // Start recognition
    recognition.start();

    // This runs when the speech recognition service starts
    // Cuando el usuario comienza a hablar
    recognition.onstart = function() {
        salida.classList.add('mostrar');
        salida.innerHTML = "Escuchando el microfono...";
    };
    
    // Cuando el usuario termina de hablar
    recognition.onspeechend = function() {
        salida.innerHTML = "Se detuvo de ejecutar";
        recognition.stop();
    };
  
    // This runs when the speech recognition service returns result
    // Cuando termina de grabar
    recognition.onresult = function(e) {

        console.log(e.results);

        // Son propiedades del result
        var transcript = e.results[0][0].transcript; // Lo que se hablo
        var confidence = e.results[0][0].confidence; // Que tan seguro esta de que se escribio correctamente

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        // Para que muestre el % se multiplica por 100
        seguridad.innerHTML =  `Seguridad:  ${ parseInt( confidence*100) } %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    };

}