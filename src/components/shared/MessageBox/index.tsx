import React from 'react';

import { Container } from './styles';
import happyImg from '../../../assets/happy.svg';



const MessageBox: React.FC = () => {
    return (
        <Container>
            <header>
                <h1>
                    Muito bem!
                   <img src={happyImg} alt=""></img>
                </h1>
                <p>Sua Carteira está Positiva.</p>
            </header>
            <footer>
                <span>Continue assim. Considere investir o seu saldo.</span>
            </footer>

        </Container>
    );
}

export default MessageBox;