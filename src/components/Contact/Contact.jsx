import { FaPhone, FaUser } from 'react-icons/fa6';
// import clsx from 'clsx';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <div className={css.info}>
        <div className={css.infoPart}>
          <FaUser className={css.icon} size={22} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.infoPart}>
          <FaPhone className={css.icon} size={22} />
          <p className={css.text}>{number}</p>
        </div>
      </div>

      <button
        className={css.btn}
        type="button"
        onClick={e => {
          // console.log(id);
          dispatch(deleteContact(id));
          e.target.disabled = true;
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
