import {
  StyledContactList,
  StyledItem,
  StyledButton,
  StyledWrapper,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <StyledContactList>
      {visibleContacts.map(({ id, name, phone }, index) => (
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
