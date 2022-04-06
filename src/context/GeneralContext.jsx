import { createContext, useReducer } from "react";
import contactsReducer from "../Reducers/ContactsReducer";

export const contactContext = createContext([]);

export const GeneralContext = ({ children }) => {
    const [allContacts, dispatch] = useReducer(contactsReducer, [])
    const data = {
        allContacts: allContacts,
        dispatch: dispatch
    }
  return <contactContext.Provider value={data}>{children}</contactContext.Provider>;
};
