import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  padding: 25px;

  /* desconta o valor que foi lançado no header :  grid-template-rows: 70px auto; */
  height: calc(100vh - 70px);
  overflow-y: scroll;

  /* estilizando o scrollbar */
  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;
