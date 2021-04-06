import React from 'react';

//import components from comps//
import { Button } from '../comps/Button';
import { ButtonContainer } from '../comps/ButtonContainer';
import { FiberButton } from '../comps/FiberButton';
import { FiberButtonContainer } from '../comps/FiberButtonContainer';


//export components to storybook//
export const ButtonUI = Button;
export const ButtonContainerUI = ButtonContainer
export const FiberButtonUI = FiberButton;
export const FiberButtonContainerUI = FiberButtonContainer;



//dont touch//
export default {
  title: 'Components',
};

