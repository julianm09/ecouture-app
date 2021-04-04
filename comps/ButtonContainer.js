import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { color } from '../public/color';
 
const ButtonContainerUI = styled.div`

width: 500px;
height: 400px;
background: ${color.blue};
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

