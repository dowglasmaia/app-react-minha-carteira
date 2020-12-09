import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

/* Estilizando os Butões de filters */
export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom:30px;

  /* criando uma class CSS */
  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;
    opacity: .4;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-recorrentes::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }

  .tag-eventuais::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }

  .tag-actived{
    opacity:1
  }

`;
