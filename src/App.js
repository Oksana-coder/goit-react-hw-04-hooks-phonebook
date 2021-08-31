import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList'
import Container from './components/Container';
import './App.scss';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ??
    [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  const addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    
    const newContact = contact.name.toLowerCase();
    const existingContactsNames = contacts.map(contact => contact.name.toLowerCase());

    if (existingContactsNames.includes(newContact)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Container>
    )
  }