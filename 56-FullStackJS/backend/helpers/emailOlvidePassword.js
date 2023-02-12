// Import de Nodemailer
import nodemailer from "nodemailer";

const emailOlvidePassword = async ( datos ) => {

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
        from: 'APV - Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Restablece tu Password',
        text: 'Restablece tu Password',
        html: `<p>Hola: <b>${nombre}</b>, has solicitado restablecer tu password.</p>

            <p>Haz click en el siguiente enlace para generar un nuevo password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Password</a> </p>
            
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje.</p>`
    });

    console.log( "Mensaje enviado: %s", info.messageId );

};

export default emailOlvidePassword;