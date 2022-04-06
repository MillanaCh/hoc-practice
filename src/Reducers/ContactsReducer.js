import {useReducer} from "react"
import * as actions from "./actions"

const contactReducer = (state, action) => {
    switch (action.type) {
        case actions.ADDCONTACT:
            return [...state, action.payload]  
        case actions.DELETECONTACT:
            return state.filter(el => el.id != action.payload)
        default:
            return state
    }
}
export default contactReducer

