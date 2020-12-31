import styled, {keyframes} from "styled-components";


/* Trabalhando com Animações */
const animate = keyframes`
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

interface ITagProps {
  color: string;
}

/* Criando Style para o Card */
export const ContainerHistory = styled.li`
  background-color: ${(props) => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;

  animation:${animate} .5s ease-ease-out;

  /* efeito de transição */
  transition: all 0.3s;
  &:hover {
    opacity: 0.3;
    transform: translateX(10px);
  }
  /* fim transição*/

  /* estilizando a div dentro do component */
  /* flex-direction:column;  coloca os itens da div um abaixo do outro em suas extremidades */
  /* flex-direction:row;  coloca os itens da div um ao Lada do outro em suas extremidades */
  > div {
    display: flex;
    flex-direction: column; /* coloca os itens da div um abaixo do outro em suas extremidades*/
    justify-content: space-between;
    padding-left: 10px;
  }

  > div span {
    font-size: 22px;
    font-weight: 500;
  }
`;

/* Criando Style para a Tag do Card */
export const Tag = styled.div<ITagProps>`
  width: 13px;
  height: 65%;
  background: ${(props) => props.color};
  left: 0; /* deixa colado a esquerda */
  position: absolute;
  border-radius: 3
`;
