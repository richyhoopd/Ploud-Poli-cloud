import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Styles/creditos.scss";

export default function Creditos() {
  return (
    <>
      <article className="credits">
        <Nav />
        <h2>Créditos</h2>
        <div className="credits__item">
          <h3>Imágenes</h3>
          <p>
            Illustrations by{" "}
            <a
              href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icons 8
            </a>{" "}
            from{" "}
            <a
              href="https://icons8.com/illustrations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouch!
            </a>
          </p>
          <p>
            Illustrations by{" "}
            <a
              href="https://icons8.com/illustrations/author/HxMFjfKZdNq2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rosina Gavrilash
            </a>{" "}
            from{" "}
            <a
              href="https://icons8.com/illustrations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouch!
            </a>
          </p>
          <p>
            Illustrations from{" "}
            <a
              href="https://storytale.io/pack/347"
              target="_blank"
              rel="noopener noreferrer"
            >
              Storytale
            </a>
          </p>
        </div>
        <div className="credits__item">
          <h3>Iconos</h3>
          <p>
            Icons from{" "}
            <a
              href="https://heroicons.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroicons
            </a>
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
