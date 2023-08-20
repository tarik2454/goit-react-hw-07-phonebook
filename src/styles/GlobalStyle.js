import { createGlobalStyle, styled } from 'styled-components';
import '@csstools/normalize.css';
// import 'normalize.css';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  background-color: ${({ theme }) => theme.colors.$primiryBgColor};
  line-height: 1;
  letter-spacing: 0.02em;
  }
`;

export const GlobalStyledTitle = styled.h1`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.$secondaryTextColor};
  text-align: center;
`;

export const StyledSmollTitle = styled.h2`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.$primiryTextColor};
  font-size: 20px;
  text-align: center;
`;

export const GlobalStyledLink = styled(Link)`
  font-size: 12px;
  color: ${props => props.theme.colors.$primiryTextColor};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.$accentColor};
  }
`;

export const GlobalStyledButton = styled.button`
  max-height: 37px;
  padding: ${props => props.$padding || '10px 15px'};
  margin: ${props => props.$margin || '0'};

  border-radius: ${props => props.theme.$borderRadius};
  color: black;
  background-color: lightblue;

  &:hover,
  &:focus {
    color: white;
    background-color: ${props => props.theme.colors.$accentColor};
  }
`;

export const GlobalStyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GlobalStyledSection = styled.section`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const GlobalStyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  /* max-width: 480px; */
  max-width: 511px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 24px;
  }
`;
