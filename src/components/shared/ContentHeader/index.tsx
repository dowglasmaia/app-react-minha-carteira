import React from 'react';

import { Container, TitleContainer, Controllers } from './style';

import SelectInput from '../../shared/SelectInput';

const ContentHeader: React.FC = () => {

    const options = [
        { value: 'Dowglas Maia', label: 'Dowglas Maia' },
        { value: 'kayron Maia', label: 'Kayron Maia' },
        { value: 'kaymilly Maia', label: 'kaymilly Maia' }
    ];

    const Frutas = [
        { value: 1, label: 'Maçã' },
        { value: 2, label: 'Laranja' },
        { value: 3, label: 'Manga' }
    ];


    return (
        <Container>
            <TitleContainer>
                <h1>Título</h1>
            </TitleContainer>

            <Controllers>
                <SelectInput options={options} />
                <SelectInput options={Frutas} />
            </Controllers>

        </Container>
    );
}

export default ContentHeader;