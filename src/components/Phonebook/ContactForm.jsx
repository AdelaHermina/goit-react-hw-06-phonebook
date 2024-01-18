import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { saveContact, } from '../contactsSlice';


const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(saveContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
