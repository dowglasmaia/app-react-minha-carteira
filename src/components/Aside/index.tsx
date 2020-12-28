import React,{useState} from 'react';

import logoImg from '../../assets/logo.svg'

import { useAuth } from '../../hooks/auth';


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
    ToggleMenu
} from './style';



const Aside: React.FC = () => {
    
    const[toggleMenuIsOpen, setToggleMenuIsOpen]=useState(false);

    const { signOut } = useAuth();

    const handleToggleMenu = () =>{
        setToggleMenuIsOpen(!toggleMenuIsOpen); // guarda o estado do butão
    }

    return (
        <Container menuIsOpen ={toggleMenuIsOpen}>

            <ToggleMenu onClick={handleToggleMenu}>
                {toggleMenuIsOpen ? <MdClose/> : <MdMenu/>}
            </ToggleMenu>

            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
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

        </Container>
    );
}

export default Aside;