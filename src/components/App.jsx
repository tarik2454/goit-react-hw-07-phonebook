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
import { LineWave } from 'react-loader-spinner';
import { selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

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

            {isLoading ? (
              <LineWave
                height="100"
                width="100"
                color="#437aa5"
                ariaLabel="line-wave"
                textAling="center"
                wrapperStyle={{ justifyContent: 'center', marginTop: '30px' }}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            ) : (
              <ContactList />
            )}
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
