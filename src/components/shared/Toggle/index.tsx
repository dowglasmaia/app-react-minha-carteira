import React from 'react';

import { Container, ToggleLabel, ToggleSelector } from './style';

import {IToggleProps} from './toggle.model';



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