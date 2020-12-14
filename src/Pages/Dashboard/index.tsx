import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/shared/ContentHeader';
import SelectInput from '../../components/shared/SelectInput';
import WalletBox from '../../components/shared/CardBox'

import MessageBox from '../../components/shared/MessageBox'

import {
    Container,
    Content
} from './styles';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); // sempre carrear com o mes atual
    const [yaerSelected, setYaerSelected] = useState<number>(new Date().getFullYear());

    //listar e adicionando somente os Meses que o usuario tenha lançamentos
    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        });
    }, []);

    //listar e adicionando somente os Anos que o usuario tenha lançamentos
    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });
        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        });
    }, []);


    const handleMonthSelected = (month: string) => {
        try {
            let parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch (error) {
            throw new Error('invalid month value. Is accept 0 -24.');
        }
    }

    const handleYaerSelected = (yaer: string) => {
        try {
            let parseYaer = Number(yaer);
            setYaerSelected(parseYaer);
        } catch (error) {
            throw new Error('invalid yaer value. Is accept Integer  Number.');
        }
    }


    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />

                <SelectInput
                    options={years}
                    onChange={(e) => handleYaerSelected(e.target.value)}
                    defaultValue={yaerSelected}
                />

            </ContentHeader>
            <Content>
                <WalletBox
                    color="#4E41F0"
                    title="Saldo"
                    amount={4000.00}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="dolar"
                ></WalletBox>

                <WalletBox
                    color="#F7931B"
                    title="Entradas"
                    amount={9000.00}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="arrowUp"
                ></WalletBox>

                <WalletBox
                    color="#E44C4E"
                    title="Saídas"
                    amount={5000.00}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="arrowDown"
                />

                <MessageBox/>

                
            </Content>

        </Container>

    );

}
export default Dashboard;