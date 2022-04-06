import React, { useContext } from "react";
import { contactContext } from "./GeneralContext";
import * as actions from "../Reducers/actions";
import withComponent from "../context/withComponent"
function Contacts({pagination, arrayBtn, setPageNow}) {
  const { allContacts, dispatch } = useContext(contactContext);
  return (
    <>
      {pagination.map((el) => {
        return (
          <div className="eachContacts" key={el.id}>
            {el.nameValue} {el.number}
            <button className="deleteBtn" onClick={() => dispatch({type: actions.DELETECONTACT, payload: el.id})}>Delete</button>
          </div>
        );
      })}
      <div>
        {arrayBtn.map((el, index) => {
          return <button className="btnPage" onClick={() => setPageNow(index)} key={index+el}>{index+1}</button>
        })}
      </div>
    </>
  );
}
export default withComponent(Contacts, 5)
