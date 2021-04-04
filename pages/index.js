import Head from 'next/head';
import { ButtonContainer } from '../comps/ButtonContainer';
import styled from 'styled-components';

const Container = styled.div`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
`


export default function Home() {

  const color = {
    'blue' : '#3884FF'
  }

  return (
    <Container>

        <ButtonContainer color={color}></ButtonContainer>

    </Container>
  )
}
