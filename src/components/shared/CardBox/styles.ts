import styled from "styled-components";

interface IContainerProps {
  color: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: ${(props) => props.color};

  width: 32%;
  height: 150px;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  padding: 10px 20px;
  position: relative;
  overflow:hidden; // oculta o que passar da area do cartão

  > img {
    position: absolute;
    height:110%;
    top:-10px;
    right:-30px;
    opacity:.3
  }

  >span{
    font-size:18px;
    font-weight:500;
  }

  >small{
    font-size:12px;
    position:absolute;
    bottom: 10px;
  }

`;
