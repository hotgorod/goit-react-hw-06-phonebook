import { useEffect, useState } from 'react';
import React from 'react';
// import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import ContactForm from './ContactForm/ContactForm.';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

const LS_KONTACT_KEY = 'contact_detais';

export const App = () => {
  
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const addContactToPhonebook = (contactName, contactNumber) => {
    const isDuplicate = contacts.some(
      contact => contact.contactName === contactName
    );

    if (isDuplicate) {
      alert('The contact already exist');
      return; 
    }
    dispatch(addContact({contactName, contactNumber}));
  }
  // useEffect(() => {
  //   const jsonContacts = JSON.stringify(contacts);
  //   localStorage.setItem(LS_KONTACT_KEY, jsonContacts);
  // }, [contacts]);


  // const changeFilter = event => {
    
  //   setFilter(event.currentTarget.value);
  // };

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.contactName.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const filteredContacts = getFilteredContacts();

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContactCallback={addContactToPhonebook} />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
};


