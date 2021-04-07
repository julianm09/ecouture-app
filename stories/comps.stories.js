import React from 'react';

//import components from comps//
import { Button } from '../comps/Button';
import { ButtonContainer } from '../comps/ButtonContainer';
import { RecycleButton } from '../comps/RecycleButton';
import { StartButton } from '../comps/StartButton';
import { AboutResourcesCont } from '../comps/AboutResourcesCont';


//export components to storybook//
export const ButtonUI = Button;
export const ButtonContainerUI = ButtonContainer;
export const RecycleButtonUI = RecycleButton;
export const StartButtonUI = StartButton;
export const AboutResourcesContUI = AboutResourcesCont;


//dont touch//
export default {
  title: 'Components',
};

