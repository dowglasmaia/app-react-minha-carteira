import React, { useCallback, useMemo, useState } from 'react';

import emojis from '../../utils/emojis';
import Toggle from '../shared/Toggle';
import { useTheme } from '../../hooks/theme';

import {
    Container,
    Profile,
    Welcome,
    UserName
} from './style';

const MainHeader: React.FC = () => {

    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    //mudando a cor do thema
    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    /* useMemo(() => {}, [] ) */
    const emoji = useMemo(() => {
        //gerar numeros aleatorios de acordo com a quantidade de emonjis disponiveis na lista;
        let indice = Math.floor(Math.random() * emojis.length)
        console.log(indice);

        return emojis[indice];
    }, [])


    return (
        <Container>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Dowglas Maia</UserName>
            </Profile>

        </Container>
    );
}

export default MainHeader;