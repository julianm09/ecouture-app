import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../public/color';

const ButtonUI = styled.button`

width: 300px;
height: 50px;
font-weight: 700;
color: white;
border: 1px solid ${color.blue};
transition: 0.5s cubic-bezier(0,.1,.1,2);
cursor: pointer;

&:hover{
  background: white;
  color: ${color.blue};
  filter: drop-shadow(1px 1px 10px white);
  transform:scale(1.1)
}

&:focus{
  outline: none;
}
`

export const Button = ({ label = "hey" }) => {

  const [click, setClick] = useState(false)
  const [hover, setHover] = useState(false)

  return (

    <>

      <ButtonUI
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
          setClick(false)
        }}
        onClick={() => {
          setClick(true)
        }}
        style={{
          transform: click ? 'scale(0.9)' : hover ? 'scale(1.1)' : 'scale(1.0)',
          border: click ? '1px solid white' : hover ? '1px solid white' : '1px solid white',
          background: click ? 'white' : hover ? 'white' : color.blue,
        }} type="button">
        {label}
      </ButtonUI>

    </>
  );
};

