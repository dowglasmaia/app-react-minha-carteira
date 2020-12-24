import React ,{InputHTMLAttributes} from 'react';

import { Container } from './styles';

// Interface herdando todos os elementos do input HTML,
type IInputProps = InputHTMLAttributes<HTMLInputElement>;


//pegando todos as propiedaes do iput com os ...rest
const Input: React.FC<IInputProps> = ( {...rest }) => (
    
    <Container {...rest} />

); 

export default Input;