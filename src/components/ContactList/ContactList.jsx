import {
  StyledContactList,
  StyledItem,
  StyledButton,
  StyledWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <StyledContactList>
      {filteredContacts.map(({ id, name, phone }, index) => (
        <StyledItem key={id}>
          <span>
            {index + 1}. {name}:
          </span>
          <StyledWrapper>
            <span>{phone}</span>
            <StyledButton
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </StyledButton>
          </StyledWrapper>
        </StyledItem>
      ))}
    </StyledContactList>
  );
};
