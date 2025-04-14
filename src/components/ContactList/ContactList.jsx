import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

import css from './ContactList.module.css';

import Contact from '../Contact/Contact';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map(contactData => {
        return (
          <li key={contactData.id}>
            <Contact contact={contactData} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
