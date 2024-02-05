import React from "react";
import axios from "axios";
import { useState } from "react";
import "../estilos/Contacto.css";

const Contacto = (props) => {
  const initialForm = {
    nombre: "",
    email: "",
    mensaje: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(true);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };
  return (
    <body className="bcontactos">
      <div>
        <main>
          <div>
            <form
              className="formulario"
              action="/contacto"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="container">
                <h2 className="titulo">Contactanos</h2>
                <input
                  type="text"
                  className="input"
                  placeholder="nombre:"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="input"
                  placeholder="email:"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  className="input input-text"
                  placeholder="mensaje:"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
                <input className="boton_enviar" type="submit" value="Enviar" />
              </div>
            </form>
            {sending ? <p style={{ color: "white" }}>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
          </div>
        </main>
      </div>
    </body>
  );
};

export default Contacto;
