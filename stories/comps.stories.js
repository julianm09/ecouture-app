import React from 'react';

//import components from comps//
import { Button } from '../comps/Button';
import { ButtonContainer } from '../comps/ButtonContainer';
import { StoreInside} from '../comps/StoreInside';
import { StoreContainer } from '../comps/StoreContainer';
import { StoreText } from '../comps/StoreText';
import { RoundBlueButton } from '../comps/RoundBlueButton'


//export components to storybook//
export const ButtonUI = Button;
export const ButtonContainerUI = ButtonContainer;
export const StoreInsideUI = StoreInside;
export const StoreContainerUI = StoreContainer;
export const StoreTextUI = StoreText;
export const RoundBlueButtonUI = RoundBlueButton;

//dont touch//
export default {
  title: 'Components',
};

