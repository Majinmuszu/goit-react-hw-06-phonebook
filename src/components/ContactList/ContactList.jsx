import React from "react";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        <Contact contacts={contacts} deleteContact={deleteContact} />
      </ul>
    </div>
  );
};
