import Box from 'components/Box';
import PropTypes from 'prop-types';
import { Field, Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Box mb={5}>
      <Label>
        Find contacts by name
        <Field value={value} onChange={onChange} placeholder="Enter name" />
      </Label>
    </Box>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
