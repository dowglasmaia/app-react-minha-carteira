import styled from "styled-components";

interface ILegendProps {
  color: string;
}

/* container */
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  width: 48%;
  height: 260px;
  margin: 10px 0;
  border-radius: 7px;
  display: flex;

  /* */
  @media (max-width: 770px) {
    width: 100%;
    min-height: 160px;
    max-height: 260px;

    > header h1 {
      font-size: 35px;

      img {
        height: 35px;
        width: 35px;
      }
    }

    > header p,
    > footer span {
      font-size: 20;
    }
  } // end @media - 770px
`;

/* area esquerda*/
export const SideLef = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
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

/*area direita */
export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
