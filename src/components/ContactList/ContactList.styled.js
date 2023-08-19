import { styled } from 'styled-components';

export const StyledContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  display: block;
  min-width: 70px;
  padding: 5px;
  font-size: 15px;
  border-radius: 4px;
  color: ${props => props.theme.colors.$white};
  background-color: ${props => props.theme.colors.$accentColor};
`;
