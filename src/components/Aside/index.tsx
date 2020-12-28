import React from 'react';

import logoImg from '../../assets/logo.svg'

import { useAuth } from '../../hooks/auth';


/* icons da aplicação: https://react-icons.github.io/icons?name=md*/
import {
    MdDashboard,
    MdSubdirectoryArrowRight,
    MdSubdirectoryArrowLeft,
    MdExitToApp
} from 'react-icons/md';

/* Componentes */
import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton
} from './style';



const Aside: React.FC = () => {

    const { signOut } = useAuth();

    return (
        <Container menuIsOpen ={true}>
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