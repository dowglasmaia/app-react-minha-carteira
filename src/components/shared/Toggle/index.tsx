import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './style';


interface IToggleProps {
    labelLeft: string;
    labelRight: string;
    checked: boolean;
    onChange(): void;
}

/* Componente de Troca de Valor do Thema */
const Toggle: React.FC<IToggleProps> = ({
    labelLeft,
    labelRight,
    checked,
    onChange
}) => {
    return (
        <Container>

            <ToggleLabel>{labelLeft}</ToggleLabel>
            <ToggleSelector
                onChange={onChange}
                uncheckedIcon={false}
                checkedIcon={false}
                checked={checked}
            />
            <ToggleLabel>{labelRight}</ToggleLabel>

        </Container>
    );
};

export default Toggle;