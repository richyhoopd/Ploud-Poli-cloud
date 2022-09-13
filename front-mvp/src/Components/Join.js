import DeliveryImg from "../Assets/Delivery-img.png";
import WorkshopImg from "../Assets/Workshop-img.png";

export default function Join() {
  return (
    <section className="home__join">
      <h2>Únete a Chipsi</h2>
      <div className="home__join__items">
        <div className="home__join__items-item">
          <img src={DeliveryImg} alt="delivery" />
          <div className="home__join__items-item-text">
            <h4>Envíos en tan solo 24 h</h4>
            <p>
              Tu dispositivo reparado hasta la palma de tu mano, garantizado y
              asegurado en tiempo record.
            </p>
            <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20como%20reparar%20con%20chipsi.">
              Conocer más
            </a>
          </div>
        </div>
        <div className="home__join__items-item">
          <img src={WorkshopImg} alt="Taller" />
          <div className="home__join__items-item-text">
            <h4>Talleres certificados</h4>
            <p>
              No te preocupes por las informalidades, todos nuestros afiliados están previamente certificados.
            </p>
            <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20como%20reparar%20con%20chipsi.">
              Conocer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
