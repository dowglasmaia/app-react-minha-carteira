import React from 'react';

import { Container, Content } from './styles';
import ContentHeader from '../../components/shared/ContentHeader';

import SelectInput from '../../components/shared/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {
    const options = [
        { value: 'Dowglas Maia', label: 'Dowglas Maia' },
        { value: 'kayron Maia', label: 'Kayron Maia' },
        { value: 'kaymilly Maia', label: 'kaymilly Maia' }
    ];


    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#F79390">
                <SelectInput options={options} />
            </ContentHeader>

            <Content>
                <HistoryFinanceCard 
                   cardColor="#4E41F0"
                   tagColor="#E44C4E" 
                   title="Conta de Luz"
                   subTitle="01/12/2020"
                   amount="R$ 79,00"
                ></HistoryFinanceCard>

            </Content>
        </Container>
    );
}

export default List;