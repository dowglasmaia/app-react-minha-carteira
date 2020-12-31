import React, { useState } from 'react';

import logoImg from '../../assets/logo.svg'

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import Toggle from '../shared/Toggle';


/* icons da aplicação: https://react-icons.github.io/icons?name=md*/
import {
    MdDashboard,
    MdSubdirectoryArrowRight,
    MdSubdirectoryArrowLeft,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';

/* Componentes */
import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu,
    ThemeToggleFooter
} from './style';


const Aside: React.FC = () => {
    
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();
    
    const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpen(!toggleMenuIsOpen); // guarda o estado do butão
    }

     //mudando a cor do thema
     const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }


    return (
        <Container menuIsOpen={toggleMenuIsOpen}>

            <ToggleMenu onClick={handleToggleMenu}>
                {toggleMenuIsOpen ? <MdClose /> : <MdMenu />}
            </ToggleMenu>

            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    {/* MdDashboard Icon  Dashboard */}
                    <MdDashboard /> Dashboard
                </MenuItemLink>

                <MenuItemLink href="/list/entry-balance">
                    <MdSubdirectoryArrowRight /> Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdSubdirectoryArrowLeft /> Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>

            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpen}>
            <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
            </ThemeToggleFooter>

        </Container>
    );
}

export default Aside;