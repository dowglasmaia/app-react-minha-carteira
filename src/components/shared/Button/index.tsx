import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// Interface herdando todos os elementos do button HTML,
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


//pegando todos as propiedaes do iput com os ...rest
const Button: React.FC<IButtonProps> = ({children, ...rest }) => (

    <Container {...rest} >
        {children}
    </Container>

);

export default Button;