// Componente App

// Import de React Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import de Layout
import AuthLayout     from './layout/AuthLayout';
import RutaProtegida  from './layout/RutaProtegida';

// Import de paginas
import Login                from './paginas/Login';
import Registrar            from './paginas/Registrar';
import OlvidePassword       from './paginas/OlvidePassword';
import ConfirmarCuenta      from './paginas/ConfirmarCuenta';
import NuevoPassword        from './paginas/NuevoPassword';
import AdministrarPacientes from './paginas/AdministrarPacientes';
import CambiarPassword      from './paginas/CambiarPassword';
import EditarPerfil         from './paginas/EditarPerfil';

// Context
import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

function App() {
  // Logica del Componente

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />}/>
              <Route path='registrar' element={ <Registrar />}/>
              <Route path='olvide-password' element={ <OlvidePassword />}/>
              <Route path='olvide-password/:token' element={ <NuevoPassword />}/>
              <Route path='confirmar/:token' element={ <ConfirmarCuenta />}/>
            </Route>

            <Route path='/admin' element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />}/>
              <Route path='perfil' element={<EditarPerfil />}/>
              <Route path='cambiar-password' element={<CambiarPassword />}/>
            </Route>

          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
};

export default App
