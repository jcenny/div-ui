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

export {
  NavContainer,
  CircleDiv,
}