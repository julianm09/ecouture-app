import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
 
const ButtonContainerUI = styled.button`

width: 500px;
height: 400px;
font-weight: 700;
color: blue;
background: blue;
border: 1px solid blue;
transition: 0.5s cubic-bezier(0,.1,.1,2);
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

Button {
    margin: 5px 0;
  }

`

export const ButtonContainer = ({  }) => {

  return (

    <>

    <ButtonContainerUI>

      <Button label={'1'}></Button>
   
      <Button label={'2'}></Button>

      <Button label={'3'}></Button>

      <Button label={'4'}></Button>
 
      <Button label={'5'}></Button>

    </ButtonContainerUI>

    </>
  );
};

