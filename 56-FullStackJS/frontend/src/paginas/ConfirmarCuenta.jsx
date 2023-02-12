// rafce para crear la estructura del componente

// import React from 'react' ya no es necesario
import { useEffect, useState } from 'react';
// Import de un Hook de React
import { useParams, Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

const ConfirmarCuenta = () => {

  // Uso de useState
  const [ cuentaConfirmada, setCuentaConfirmada ] = useState( false );
  const [ cargando, setCargando ] = useState( true );
  const [ alerta, setAlerta ] = useState( {} );

  // Uso de useParams
  const params = useParams();

  const { token } = params;

  useEffect( () => {
    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${token}`;

        // Respuesta de Axios
        const { data } = await clienteAxios( url );

        setCuentaConfirmada( true );
        setAlerta( {
          msg: data.msg
        });

      } catch  ( error ) {
        setAlerta( {
          msg: error.response.data.msg,
          error: true
        });
      }

      setCargando( false );
    }
    confirmarCuenta();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu Cuenta y Comienza a Administrar tus
          <span className="text-black"> Pacientes</span></h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
      { !cargando && <Alerta
          alerta={alerta}
        />}
        { cuentaConfirmada && (
          <Link 
            className="block text-center my-5 text-gray-500"
            to="/">Iniciar Sesión</Link>
        )}
      </div>
    </>
  )
}

export default ConfirmarCuenta