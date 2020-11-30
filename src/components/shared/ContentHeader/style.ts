import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;

  /* separando as regiões dentro do display - similar ao float: left e right*/
  justify-content: space-between;

  margin-bottom: 25px;
`;

export const TitleContainer = styled.div`  
  /* estilizando só o h1 dentro do container */
  > h1 {
    color: ${(props) => props.theme.colors.white};

    /* Mostrada Depois da descrição . neste caso uma borda abaixo do texto. */
    &::after {
        content:'';
        display:block;
        width:55px;
        border-bottom:10px solid ${propos => propos.theme.colors.warning};
    }
  };

`;

export const Controllers = styled.div`
  border: 1px solid black;
`;
