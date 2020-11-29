import React,{useMemo} from 'react';

import emojis from '../../utils/emojis';

import { Container,  
         Profile,
         Welcome, 
         UserName } from './style';

const MainHeader: React.FC = () => {
    // useMemo(() => {}, [] )
    const emoji = useMemo(() => {
        //gerar numeros aleatorios de acordo com a quantidade de emonjis disponiveis na lista;
        let indice = Math.floor(Math.random() * emojis.length )
        console.log(indice);

        return emojis[indice];
    }, [] )


    return (
        <Container>
            <h1>Toogle</h1>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Dowglas Maia</UserName>
            </Profile>

        </Container>
    );
}

export default MainHeader;