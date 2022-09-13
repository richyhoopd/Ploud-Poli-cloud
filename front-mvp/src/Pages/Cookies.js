import ItemText from "../Components/ItemText";
import CookiesJson from "../Cookies.json";

export default function Cookies() {
    const text = CookiesJson;

    return(
        <>
            <ItemText tittle="Cookies" text={text}/>
        </>
    )
}