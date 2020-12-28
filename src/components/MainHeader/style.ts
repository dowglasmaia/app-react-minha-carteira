import styled from "styled-components";

import ToggleComponent from "../shared/Toggle";

export const Container = styled.div`
  grid-area: MH;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};

  display: flex;
  justify-content: space-between; // deixa os elementos cada um de um lada.
  align-items: center;

  padding: 0 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  //display:flex;
  //flex-direction:row;
  color: ${(props) => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

//estilizando um component
export const Toggle = styled(ToggleComponent)`

`;
