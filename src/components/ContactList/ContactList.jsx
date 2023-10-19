import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import React from 'react';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlice';


const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  return (
    <ul className={css.list}>
      {contacts.map(({ key, contactName, contactNumber }) => (
        <li className={css.contactListItem} key={key}>
          <p className={css.contactListItemText}>
            {contactName}: {contactNumber}
          </p>
          <button
            className={css.deleteButton}
            type="button"
            onClick={()=>dispatch(deleteContact({key}))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
