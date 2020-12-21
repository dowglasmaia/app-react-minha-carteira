import React from 'react';

import formatCurrency from '../../../utils/formatCurrency';

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip

} from 'recharts';

import {
    Container,
    ChartContainer,
    Header,
    LegendContainer,
    Legend
} from './styles';

interface IHistoryBoxProps {
    data: {
        month?: string;
        amountEntry?: number;
        amountOuput?: number
    }[];
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}


/* https://recharts.org/en-US/api/LineChart */
const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data,
    lineColorAmountEntry,
    lineColorAmountOutput
}) => {
    return (
        <Container>
            <Header>
                <h2>Histórico de Movimentação</h2>
                <LegendContainer>
                    <Legend  color={lineColorAmountEntry}>
                        <div></div>
                        <span>Entrada</span>
                    </Legend>

                    <Legend color={lineColorAmountOutput}>
                        <div></div>
                        <span>Saída</span>
                    </Legend>
                </LegendContainer>
            </Header>

            <ChartContainer>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>

                        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                        <XAxis dataKey="month" stroke="#cecece" />
                        <Tooltip formatter={ (value => formatCurrency(Number(value))) } />

                        <Line
                            type="monotone"
                            dataKey="amountEntry"
                            name="Entradas"
                            stroke={lineColorAmountEntry}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }} />

                        <Line
                            type="monotone"
                            dataKey="amountOuput"
                            name="Saídas"
                            stroke={lineColorAmountOutput}
                            strokeWidth={5}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }} />

                    </LineChart>
                </ResponsiveContainer>
            </ChartContainer>
        </Container>
    );
}

export default HistoryBox;