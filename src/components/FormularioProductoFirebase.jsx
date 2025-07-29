import React, { useState } from 'react';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { agregarProducto } from '../assets/requests';
import { useAuthContext } from '../context/Authcontext';
import { Navigate } from 'react-router-dom';

function FormularioProductoFirebase({ }) {

  const { admin } = useAuthContext();

  const [producto, setProducto] = useState({
    name: '',
    price: '',
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return ("El nombre es obligatorio.")
    }
    if (!producto.price || producto.price <= 0) {
      return ("El precio debe ser mayor a 0.")
    }
    else {
      return true
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario()
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
        setProducto({ name: '', price: '', description: '', imagen: "" });
      }).catch((error) => {
        dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
      })
    } else {
      dispararSweetBasico("Error en la carga de producto", validarForm, "error", "Cerrar")
    }
  }

  if (!admin) {
    return (
      <Navigate to="/login" replace />
    )
  }

  return (
    <form onSubmit={handleSubmit2}>
      <h2>Agregar Producto</h2>
      <div>
        <label>Nombre del producto:</label>
        <input
          type="text" name="name" value={producto.name} onChange={handleChange} required />
      </div>
      <div>
        <label>URL de la Imagen "Solo JPG o PNG"</label>
        <input
          type="text" name="imagen" value={producto.imagen} onChange={handleChange} required />
      </div>
      <div>
        <label>Precio + "IVA":</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} required
          min="0" />
      </div>
      <div>
        <label>Descripción del producto:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormularioProductoFirebase;
