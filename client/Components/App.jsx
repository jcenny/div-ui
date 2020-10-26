import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Form from './Form.jsx';
import Container from './Container.jsx';

import { GlobalStyle, NotificationText } from './Styles/AppStyles.js';

function App() {
  const [divCount, setDivCount] = useState(0);  
  const [allDivStatus, setAllDivStatus] = useState([]); 
  const [showText, setShowText] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [opacity, setOpactity] = useState(1);

  const createCircleDivs = (divCount) => {
    const status = new Array(Number(divCount)).fill(false);
    setAllDivStatus(status);
    setDivCount(Number(divCount));
  }

  const handleCircleClick = (e) => {
    const num = e.target.id;
    const color = e.target.attributes.color.nodeValue;
    // set to correct color and text description
    let newStatus = allDivStatus;
    if (color === 'black') {
      newStatus[num - 1] = true;
      setCurrentText(`TURNING ON ${num}`)
    } else {
      newStatus[num - 1] = false;
      setCurrentText(`TURNING OFF ${num}`);
    }
    setAllDivStatus(newStatus);
    // turn on text and style transition
    setOpactity(0.3)
    setShowText(true);
  }

  const handleHover = (e) => {
    // const num = e.target.id;
    // let newStatus = allDivStatus;
    // const current = newStatus[num - 1][1];
    // newStatus[num - 1][1] = !current;
    // setAllDivStatus(newStatus);
  }

  return (
    <div>
      <GlobalStyle />
      <Form createCircleDivs={createCircleDivs} />

      <CSSTransition 
        in={showText}
        timeout={350}
        unmountOnExit
        onEntered={() => setShowText(false)}
        onExited={() => setOpactity(1)}>
        <NotificationText>{currentText}</NotificationText>
      </CSSTransition>

      <Container 
        opacity={opacity} 
        divCount={divCount} 
        allDivStatus={allDivStatus} 
        handleHover={handleHover}
        handleCircleClick={handleCircleClick} 
      />
    </div>
  )
}

export default App;