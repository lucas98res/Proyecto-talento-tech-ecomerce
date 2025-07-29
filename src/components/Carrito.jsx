import { useContext, useEffect, useState } from "react"
import "../styles/Carrito.css"
import CarritoCard from "./CarritoCard"
import { Navigate } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext.jsx"
import { useAuthContext } from "../context/AuthContext.jsx"

export default Carrito
function Carrito() {
    const { user } = useAuthContext();
    const { productosCarrito, vaciarCarrito, borrarCarrito } = useContext(CarritoContext);
    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    )

    function funcionDisparadoraVaciar() {
        vaciarCarrito()
    }

    function funcionDisparadoraBorrar(id) {
        borrarCarrito(id)
    }

    if (!user) {
        return (<Navigate to={"/login"} replace />)
    }

    return (
        <div className="carritoContenedor">
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <>
                    <CarritoCard producto={producto} funcionDisparadora={funcionDisparadoraBorrar} />
                </>
            )) : <p>Carrito vacio</p>}
            {total > 0 ?
                <>
                    <span>Total a pagar: $ {total.toFixed(2)} </span>
                    <button onClick={funcionDisparadoraVaciar}>Vaciar lista</button>
                </>
                : <></>}
        </div>
    )
}
