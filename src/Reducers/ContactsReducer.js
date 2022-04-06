import * as actions from "./actions"
const contactsReducer = (state, action) => {
    console.log(state)
    switch(action.type){
        case actions.ADDCONTACT:
            return [...state, action.payload]
        case actions.DELETECONTACT:
            return state.filter(el => el.id != action.payload)
        default:
            return state
    }
}
export default contactsReducer