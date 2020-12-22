import styled from "styled-components";

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;

  display: flex;
`;

/* area da legenda */
export const LegendContainer = styled.ul`
  list-style: none;

  max-height: 175px;
  padding-right: 15px;
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

/* legenda */
export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 7px;

  padding-left: 17px;

  > div {
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 40px; // do tamanho da caixa para deixar o mesmo centralizado
    text-align: center;
    margin-right: 7px;
    padding: 2px;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    padding-left: 17px;
    margin-bottom: 10px;
  }
`;

export const SideRight = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 35px;

  min-height: 150px;
`;
