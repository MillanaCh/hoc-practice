import React, { useContext, useState } from "react";
import { contactContext } from "./GeneralContext";
import withComponent from "./withComponent";
import * as actions from "../Reducers/actions";
function Contacts({arrayButton, setPageNow, parcialContact}) {
    const { allContacts, dispatch } = useContext(contactContext);
  return (
    <>
      {parcialContact.map((el) => {
        return (
          <div>
            {el.nameInput} {el.phone}
            <button
              onClick={() =>
                dispatch({ type: actions.DELETECONTACT, payload: el.id })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
      <div>
        {arrayButton.map((page, index) => {
          return <button key={page + index} onClick={() => setPageNow(index)}>{index}</button>;
        })}
      </div>
    </>
  );
}
export default withComponent(Contacts, 5)
