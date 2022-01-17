import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actions";

export const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    const form = e.target;
    e.preventDefault();
    if (contacts.some((contacts) => contacts.name === form.name.value)) {
      alert(`${form.name.value} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === form.number.value)) {
      alert(`${form.number.value} is already in contacts`);
      return;
    }
    dispatch(addContact({ name: form.name.value, number: form.number.value }));
    form.reset();
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={this.setNameAndNumber}
        />
      </label>
      <label>
        {" "}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={this.setNameAndNumber}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

// state = {
//   name: "",
//   number: "",
// };

// submitForm = (e) => {
//   const form = e.target;
//   e.preventDefault();
//   this.props.submitForm(this.state);
//   form.reset();
// };

// setNameAndNumber = (e) => {
//   const { name, value } = e.target;
//   this.setState({ [name]: value });
// };
