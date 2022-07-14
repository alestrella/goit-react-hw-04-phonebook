import IconButton from 'components/IconButton';
import { Item, Name, Number } from './ContactItem.styled';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

export const ContactItem = ({ name, number, handleDelete }) => {
  return (
    <Item>
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <IconButton onClick={handleDelete}>
        <DeleteIcon width="25" fill="currentColor" />
      </IconButton>
    </Item>
  );
};
