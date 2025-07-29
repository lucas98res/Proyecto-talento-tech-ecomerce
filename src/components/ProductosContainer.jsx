import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import { useProductosContext } from "../context/ProductosContext"

function ProductosContainer({ }) {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    {
        useEffect(() => {
            fetch('https://683264bbc3f2222a8cb22f0d.mockapi.io/Pre1/Articulos/')
                .then((respuesta) =>
                    respuesta.json()
                )
                .then((datos) => {
                    console.log(datos)
                    setProductos(datos)
                    setCargando(false);
                })
                .catch((error) => {
                    console.log("Error", error)
                    setError('Hubo un problema al cargar los productos.');
                    setCargando(false);
                });
        }, []);
    }

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <div className="productos-conteiner">
                {productos.map((producto) => (
                    <Card
                        producto={producto}
                    />
                ))}
            </div>
        )
    }


}
export default ProductosContainer

