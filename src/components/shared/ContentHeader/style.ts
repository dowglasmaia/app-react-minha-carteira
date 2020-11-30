import styled from "styled-components";

/* para passar uma propienda como argumento - para passar cores dinamicamente */
interface ITitleContainerProps {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;

  display: flex;

  /* separando as regiões dentro do display - similar ao float: left e right*/
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
  /* estilizando só o h1 dentro do container */
  > h1 {
    color: ${(props) => props.theme.colors.white};

    /* Mostrada Depois da descrição . neste caso uma borda abaixo do texto. */
    &::after {
      content: "";
      display: block;
      width: 55px;
      border-bottom: 10px solid ${(propos) => propos.lineColor};
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
  //background-color:red;
`;
