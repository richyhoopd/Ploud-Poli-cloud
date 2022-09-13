import ItemText from "../Components/ItemText";
import DatosJson from "../Datos.json";

export default function Cookies() {
  const text = DatosJson;

  return (
    <>
      <ItemText
        tittle="Uso de datos"
        text={text}
      />
    </>
  );
}
