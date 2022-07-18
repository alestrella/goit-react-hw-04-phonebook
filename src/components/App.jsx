import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './Box';
import { Heading, MainHeading } from './Headings/Headings.styled';

const LS_KEY = 'contacts';
const savedContact = window.localStorage.getItem(LS_KEY);

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(savedContact) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = ({ contact: { name, number } }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [...contacts, newContact]);
    toast.success('New contact added');
  };

  const checkDuplicateContactName = name => {
    const allNames = contacts.map(contact => contact.name.toLowerCase());

    if (allNames.includes(name.toLowerCase())) {
      toast.error(`${name} is already in contacts`);
      return true;
    }
  };

  const deleteContact = id => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
    toast('Bye... Deleted contact', {
      icon: '😢',
    });
  };

  const handleFilter = e => setFilter(e.currentTarget.value);

  const filterContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box py={5} fontFamily="body" as="main">
      <MainHeading>Phonebook</MainHeading>
      <Box maxWidth="480px" my={0} mx="auto" px={4} borderRadius="middle">
        <Box
          px={4}
          py={5}
          mb={5}
          boxShadow="card"
          borderRadius="normal"
          bg="bgDark"
        >
          <Heading>New contact</Heading>
          <ContactForm
            onSubmit={handleFormSubmit}
            checkDuplicates={checkDuplicateContactName}
          />
        </Box>

        <Box px={5} py={5} borderRadius="normal" bg="bgDark" boxShadow="card">
          <Heading>Contacts</Heading>
          <Filter value={filter} onChange={handleFilter} />
          <ContactList values={filterContacts()} handleDelete={deleteContact} />
        </Box>
        <Toaster
          toastOptions={{
            style: {
              border: '1px solid #00DAC5',
              borderRadius: '10px',
              background: '#121212',
              padding: '16px',
              color: '#00DAC5',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default App;
