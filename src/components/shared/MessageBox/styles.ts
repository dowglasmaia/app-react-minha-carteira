import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;

  background-color: ${(props) => props.theme.colors.tertiary};

  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;

  display: flex;
  flex-direction: column; // para ficar os dados um abaixo do outro.
  justify-content: space-between;

  > Header img {
    margin-left: 7px;
    width: 35px;
  }
  > header p {
    font-size: 18px;
  }
`;
