import React, {useContext, useState} from 'react'
import {contactContext} from "./GeneralContext"
import * as actions from "../Reducers/actions"
import {v4 as uuidv4} from "uuid"
function Form() {
  const {allContacts, dispatch} = useContext(contactContext)
  const [nameValue, setNameValue] = useState("")
  const [number, setNumber] = useState("")
  return (
    <>
    <h3>My Contact List</h3>
    <input  className="input" value={nameValue} placeholder='write your name' onChange={(e) => setNameValue(e.target.value)}/>
    <input  className="input" value={number} placeholder='write your number' onChange={(e) => setNumber(e.target.value)}/>
    <button className="btn" onClick={() => dispatch({type:actions.ADDCONTACT, payload:{id: uuidv4(), nameValue:nameValue, number: number}})}>Add Contact</button>
    </>
  )
}
export default Form



