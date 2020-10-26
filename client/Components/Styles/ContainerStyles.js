import styled from 'styled-components';

const NavContainer = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  right: 0;
  top: 200px;
  bottom: 0;
  left: 0;
  opacity: ${({ opacity }) => opacity};
` 
const CircleDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  display: inline-block;
  margin-left: 5px;
  background-color: ${({ color }) => color};
`
const Text = styled.div`
  font-size: 16px;
  letter-spacing: 3px;
  color: ${({ color }) => color};
  margin: 0;
  position: absolute;
`
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: relative;
  top: 50%
`;

export {
  NavContainer,
  CircleDiv,
  Text,
  TextContainer,
}