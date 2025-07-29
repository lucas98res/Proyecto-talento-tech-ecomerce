import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import Login from './components/Login';
import Contacto from './components/Contacto'
import Infotienda from './components/Infotienda';
import { crearUsuario, loginEmailPass } from './auth/firebase';
import Admin from './components/Admin';
import FormularioEdicion from './components/FormularioEdicion';
import FormularioProductoFirebase from './components/FormularioProductoFirebase';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  const [usuarioLogueado, setUsuarioLogeado] = useState(false)
  const [adminLogeado, setAdminLogeado] = useState(false)
  const [count, setCount] = useState(0)
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/*<Route path="/login" element={<Login setLogueadoAdmin={manejarAdmin} setLogueadoUser={manejarUsuario} user={usuarioLogueado} admin={adminLogueado}/>}/>*/}
          <Route path="/" element={<Home />} />
          <Route path="/Infotienda" element={<Infotienda />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Productos" element={<ProductosContainer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="/admin/agregarProductos" element={<FormularioProductoFirebase />} />
          <Route path="/admin/editarProducto/:id" element={<FormularioEdicion />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
