import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.contact_list}>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {`${name}: ${number}`}
            <button onClick={deleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
