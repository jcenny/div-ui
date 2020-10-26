import React from 'react';

import { NavContainer, CircleDiv, Text, TextContainer } from './styles/ContainerStyles.js';

const Container = ({ opacity, divCount, allDivStatus, handleHover, handleCircleClick }) => {
  const divs = new Array(divCount).fill();
  return (
    <NavContainer opacity={opacity}>
      {divs.map((div, index) => (
        <CircleDiv
        key={`div #:${index + 1}`}
        id={index + 1}
        color={allDivStatus[index] ? 'blue' : 'black'}
        onClick={handleCircleClick}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        > 
          {/* <TextContainer><Text color={allDivStatus[index] ? 'white' : 'black'}>{index + 1}</Text></TextContainer> */}
        </CircleDiv>
      ))}
    </NavContainer>
  )
}


export default Container;