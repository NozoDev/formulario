import React from "react";

const Form = () => {
  return (
    <main className="main__form">
      <section className="section__form">
        <form className="section__welcome">
          <section className="section__contenedor">
            <section className="section__info">
              <h1 className="text">Welcome</h1>
              <p>Welcome to Dashboard</p>
              <a href="https://www.google.com/" target="_blank">
                Continue With Google
              </a>

              <p>-----or-----</p>
            </section>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Name:"
              required
            />
            <br />
            <br />
            <input type="email" id="email" placeholder="Email:" name="email" />
            <br />
            <br />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password:"
            />
            <br />
            <br />
            <div>
              <label htmlFor="aceptoTerminos">Acepto los terminos</label>
              <input
                type="checkbox"
                id="aceptoTerminos"
                name="aceptoTerminos"
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
            <source src="/public/images/video2.mp4" type="video/mp4"></source>
          </video>
        </article>
      </section>
    </main>
  );
};

export default Form;
