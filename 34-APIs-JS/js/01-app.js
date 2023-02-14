// API's en JavaScript

// Notification API - Notificaciones nátivas

const notificarBtn = document.querySelector('#notificar');

// Aceptar notificacion
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission() // Pide permiso para enviar notificacion // Usa Promises
        .then( resultado => {
            // granted: Significa que se dio permiso
            // denied: Significa que se rechazo el permiso
            console.log('El resultado es ', resultado)
         })
})

// Muestra una notificacion
const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        new Notification('Esta es la notificación'); // Muestra el contenido de la notificacion
    }
})

// Ir mas alla con nuestra notificación...
const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        const notificacion = new Notification('Esta es la notificación', { 
            icon: 'img/ccj.png',
            body: 'Código con Juan, los mejores tutoriales'
        });

        // Ir al sitio web de juan
        // Al dar clic en la notififacion lleva a ese sitio
        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com')
        }

    }
})

