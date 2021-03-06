import React, { useState, useMemo, useCallback } from 'react';

import ContentHeader from '../../components/shared/ContentHeader';
import SelectInput from '../../components/shared/SelectInput';
import WalletBox from '../../components/shared/CardBox'
import MessageBox from '../../components/shared/MessageBox';
import PieCharts from '../../components/shared/PieChartBox'
import HistoryBox from '../../components/shared/HistoryBox';
import BarChartBox from '../../components/shared/BarChartBox';

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


    /* useCallback - memoria A FUNÇÃO*/
    const handleMonthSelected = useCallback((month: string) => {
        try {
            let parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('invalid month value. Is accept 0 -24.');
        }
    }, []);

    const handleYaerSelected = useCallback((yaer: string) => {
        try {
            let parseYaer = Number(yaer);
            setYaerSelected(parseYaer);
        } catch {
            throw new Error('invalid yaer value. Is accept Integer  Number.');
        }
    }, []);

    /* Calculando o Total de despesas */
    const totalDespesas = useMemo(() => {
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
    }, [monthSelected, yearSelected]);


    /* Calculando Total de Recebimentos*/
    const totalRecebimento = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(item.amount); // Number Por que o Valor estar vindo como String - aqui convert String para Number 
                } catch {
                    throw new Error('Invalid amount!  Amount must be number.');
                }
            }
        });
        return total;

    }, [monthSelected, yearSelected]); // atualiza os dados de acordo as mudanças

    /* Calculando Total do Saldo:  Entradas - Saidas = Saldo */
    const totalSaldo = useMemo(() => {
        return totalRecebimento - totalDespesas;
    }, [totalRecebimento, totalDespesas]);

    const message = useMemo(() => {
        if (totalSaldo < 0) {
            return {
                title: 'Que triste!',
                description: 'Neste mês, você gastou mas do que deveria.',
                footerText: 'Verifique seus gastos',
                icon: sadImg
            }
        } else if (totalDespesas === 0 && totalRecebimento === 0) {
            return {
                title: "Op's!",
                description: "Neste mês não há registro de entradas ou saídas.",
                footerText: "Vamos acordo!!!.",
                icon: happyImg
            }
        } else if (totalSaldo === 0) {
            return {
                title: "Ufaa!",
                description: "Neste mês você gastou exatamento o que ganhou.",
                footerText: "Tenha cuidado tente investir um pouco.",
                icon: happyImg
            }
        } else {
            return {
                title: "Muito Bem!",
                description: "Sua carteira está positiva.",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg
            }
        }

    }, [totalSaldo, totalDespesas, totalRecebimento]);


    /* Montando Dados para Exibir no Grafico */
    const relationExpensesVersusGains = useMemo(() => {

        const total = totalRecebimento + totalDespesas;

        const percentualGanhos = Number(((totalRecebimento / total) * 100).toFixed(1));
        const percentualDespesas = Number(((totalDespesas / total) * 100).toFixed(1));
        //const percentualGanhos = Number.isNaN((totalRecebimento / total) * 100) ? 0 : (totalRecebimento / total) * 100;
        //const percentualDespesas = Number.isNaN((totalDespesas / total) * 100) ? 0 : (totalDespesas / total) * 100;

        console.log(percentualGanhos.toFixed(1), percentualDespesas.toFixed(1))

        /* Informações para o Grafico*/
        const data = [
            {
                name: 'Entradas',
                value: totalRecebimento,
                percent: percentualGanhos ? percentualGanhos : 0,
                color: '#F7931B'
            },
            {
                name: 'Saídas',
                value: totalDespesas,
                percent: percentualDespesas ? percentualDespesas : 0,
                color: '#E44C4E'
            }
        ]

        return data;
    }, [totalRecebimento, totalDespesas]);

    /* Montando dados para Grafico de historico */
    const historyData = useMemo(() => {

        return listOfMonths.map((_, month) => {
            let amountEntry = 0;
            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                const gainYear = date.getFullYear();

                if (gainMonth === month && gainYear === yearSelected) {
                    try {
                        amountEntry += Number(gain.amount);
                    } catch {
                        throw new Error('AmountEntry is invalid.')
                    }
                }
            });


            let amountOuput = 0;
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if (expenseMonth === month && expenseYear === yearSelected) {
                    try {
                        amountOuput += Number(expense.amount);
                    } catch {
                        throw new Error('AmountOutput is invalid.')
                    }
                }
            });

            return {
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3), //mostra so as 03 primerias letras do mes
                amountEntry,
                amountOuput
            }

        })
            /* Filtrando para mostra somentos os meses anteriores ate oatual, evitando mostra meses futuros*/
            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();
                return (yearSelected === currentYear && item.monthNumber <= currentMonth)
                    || (yearSelected < currentYear)

            });

    }, [yearSelected]);

    /* realizando coleta de inf para montar grafico com percutnal de saide por Tipo de Despesas*/
    const relationExpensesRescurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses
            .filter(
                (expense) => {
                    const date = new Date(expense.date);
                    const yaer = date.getFullYear();
                    const month = date.getMonth() + 1;

                    return month === monthSelected && yaer === yearSelected;
                })
            .forEach((expense) => {
                if (expense.frequency === 'recorrente') {
                    const totalRecurrent = amountRecurrent += Number(expense.amount);
                    console.log(`O totalRecurrent é ${totalRecurrent}`)
                    return totalRecurrent;
                }

                if (expense.frequency === 'eventual') {
                    const totalEventual = amountEventual += Number(expense.amount);
                    console.log(`O totalEventual é ${totalEventual}`)
                    return totalEventual;
                }
            })

        const total = amountEventual + amountRecurrent;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        console.log(`O Total da Soma é = ${total}`)

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#F7931B"
            },

            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                // percent: Number(isNaN((amountEventual / total) * 100) ? 0 : ((amountEventual / total) * 100)).toFixed(1),
                color: "#E44C4E"
            }
        ]
    }, [monthSelected, yearSelected]);

    /* realizando coleta de inf para montar grafico com percutnal de saide por Tipo de Despesas*/
    const relationGainsRescurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
            .filter(
                (gain) => {
                    const date = new Date(gain.date);
                    const yaer = date.getFullYear();
                    const month = date.getMonth() + 1;

                    return month === monthSelected && yaer === yearSelected;
                })
            .forEach((gain) => {
                if (gain.frequency === 'recorrente') {
                    const totalRecurrent = amountRecurrent += Number(gain.amount);
                    console.log(`O totalRecurrent é ${totalRecurrent}`)
                    return totalRecurrent;
                }

                if (gain.frequency === 'eventual') {
                    const totalEventual = amountEventual += Number(gain.amount);
                    console.log(`O totalEventual é ${totalEventual}`)
                    return totalEventual;
                }
            })

        const total = amountEventual + amountRecurrent;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        console.log(`O Total da Soma é = ${total}`)

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#F7931B"

            },

            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            }
        ]
    }, [monthSelected, yearSelected]);


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
                    color='#4E41F0'
                    title="Saldo"
                    amount={totalSaldo}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="dolar"
                ></WalletBox>

                <WalletBox
                    color="#F7931B"
                    title="Entradas"
                    amount={totalRecebimento}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="arrowUp"
                ></WalletBox>

                <WalletBox
                    color="#E44C4E"
                    title="Saídas"
                    amount={totalDespesas}
                    footerLabel="Atualizando com Base nas Entradas e Saídas. "
                    icon="arrowDown"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}
                    footerText={message.footerText}
                    icon={message.icon}
                />

                {/**Grafico de Pizza */}
                <PieCharts data={relationExpensesVersusGains} />

                {/** Grafico de Historico */}
                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E" />

                {/** Grafico de Barra - Saidas - Tipo de Receitas */}
                <BarChartBox
                    title="Saídas"
                    data={relationExpensesRescurrentVersusEventual} />

                {/** Grafico de Barra - Entradas - Tipo de Receitas */}
                <BarChartBox
                    title="Entradas"
                    data={relationGainsRescurrentVersusEventual} />

            </Content>

        </Container>

    );

}
export default Dashboard;