import React, {useState, useContext} from "react";
import { contactContext } from "./GeneralContext";
import * as actions from "../Reducers/actions"
import {v4 as uuidv4} from "uuid"
export default function Form() {
    const {allContacts, dispatch} = useContext(contactContext)
    const [nameInput, setNameInput] = useState("")
    const [phone, setPhone] = useState(0)
  return (
  <>
  <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} placeholder="Write your name"/>
  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Write your phone number"/>
  <button onClick={() => dispatch({type:actions.ADDCONTACT, payload:{id: uuidv4(), nameInput: nameInput, phone: phone}})}>Add Contact</button>
  </>
  )
}
