import Logo from "../Assets/Logo-negro.svg";
import Caca from "../Assets/screencrack.png";
import "../Styles/ticket.scss";

export default function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <div className="ticket__header__logo">
          <img src={Logo} alt="" />
          <p>9:50 am - 25/08/2022</p>
        </div>
        <div className="ticket__header__tittle">
          <h2>Ticket de reparación</h2>
          <p>Número 3445802243</p>
        </div>
      </div>
      <div className="ticket__client">
        <h2>Cliente:</h2>
        <div className="ticket__client__info">
          <p>Miguel Alejandro Hernandez Camarena</p>
          <p>Francisco villa #842</p>
          <p>Cel. 33 2398 2284</p>
        </div>
      </div>
      <div className="ticket__client">
        <h2>Centro de reparación: </h2>
        <div className="ticket__client__info">
          <p>Zodiaco Mobile</p>
          <p>Avenida perro del mal</p>
          <p>Cel. 33 1122 3344</p>
        </div>
      </div>
      <div className="ticket__device poronga">
        <h2>Dispositivo a reparar</h2>
        <p>Celular Xiaomi Mi A2 lite</p>
      </div>
      <div className="ticket__device">
        <h2>Serie</h2>
        <p>La neta no se</p>
      </div>
      <div className="ticket__device">
        <h2>Falla</h2>
        <p>Lo cago un perro y luego alguien le tiro chocomilk</p>
      </div>
      <div className="ticket__photo">
        <h2>
          Evidencia fotográfica del estado físico del dispositivo previo al
          servicio:
        </h2>
        <div className="ticket__photo-imgs">
          <img src={Caca} alt="" />
          <img src={Caca} alt="" />
        </div>
      </div>
      <div className="ticket__service">
        <h2>Servicio a realizar</h2>
        <p>Cambio de pantalla y de dueño por pendejo</p>
      </div>
      <div className="ticket__pay">
        <div className="ticket__pay-total">
          <h2>Costo</h2>
          <span>$1500</span>
        </div>
        <div className="ticket__pay-total">
          <h2>Método de Pago:</h2>
          <span>Miguel Hernandez BBVA **3392</span>
        </div>
      </div>
      <div className="ticket__terms">
        <h2>Póliza de Garantía de servicio.</h2>
        <p>
          Su dispositivo estara listo en menos de 24 horas, se entregara el 25
          de agosto.
        </p>
        <h2>Términos de servicio.</h2>
        <p>
          Este servicio está garantizado por Chipsi que para efectos legales
          será denominado el distribuidor por un lapso de 6 meses, si es
          utilizado adecuadamente de acuerdo a su tipo. Para hacer válida la
          garantía es necesario presentar el ticket o nota de compra, llamar al
          centro de atención de Chipsi para agendar su recolección, (sin tratar
          de repararlo uno mismo y sin abrir los sellos de garantía), para que
          su dispositivo pueda ser revisado. Nulidad de la garantía: La garantía
          seguirá siendo válida dentro de los primeros 6 meses de la compra del
          servicio, siempre y cuando este no haya sido modificado, abierto,
          desarmado o intervenido en ninguno de sus componentes.
        </p>
        <p>
          Asi mismo,{" "}
          <b>
            la garantía se anulará en caso de que se infrinja uno de los
            siguientes aplicativos:
          </b>
        </p>
        <p>
          -El dispositivo solamente será entregado a su dueño sin ninguna
          excepción.
        </p>
        <p>
          -El dispositivo no fue intervenido a nivel técnico por centros de
          reparación ajenos a los certificados por medio de Chipsi.
        </p>
        <p>
          -El dispositivo no fue intervenido a nivel técnico por el usuario.
        </p>
        <p>
          -El dispositivo no presenta daño físico causado por el cliente o
          terceros externos a Chipsi
          <p>
            -Daño por agentes externos, responsabilidad del usuario (líquidos,
            fuego, ácidos y/u otras sustancias).
          </p>
        </p>
      </div>
      <div className="ticket__contact">
        <h2>Contacto:</h2>
        <span>Centro de atención Chipsi: 33 2537 8780</span>
      </div>
      <div className="ticket__footer">
        <img src={Logo} alt="" />
        <span>chipsi<span>.</span>mx</span>
      </div>
    </div>
  );
}
