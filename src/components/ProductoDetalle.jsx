import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { CarritoContext } from "../context/CarritoContext";
import { useAuthContext } from "../context/AuthContext";
import { useProductosContext } from "../context/ProductosContext";
import Producto from "./BotonCompra";
import { Button } from "react-bootstrap";

function ProductoDetalle({ }) {

  const navegar = useNavigate();

  const { admin } = useAuthContext();
  const { agregarAlCarrito } = useContext(CarritoContext);
  const { productoEncontrado, obtenerProducto, eliminarProducto } = useProductosContext();

  const { id } = useParams();
  //const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProducto(id).then(() => {
      setCargando(false);
    }).catch((error) => {
      if (error == "Producto no encontrado") {
        setError("Producto no encontrado")
      }
      if (error == "Hubo un error al obtener el producto.") {
        setError("Hubo un error al obtener el producto.");
      }
      setCargando(false);
    })
  }, [id]);


  function funcionCarrito() {
    if (cantidad < 1) return;

    console.log("Agregar al carrito")
    agregarAlCarrito({ ...productoEncontrado, cantidad });
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
  }

  function dispararEliminar() {
    eliminarProducto(id).then(() => {
      navegar("/productos")
    }).catch((error) => {
      dispararSweetBasico("Hubo un problema al agregar el producto", error, "error", "Cerrar")
    })
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <div className="detalle-container">
      <img className="detalle-imagen" src={productoEncontrado.imagen} alt={productoEncontrado.name} />
      <div className="detalle-info">
        <h2 style={{ fontSize: "3vw", padding: "1vw" }} >{productoEncontrado.name}</h2>
        <p style={{ fontSize: "2vw", padding: "1vw" }}>{productoEncontrado.description}</p>
        <p style={{ fontSize: "2vw", padding: "1vw" }}>{productoEncontrado.price} $</p>
        <div className="detalle-contador">
          <button onClick={restarContador} style={{ fontSize: "2vw", borderRadius: "1vw" }}>-</button>
          <span>{cantidad}</span>
          <button onClick={sumarContador} style={{ fontSize: "2vw", borderRadius: "1vw" }}>+</button>
        </div>
        {admin ? <Link to={"/admin/editarProducto/" + id}> <Button >Editar Producto</Button></Link> : <Button onClick={funcionCarrito} style={{ fontSize: "1.4vw", borderRadius: "3vw", backgroundColor: "lightgreen" }}>Agregar al carrito</Button>}
        {admin ? <button onClick={dispararEliminar} >Eliminar Producto</button> : <></>}
      </div>
    </div >
  );
}

export default ProductoDetalle;
