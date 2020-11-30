import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};

  border-right: 1px solid ${(props) => props.theme.colors.gray};
  padding-left: 10px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin: 5px;
`;
export const LogImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  color: ${(propos) => propos.theme.colors.white};
  text-decoration: none;
  margin: 7px 0;
  color: ${(props) => props.theme.colors.info};
  transition: opacity 0.3s;
  display: flex;
  align-items: center;

  /* a mesma coisa de a:hover */
  &:hover {
    opacity: 0.7;
  }

  /* Manipulando os Icons dentro do Link */
  > svg {
    font-size: 20px;
    margin-right: 5px;
  }
`;
