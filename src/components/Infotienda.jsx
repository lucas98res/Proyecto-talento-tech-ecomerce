function Infotienda() {

    return (
        <section style={{ fontSize: "2vw", textAlign: "justify", padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "calibri" }}>
            <h2 style={{ textAlign: "center" }}>Sobre Nosotros</h2>
            <p>
                Bienvenido a nuestra tienda online. Nos especializamos en ofrecer
                productos de alta calidad a precios accesibles. Nuestro objetivo es
                brindarte una experiencia de compra simple, rápida y segura.
            </p>
            <p>
                Ya sea que estés buscando tecnología, ropa, accesorios o más, en
                nuestro Malu-ecomerce vas a encontrar lo que necesitás.
            </p>
            <div>
                <h3 id="contacto" style={{ textAlign: "center" }}>
                    Podes contectarnos en las siguientes direcciones para una atencion mas especifica:
                </h3>
                <div class="datos">
                    <div id="lista_datos">
                        <ul id="correo">
                            <div>
                                Email: lucascabj67@gmail.com
                            </div>
                            <div>
                                Tel.: 11-50611396
                            </div>
                            <div>
                                Direccion: Gonzalez Catan (1759)
                            </div>
                        </ul>
                    </div>
                    <div id="mapa">
                        <dt style={{ textAlign: "center" }}>
                            <iframe
                                title="Ubicación en Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3277.358707168005!2d-58.646798000000004!3d-34.771744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDQ2JzE4LjMiUyA1OMKwMzgnNDguNSJX!5e0!3m2!1ses!2sar!4v1728350199215!5m2!1ses!2sar"
                                width="400"
                                height="300"
                                style={{ border: 3 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </dt>
                        <a href="https://maps.app.goo.gl/rnZv5YmxfcaXwKPv8" style={{ backgroundColor: "ligthgreen", color: "green", alignItems: "center" }}>Ubicacion En Google Maps</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infotienda;