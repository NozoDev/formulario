import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [formDate, setFormDate] = useState({
    nombre: "",
    email: "",
    password: "",
    aceptoTerminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormDate({ ...formDate, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormDate({
      nombre: "",
      email: "",
      password: "",
      aceptoTerminos: false,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successful registration",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <main className="main__form">
      <section className="section__form">
        <form className="section__welcome" onSubmit={handleSubmit}>
          <section className="section__contenedor">
            <section className="section__info">
              <h1 className="text">Welcome</h1>
              <p>Welcome to Dashboard</p>
              <a href="https://www.google.com/" target="_blank">
                <i className="bx bxl-google-plus-circle">
                  Continue With Google
                </i>
              </a>

              <p>-----or-----</p>
            </section>

            <label className="label__description" htmlFor="Nombre">
              Nombre
            </label>
            <input
              className="btn__input"
              type="text"
              id="nombre"
              name="nombre"
              value={formDate.nombre}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <label className="label__description" htmlFor="Nombre">
              Email
            </label>
            <input
              className="btn__input"
              type="email"
              id="email"
              name="email"
              value={formDate.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <label className="label__description" htmlFor="Nombre">
              Password
            </label>
            <input
              className="btn__input"
              type="password"
              name="password"
              id="password"
              value={formDate.password}
              onChange={handleChange}
            />
            <br />
            <br />
            <div className="check__box">
              <label htmlFor="aceptoTerminos">Acepto los terminos</label>
              <input
                className="btn__input"
                type="checkbox"
                id="aceptoTerminos"
                required
              />
            </div>
            <br />
            <br />
            <button className="btn__btn" type="submit">
              Register😎
            </button>
          </section>
        </form>

        <article className="section__video">
          <video autoPlay loop muted playsInline className="videolist">
            <source src="./images/video2.mp4" type="video/mp4"></source>
          </video>
        </article>
      </section>
    </main>
  );
};

export default Form;
