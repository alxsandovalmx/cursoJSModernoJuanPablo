// Async Await con Function Expression

function usuarioAutenticado() {
    return new Promise((resolve, reject) => {
        const autenticado = true;

        setTimeout( () => {
            if(autenticado) {
                resolve('El Usuario esta autenticado'); 
            } else {
                reject('Las credenciales son incorrectas');
                
            }            
        }, 3000);

    });
}

// Async await
// async function login() {
const login = async () => {
    try {
        const respuesta = await usuarioAutenticado();
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }
}


login();
