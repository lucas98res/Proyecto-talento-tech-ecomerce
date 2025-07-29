import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import FormularioProductoFirebase from "./FormularioProductoFirebase";

export default function Admin() {
    const { admin } = useAuthContext();

    if (!admin) {
        return (
            <Navigate to="/login" replace />
        )
    }
    return (
        <div>
            <div>
                <p>Iniciaste sesión como administrador/a. Desde aquí podés gestionar y monitorear toda la actividad de la tienda. Te dejamos algunas indicaciones básicas:</p>
            </div>
            <div>
                <ul>
                    <il>Visualizar todos los productos</il>
                    <il>Agregar y modificar articulos</il>
                    <il>Atender consultas</il>
                </ul>
                <ul>
                    <il>Recordar cerrar sesion si compartis el equipo o estas en un dispositivo publico.</il>
                </ul>
            </div>
        </div>
    )
}
