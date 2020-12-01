import styled from "styled-components";

interface IContainerHistoryProps {
  color: string;
}

interface ITagProps {
  color: string;
}

/* Criando Style para o Card */
export const ContainerHistory = styled.li<IContainerHistoryProps>`
  background-color: ${(props) => props.color};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;

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
  >div{
      display:flex;
      flex-direction:column; /* coloca os itens da div um abaixo do outro em suas extremidades*/
      justify-content:space-between;
      padding-left:10px;
  }
`;

/* Criando Style para a Tag do Card */
export const Tag = styled.div<ITagProps>`
  width:10px;
  height:60%;
  background:${props => props.color};
  left:0; /* deixa colado a esquerda */
  position: absolute;

`;
