import { useState } from "react";
const hofComponent = (Component) => {
    return function WithComponent(){
        const [counter, setCounter] = useState(0)
        return (<Component counter={counter} setCounter={setCounter}/>)
    }
}
export default hofComponent
