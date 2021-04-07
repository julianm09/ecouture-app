import React from 'react';
import styled from 'styled-components';
import { color } from '../public/color'

const RecycleButtonUI = styled.button`

    height: 75px;
    width: 365px;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    background-color: ${color.green};
    color: white;
    font-size: 18px; 

    `

export const RecycleButton = () => {

    return (
        <RecycleButtonUI>Test</RecycleButtonUI>
    )
}
