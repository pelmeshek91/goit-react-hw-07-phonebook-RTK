import { filteredContacts } from 'redux/contactsSelectors';
import s from './Phonebook.module.css';

import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSliceApi';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const PhoneBook = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.contacts.filter);
  // useEffect(() => {
  //   if (filter === '') return contacts;
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }, [contacts, filter]);

  return (
    <ul className={s.contactsList}>
      {contacts?.map(({ name, number, id }) => {
        return (
          <li className={s.contactsItem} key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
