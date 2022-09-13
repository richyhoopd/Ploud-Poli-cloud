import Lock from "../Assets/Lock.svg";
import Key from "../Assets/Key.svg";
import Hand from "../Assets/Hand.svg";
import "../Styles/segure.scss";

export default function Segure() {
  return (
    <section className="segure">
      <div className="segure__container">
        <div className="segure__container__item">
          <img src={Hand} alt="" />
          <h4>No las compartas</h4>
          <p>
            Nunca, bajo ninguna circunstancia, solicitamos contraseñas de ningún
            tipo.
          </p>
        </div>
        <div className="segure__container__item">
          <img src={Lock} alt="" />
          <h4>Nosotros la cuidamos</h4>
          <p>
            Tu información no se perderá ni será dañada durante nuestros
            servicios.
          </p>
        </div>
        <div className="segure__container__item">
          <img src={Key} alt="" />
          <h4>Solo te pertenecen a ti</h4>
          <p>
            Tus datos son tuyos, no se comparten con nadie, se mantienen
            privados.
          </p>
        </div>
      </div>
    </section>
  );
}
