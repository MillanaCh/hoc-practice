import {useState, useContext} from "react"
import {contactContext} from "./GeneralContext"

const withComponent = (Component, howManyEl) => {
    return function WithComponent(){
        const {allContacts, dispatch} = useContext(contactContext)
        //how many element in every page
        let howManyElPerPage = howManyEl//5
        let howManyPage = Math.ceil(allContacts.length/howManyElPerPage)//if contacts 10 will 2 page
        const arrayBtn = new Array(howManyPage).fill("btnPage")
        const [pageNow, setPageNow] = useState(0)
        let start = pageNow * howManyElPerPage
        let end  = (start + howManyElPerPage)
        const pagination = allContacts.slice(start, end)
        return (
            <Component pagination={pagination} arrayBtn={arrayBtn} setPageNow={setPageNow}/>
        )
    }
}
export default withComponent
