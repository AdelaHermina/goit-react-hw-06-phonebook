import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'; // Importă și `persistor`

import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import styles from './Phonebook/Contact.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Folosește `persistor` aici */}
        <div className={styles.App}>
          <h1>Phonebook</h1>
          <ContactForm />
          <Filter />
          <h2>Contacts</h2>
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
