import { useState } from "react";
import "../styles/Productos.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducto({ producto }) {
    console.log(producto)
    return (
        <Card>
            <Card.Img variant="top" src={producto.imagen} style={{ maxHeight: "150px", borderRadius: "4vw", objectFit: "cover", padding: "2vw", }} />
            <Card.Body>
                <Card.Title style={{ font: "arial", fontSize: "1.5vw", color: "white", padding: "0.5rem" }}>{producto.name}</Card.Title>
                <Link to={"/productos/" + producto.id}><Button variant="primary" style={{ borderRadius: "2vw", fontSize: "1.2vw", backgroundColor: "lightgreen" }}>Mas detalles</Button></Link>
            </Card.Body>
        </Card >

    )
}

export default CardProducto