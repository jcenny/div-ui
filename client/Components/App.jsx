import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Form from './Form.jsx';
import Container from './Container.jsx';
import { GlobalStyle, CircleDiv, NotificationText } from './Styles/AppStyles.js';

function App() {
  const [allDivs, setAllDivs] = useState([]);
  const [showText, setShowText] = useState(false);
  const [currentText, setCurrentText] = useState('');

  const createCircleDivs = (divCount) => {
    let allDivs = [];
    if (divCount) {
      for (let i = 1; i <= divCount; i++) {
        allDivs.push(
          <CircleDiv
            key={`div #:${i}`}
            id={i}
            style={{ backgroundColor: 'black' }}
            onClick={handleCircleClick}
         />
        )
      }
    }
    setAllDivs(allDivs);
  }

  const handleCircleClick = (e) => {
    e.preventDefault();
    const num = e.target.id;
    const color = e.target.style.backgroundColor;
    // set to correct color and text description
    if (color === 'black') {
      e.target.style.backgroundColor = 'blue';
      setCurrentText(`TURNING ON ${num}`)
    } else {
      e.target.style.backgroundColor = 'black'
      setCurrentText(`TURNING OFF ${num}`);
    }
    // turn on text and style transition
    let container = document.getElementsByClassName('container')[0];
    container.style.opacity = 0.3;
    setShowText(true);
  }

  const handleExitTransition = () => {
    let container = document.getElementsByClassName('container')[0];
    container.style.opacity = 1;
  }

  return (
    <div>
      <GlobalStyle />
      <Form createCircleDivs={createCircleDivs} />

      <CSSTransition classNames='fade'
        in={showText}
        timeout={350}
        unmountOnExit
        onEntered={() => setShowText(false)}
        onExited={handleExitTransition}>
        <NotificationText className='notification'>{currentText}</NotificationText>
      </CSSTransition>

      <Container allDivs={allDivs} />
    </div>
  )
}

export default App;