import React from 'react';

/* icons da aplicação: https://react-icons.github.io/icons?name=md*/
import {
    MdDashboard,
    MdSubdirectoryArrowRight,
    MdSubdirectoryArrowLeft,
    MdExitToApp
} from 'react-icons/md';

import {
    Container,
    Header,
    LogImg,
    Title,
    MenuContainer,
    MenuItemLink
} from './style';

import logoImg from '../../assets/logo.svg'

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    {/* Icon  Dashboard */}
                    <MdDashboard/> Dashboard
                </MenuItemLink>

                <MenuItemLink href="#" title="Entradas">
                    <MdSubdirectoryArrowRight/> Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                   <MdSubdirectoryArrowLeft/> Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/> Sair
                </MenuItemLink>


            </MenuContainer>

        </Container>
    );
}

export default Aside;