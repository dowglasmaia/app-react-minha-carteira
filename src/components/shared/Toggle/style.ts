import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;

  /*@media (max-width: 600px) {
    display: none;
  }*/
`;

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

//mudando as propriedades do components Switch
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
