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

interface ILegendProps {
  color?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;
  padding: 20px 20px;

  border-radius: 7px;

  animation:${animate} .6s;
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 270px;

  @media (max-width: 420px) {
    height: 180px;
  } // Fim @media 1200px
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  > h2 {
    margin-bottom: 20px;
    padding-left: 17px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  } // Fim @media 1200px
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;
/* legenda */
export const Legend = styled.li<ILegendProps>`
  display: flex;
  justify-content: space-between;
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

  @media (max-width: 770px) {
    > div {
      width: 30px;
      height: 30px;
    }
  } // Fim @media 770px
`;
