// import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import {
  Button,
  Label,
  Input,
  FormStyled,
  ErrorText,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "C'mon, name is longer than that")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string().required('Phone is required'),
});

const MaskedInput = ({ field, ...props }) => (
  <NumberFormat
    type="tel"
    {...field}
    {...props}
    format="+38 (###) ###-####"
    mask="_"
    allowEmptyFormatting
  />
);

export const ContactForm = ({ onSubmit, checkDuplicates }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (checkDuplicates(values.name)) {
      return;
    }
    onSubmit({ contact: values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <FormStyled>
        <Label>
          Name
          <Input type="text" name="name" placeholder="Jonh Doe" />
          <ErrorText name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input name="number" component={MaskedInput} />
          <ErrorText name="number" component="div" />
        </Label>
        <Button type="submit">Add</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  checkDuplicates: PropTypes.func.isRequired,
};
