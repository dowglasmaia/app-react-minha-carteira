import styled, {keyframes} from "styled-components";


/* Trabalhando com Animações */
const animateLogo = keyframes`
  0%{
    transform:translateX(-100px);
    opacity:0;
  }
  50%{
    opacity:0.3;
  }
  100%{
    transform:translateX(0px);
    opacity:1;
  }
`

const animateForm = keyframes`
  0%{
    transform:translateX(100px);
    opacity:0;
  }
  50%{
    opacity:0.3;
  }
  100%{
    transform:translateX(0px);
    opacity:1;
  }
`

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100vh;
  display: flex;
  flex: 1; // ocupa toda a area disponivel na tela
  flex-direction: column;
  justify-content: center;
  align-items: center;

 
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  animation:${animateLogo} .7s ease;

  > h2 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 7px;
  }
  > img {
    width: 40px;
    height: 40px;
  }
`;

export const Form = styled.form`
  background-color: ${(props) => props.theme.colors.tertiary};
  width: 300px;
  height: 300px;

  padding: 30px;
  border-radius: 10px;

  animation:${animateForm} .8s ease-out;
`;

export const FormTitle = styled.h1`
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.white};

  // o & referencia o propio Elemento.
  &::after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
`;
