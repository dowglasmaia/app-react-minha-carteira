import 'styled-components';

/* Definindo a Tipagem e Sobrescrevendo o DefaultTheme */

declare module 'styled-components'{
export interface DefaultTheme  {
    title: string,
    colors: {
      primary: string,
      secundary: string,
      tertiary: string,
  
      white: string,
      black: string,
      gray: string,
  
      success: string,
      info: string,
      warning: string,
      danger: string,
    },  
  };

}