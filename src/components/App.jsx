import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  GlobalStyledMain,
  GlobalStyledSection,
  GlobalStyledContainer,
  GlobalStyledTitle,
  StyledSmollTitle,
} from 'styles/GlobalStyle';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <GlobalStyledMain>
      <GlobalStyledSection>
        <GlobalStyledContainer>
          <StyledWrapper>
            <GlobalStyledTitle>PhoneBook</GlobalStyledTitle>
            <ContactForm />
            <Filter />
            <StyledSmollTitle>Contacts</StyledSmollTitle>

            {isLoading ? <Loader /> : <ContactList />}
          </StyledWrapper>
        </GlobalStyledContainer>
      </GlobalStyledSection>
    </GlobalStyledMain>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.$secondaryBgColor};
  border-radius: ${props => props.theme.$borderRadius};
  box-shadow: ${props => props.theme.$boxShadow};
`;
