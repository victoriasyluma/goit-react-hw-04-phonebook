import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = (submitEvent) => {
    submitEvent.preventDefault();

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  const whenContactFormChange = (event) => {
    const { name: propName, value } = event.target;

    if (propName === 'name') {
      setName(value);

      return;
    }

    if (propName === 'number') {
      setNumber(value);

      return;
    }
  };

  return (
    <form onSubmit={handleAddContact} className={styles.form}>
      <h1>Phonebook</h1>
      <label>
        Name:
        <input
          value={name}
          onChange={whenContactFormChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number:
        <input
          value={number}
          onChange={whenContactFormChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
