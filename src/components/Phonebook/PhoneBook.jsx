import s from './Phonebook.module.css';

import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSliceApi';
import { useSelector } from 'react-redux';

export const PhoneBook = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterQuery = useSelector(state => state.filter.filter);

  let filteredContacts = null;
  filterQuery === ''
    ? (filteredContacts = contacts)
    : (filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterQuery.toLowerCase())
      ));

  return (
    <ul className={s.contactsList}>
      {filteredContacts?.map(({ name, number, id }) => {
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
