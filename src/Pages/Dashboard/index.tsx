import React from 'react';

import { Container } from './styles';
import ContentHeader from '../../components/shared/ContentHeader';

import SelectInput from '../../components/shared/SelectInput';
const Dashboard: React.FC = () => {
    const options = [
        { value: 'Dowglas Maia', label: 'Dowglas Maia' },
        { value: 'kayron Maia', label: 'Kayron Maia' },
        { value: 'kaymilly Maia', label: 'kaymilly Maia' }
    ];

  
    return (
        <Container>
            <ContentHeader title ="Dashboard" lineColor="#F7931B">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );

}
export default Dashboard;