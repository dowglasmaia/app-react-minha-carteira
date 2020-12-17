import React, { useState, useMemo } from 'react';

import ContentHeader from '../../components/shared/ContentHeader';
import SelectInput from '../../components/shared/SelectInput';
import WalletBox from '../../components/shared/CardBox'

import MessageBox from '../../components/shared/MessageBox'

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import {
    Container,
    Content
} from './styles';

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

const Dashboard: React.FC = () => {

    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1); // sempre carrear com o mes atual
    const [yearSelected, setYaerSelected] = useState<number>(new Date().getFullYear());

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
        } catch {
            throw new Error('invalid month value. Is accept 0 -24.');
        }
    }

    const handleYaerSelected = (yaer: string) => {
        try {
            let parseYaer = Number(yaer);
            setYaerSelected(parseYaer);
        } catch {
            throw new Error('invalid yaer value. Is accept Integer  Number.');
        }
    }

    /* Pegando o Total de despesas */
    const totalExpenses = useMemo(() => {
        let total: number = 0;

        expenses.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount);
                } catch {
                    throw new Error('Invalid amount!  Amount must be number.');
                }
            }
        });
        return total;
    }, [monthSelected, yearSelected])

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
                    defaultValue={yearSelected}
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
                    amount={totalExpenses}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="arrowDown"
                />

                <MessageBox
                    title="Muito Bem!"
                    description="Sua carteira está positiva."
                    footerText="Continue assim. Considere investir o seu saldo."
                    icon={happyImg}
                />


            </Content>

        </Container>

    );

}
export default Dashboard;