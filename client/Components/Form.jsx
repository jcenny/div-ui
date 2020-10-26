import React, { useState } from 'react';

import { NavForm, Button } from './Styles/FormStyles.js';

const Form = ({ createCircleDivs }) => {
  const [divCount, setDivCount] = useState('');

  const handleTextChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setDivCount(value);
  }

  const handleClick = (e) => {
    e.preventDefault();
    createCircleDivs(divCount);
    setDivCount('');
  }

  return (
    <NavForm>
      <form>
        <input name='divCount' type='number' min='0' value={divCount} onChange={handleTextChange} placeholder='enter number'></input>
        <Button onClick={handleClick}>CREATE</Button>
      </form>
    </NavForm>
  )
}

export default Form;
