import styled from "styled-components";

/* Estyle CSS Com Styled Components | https://styled-components.com/ */
/*
 *Layout
 *MH = Main Header
 *AS = Aside
 *CT = Content
 */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
  min-width: 350px;

  /* Escondendo o Asside em telas menor ou igual a 600 */
  @media (max-width: 600px) {
    grid-template-areas:
      "MH"
      "CT";

    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
  }
`;
