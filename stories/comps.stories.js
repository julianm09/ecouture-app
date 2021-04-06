import React from 'react';

//import components from comps//
import { Button } from '../comps/Button';
import { ButtonContainer } from '../comps/ButtonContainer';
import { StoreInside} from '../comps/StoreInside';
import { StoreContainer } from '../comps/StoreContainer';
import { StoreText } from '../comps/StoreText';
import { FiberButton } from '../comps/FiberButton';
import { FiberButtonContainer } from '../comps/FiberButtonContainer';
import { Menu } from '../comps/Menu';
import { MaterialButtonSlider } from '../comps/MaterialButtonSlider';


//export components to storybook//
export const ButtonUI = Button;
export const ButtonContainerUI = ButtonContainer;
export const StoreInsideUI = StoreInside;
export const StoreContainerUI = StoreContainer;
export const StoreTextUI = StoreText;
export const ButtonContainerUI = ButtonContainer
export const FiberButtonUI = FiberButton;
export const FiberButtonContainerUI = FiberButtonContainer;


//export components to storybook//
export const ButtonUI = Button;
export const ButtonContainerUI = ButtonContainer;
export const MenuUI = Menu;
export const MaterialButtonSliderUI =  MaterialButtonSlider;


//dont touch//
export default {
  title: 'Components',
};

