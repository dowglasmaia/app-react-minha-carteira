import 'styled-components';

/* Definindo a Tipagem do DefaultTheme*/

declare module 'styled-components'{
export interface DefaultTheme {
    title: string,
    color: {
      primary: string,
      secundary: string,
      tertiary: string,
  
      white: string,
      black: string,F
      gray: string,
  
      success: string,
      info: string,
      warning: string,
      danger: string,
    },  
  };

}