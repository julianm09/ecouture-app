import React, { useState } from 'react';
import styled from 'styled-components';
import { StoreInsideUI } from '../stories/comps.stories';


const StoreContainerUI = styled.div`

width: 500px;
height: 400px;
display: flex;
flex-direction: column;


`

export const StoreContainer = ({}) => {

    return (
        <StoreContainerUI>
            <StoreInsideUI></StoreInsideUI>
            <StoreInsideUI></StoreInsideUI>
            <StoreInsideUI></StoreInsideUI>
            <StoreInsideUI></StoreInsideUI>
        </StoreContainerUI>
    )



}