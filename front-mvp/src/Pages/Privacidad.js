import ItemText from "../Components/ItemText";
import PrivacidadJson from "../Privacidad.json";

export default function Cookies() {
  const text = PrivacidadJson;

  return (
    <>
      <ItemText tittle="Política de privacidad" text={text} />
    </>
  );
}
