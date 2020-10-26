import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }
`;

const CircleDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: inline-block;
  margin-left: 5px;
`

const NotificationText = styled.h2`
  text-align: center;
  vertical-align: middle;
  position: fixed;
  left: 40%;
  top: 40%;
`

export {
  GlobalStyle, 
  CircleDiv,
  NotificationText,
}