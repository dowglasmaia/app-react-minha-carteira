import React from 'react';


import {Container,ToggleLabel, ToggleSelector} from './style';

const Toggle: React.FC = ()=> {
    return (
        <Container>
                <ToggleLabel>Light</ToggleLabel>
               
                <ToggleSelector
                    onChange ={ ()=> console.log('mudou')}
                    uncheckedIcon ={false}
                    checkedIcon ={false}
                    checked={true}
                />

                <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
};

export default Toggle;