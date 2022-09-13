import ItemText from "../Components/ItemText";
import FinanzasJson from "../Finanzas.json";

export default function Cookies() {
    const text = FinanzasJson;

    return(
        <>
            <ItemText tittle="Finanzas" text={text}/>
        </>
    )
}