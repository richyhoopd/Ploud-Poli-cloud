import ItemText from "../Components/ItemText";
import TerminosJson from "../Terminos.json";

export default function Terminos() {
    const text = TerminosJson;

    return(
        <>
            <ItemText tittle="Términos y condiciones" text={text}/>
        </>
    )
}