import React from 'react';
import { NavContainer } from './styles/ContainerStyles.js';

const Container = ({ allDivs }) => {
  return (
    <NavContainer className='container'>
      {allDivs.map((div) => div)}
    </NavContainer>
  )
}

export default Container;