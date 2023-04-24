import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

const CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem(CONTACTS_KEY)?.length) {
      return JSON.parse(localStorage.getItem(CONTACTS_KEY));
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const doesContactExists = contacts.some(({ name }) => {
      const nameSanitized = name.toLocaleLowerCase().trim();
      const newContactNameSanitized = contact.name.toLocaleLowerCase().trim();

      return nameSanitized === newContactNameSanitized;
    });

    if (doesContactExists) {
      alert(`${contact.name} is already in contact`);

      return;
    }

    const id = nanoid();

    setContacts((state) => {
      return [...state, { ...contact, id }];
    });
  };

  const updateFilter = (event) => {
    setFilter(event.target.value);
  };

  const deleteContact = (contactId) => {
    return () => {
      setContacts((state) => {
        return state.filter(({ id }) => id !== contactId);
      });
    };
  };

  const filteredContacts = contacts.filter(({ name }) => {
    const filterSanitized = filter.toLocaleLowerCase().trim();
    const nameSanitized = name.toLocaleLowerCase().trim();

    return nameSanitized.includes(filterSanitized);
  });

  return (
    <div>
      <ContactForm addContact={addContact} />

      <Filter filter={filter} updateFilter={updateFilter} />

      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
