import React from 'react';

import { Container, TitleContainer, Controllers } from './style';



interface IContentHeaderprops {
    title: string;
    lineColor: string;
    children: React.ReactNode; // recebe um componente como tipo.
}

const ContentHeader: React.FC<IContentHeaderprops> = ({
    title, lineColor, children
}) => {

    return (
        <Container >
            <TitleContainer lineColor={lineColor}>
               <h1> {title} </h1>
            </TitleContainer>

            <Controllers>
               {children}
            </Controllers>

        </Container>
    );
}

export default ContentHeader;