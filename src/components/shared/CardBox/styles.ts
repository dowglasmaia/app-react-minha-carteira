import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};

  width: 32%;
  height: 150px;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden; // oculta o que passar da area do cartão

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -30px;
    opacity: 0.3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }

  /* Trabalhando a Responsividade  para tamanho de Tables*/
  @media (max-width: 770px) {
    > span {
      font-size: 14px;
    }

    > h1 {
      //quebrando a linha caso seja necessario
      word-wrap: break-word;
      font-size: 24px;

      > strong {
        display: inline-block;
        width: 100%;
        font-size: 16px;
      }
    }
  } /* /media 770px */

  @media (max-width: 420px) {
    width: 100%;

    > h1 {
      display: flex;

      > strong {
        position: initial;
        width: auto;
        font-size: 26px;
      }

      // acresenta um espaço vazio despoi do strong
      > strong::after {
        display: inline-block;
        content: " ";
      }
    }
  } /* /media 420px */
`;
