import styled, { css } from "styled-components";

interface IContainerPorps {
  menuIsOpen: Boolean;
}

export const Container = styled.div<IContainerPorps>`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};

  border-right: 1px solid ${(props) => props.theme.colors.gray};
  padding-left: 10px;

  width: 260px;

  position: relative;

  @media (max-width: 600px) {
    margin-left: 7px;
    position: fixed;
    z-index: 2;  
    width: 170px;

    //coloando a height de acordo com a validação do menu
    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        // se o menu não estar aberto coloca este css
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin: 5px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 790px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  margin: 7px 0;
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

export const MenuItemButton = styled.button`
  color: ${(props) => props.theme.colors.info};

  background: none;
  border: none;

  margin: 7px 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  font-size: 16px;

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
export const ToggleMenu = styled.button`
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  font-size: 22px;
  transition: opacity 0.3s;
  justify-content: center;
  align-items: center;

  display: none;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 790px) {
    display: flex;
    width: 40px;
    height: 40px;
  }
`;
