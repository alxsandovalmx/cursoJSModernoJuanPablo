// Import de Nodemailer
import nodemailer from "nodemailer";

const emailRegistro = async ( datos ) => {

    const transporter = nodemailer.createTransport({
        
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

    //   console.log( datos );

    // Enviar el email
    const { email, nombre, token } = datos;

    const info = await transporter.sendMail( {

        // Datos del email
        from: '"APV - Administrador de Pacientes de Veterinaria" <apv@correo.com>',
        to: email,
        subject: 'Comprueba tu cuenta en APV',
        text: 'Comprueba tu cuenta en APV',
        html: `<p>Hola: <b>${nombre}</b>, comprueba tu cuenta en APV.</p>
            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a> </p>
            
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>`
    });

    console.log( "Mensaje enviado: %s", info.messageId );

};

export default emailRegistro;