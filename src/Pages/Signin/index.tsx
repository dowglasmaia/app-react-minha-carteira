import React from 'react';

import {
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles';

import logoImg from '../../assets/logo.svg';

/* MY COMPONENTS  */
import Input from '../../components/shared/Input';
import MyButton from '../../components/shared/Button';

const Signin: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => { }}>
                <FormTitle> Entra </FormTitle>

                <Input type="email" placeholder="e-mail" required />

                <Input type="password" placeholder="senha" required />

                <MyButton type="submit">Acessar</MyButton>

                

            </Form>

        </Container>
    );
}

export default Signin;