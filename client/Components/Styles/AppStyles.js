import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }
`;

const NotificationText = styled.h2`
  text-align: center;
  vertical-align: middle;
  position: fixed;
  left: 40%;
  top: 40%;
`

export {
  GlobalStyle, 
  NotificationText,
}