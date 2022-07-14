import { nanoid } from 'nanoid';
import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './Box';
import { Heading, MainHeading } from './Headings/Headings.styled';

const LS_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContact = localStorage.getItem(LS_KEY);

    if (savedContact) {
      this.setState({ contacts: JSON.parse(savedContact) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleFormSubmit = contact => {
    this.addContact(contact);
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      // { contacts } - destructurization of prevState
      return { contacts: [...contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(contact => contact.id !== id) };
    });
  };

  checkDuplicateContactName = name => {
    const { contacts } = this.state;
    const allNames = contacts.map(contact => contact.name);

    if (allNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      return true;
    }
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Box
        py={5}
        // height={100}
        fontFamily="body"
        // backgroundImage="linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)"
        as="main"
      >
        <MainHeading>Phonebook</MainHeading>
        <Box
          maxWidth="480px"
          my={0}
          mx="auto"
          px={4}
          // minHeight="400px"
          borderRadius="middle"
        >
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
              onSubmit={this.handleFormSubmit}
              checkDuplicates={this.checkDuplicateContactName}
            />
          </Box>

          <Box px={5} py={5} borderRadius="normal" bg="bgDark" boxShadow="card">
            <Heading>Contacts</Heading>
            <Filter value={filter} onChange={this.handleFilter} />
            <ContactList
              values={filteredContacts}
              handleDelete={this.deleteContact}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
