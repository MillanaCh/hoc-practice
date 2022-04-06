import { useContext , useState} from "react";
import { contactContext } from "./GeneralContext";
const withComponent = (Component, howManyEl) => {
    return function WithComponent(){
        const { allContacts, dispatch } = useContext(contactContext);
        const howManyElPerPage = howManyEl;
        const howManyPage = Math.ceil(allContacts.length / howManyElPerPage); //2
        const arrayButton = new Array(howManyPage).fill("buttonPage");
        const [pageNow, setPageNow] = useState(0);
        let start = pageNow * howManyElPerPage//0
        let end = (start + howManyElPerPage)//8
        const parcialContact = allContacts.slice(start, end)
        return <Component arrayButton={arrayButton} setPageNow={setPageNow} parcialContact={parcialContact} />
    }
}
export default withComponent