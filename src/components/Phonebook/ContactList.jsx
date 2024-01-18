import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice'; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  // Filtrarea contactelor
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
