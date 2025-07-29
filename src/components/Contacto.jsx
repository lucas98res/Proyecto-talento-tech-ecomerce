import "../styles/contacto.css";
function Contacto() {
    return (
        <div>
            <form action="https://formspree.io/f/mbljyekp" method="POST" >
                <div className="p-4 my-3 border rounded shadow" >
                    <h3 className="mb-3">Formulario de Contacto y sugerencias</h3>
                    <input type="text" name="nombre" className="form-control mb-3" placeholder="Nombre" style={{ textAlign: "center" }} />
                    <textarea type="text" name="mensaje" className="form-control mb-3" placeholder="Mensaje" style={{ textAlign: "center" }} />
                    <input type="email" name="email" className="form-control mb-3" placeholder="Correo Electrónico" style={{ textAlign: "center" }} />
                    <button type="submit" className="btn btn-success w-100" style={{ backgroundColor: "lightgray", borderRadius: "1vw" }}>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Contacto;