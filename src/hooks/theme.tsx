/* CRIANDO UM HOOK PERSONALISADO para MANIPULAR O THEMA DA APLICAÇÃO  */
import React, { createContext, useContext, useState } from 'react';

import dark from './../styles/themes/dark';
import light from './../styles/themes/light';

/* import das interfaces */
import { ITheme, IThemeContext } from './theme.model';

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const themeSaved = localStorage.getItem('@minha-carteira-web:theme');
        if (themeSaved) {
            return JSON.parse(themeSaved);
        } else {
            return dark;
        }
    });

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(light);
            //guardando no localStorage
            localStorage.setItem('@minha-carteira-web:theme', JSON.stringify(light));
        } else {
            setTheme(dark);
            localStorage.setItem('@minha-carteira-web:theme', JSON.stringify(dark));
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )

};

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);
    return context;
}

export { ThemeProvider, useTheme }
