import React from 'react';
import styled from 'styled-components';
import { color } from '../public/color'

const StartButtonUI = styled.button`

    height: 100px;
    width: 365px;
    border-style: solid;
    border-width: 1px;
    border-color: #FFFFFF; opacity:0.5;
    border-radius: 10px;
    background-color: #3884FF;
    color: white;
    

    `

export const StartButton = () => {

    return (
        <StartButton>Get Started</StartButton>
    )
}