import React from 'react';
import styled from 'styled-components';

import { NavContainer, CircleDiv } from './styles/ContainerStyles.js';

const Container = ({ opacity, divCount, allDivStatus, handleCircleClick }) => {
  const divs = new Array(divCount).fill();

  return (
    <NavContainer opacity={opacity}>
      {divs.map((div, index) => (
        <CircleDiv
        key={`div #:${index + 1}`}
        id={index + 1}
        color={allDivStatus[index] ? 'blue' : 'black'}
        onClick={handleCircleClick}
        />
      ))}
    </NavContainer>
  )
}


export default Container;