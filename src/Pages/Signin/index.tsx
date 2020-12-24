import React, { useState } from 'react';

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

import { useAuth } from '../../hooks/auth';

const Signin: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle> Entra </FormTitle>

                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="e-mail"
                    required />

                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="senha"
                    required />

                <MyButton type="submit">Acessar</MyButton>



            </Form>

        </Container>
    );
}

export default Signin;