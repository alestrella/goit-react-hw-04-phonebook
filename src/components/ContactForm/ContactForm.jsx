import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Label, Field } from './ContactForm.styled';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...INITIAL_VALUES };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    checkDuplicates: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onSubmit, checkDuplicates } = this.props;
    const { name } = this.state;
    e.preventDefault();

    if (checkDuplicates(name)) {
      return;
    }

    onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_VALUES });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Field
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

export default ContactForm;
