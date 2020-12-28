import styled from "styled-components";

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
  color: ${(props) => props.theme.colors.white};

  @media (max-width: 600px) {
    flex: 1;
    text-align: end;
    padding-right: 10px;
  }
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

export const ToggleContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
