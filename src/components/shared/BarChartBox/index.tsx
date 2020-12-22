import React from 'react';

import formatCurrency from '../../../utils/formatCurrency';

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from 'recharts';


import {
    Container,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend,
} from './styles';

/*### INTERFACES  ####*/
interface IBarChartProps {
    title: string;
    data: {
        name: string;
        amount: number;
        percent: number;
        color: string
    }[];
}


const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
    return (
        <Container>
            <SideLeft>
                <h2>{title}</h2>
                <LegendContainer>
                    {
                        data.map((indicator) => (
                            <Legend key={indicator.name} color={indicator.color}>
                                <div>{indicator.percent}%</div>
                                <span>{indicator.name}</span>
                            </Legend>
                        ))
                    }
                </LegendContainer>
            </SideLeft>

            <SideRight>
                {/* montando grafico de barras */}
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((item) => (
                                    <Cell
                                        key={item.name}
                                        cursor="pointer"
                                        fill={item.color}
                                    />
                                ))
                            }
                        </Bar>
                        <Tooltip
                            formatter={(value => formatCurrency(Number(value)))}
                            //cursor={false} ou cursor={{ fill: 'none' }}
                            cursor={{ fill: 'none' }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>

        </Container>
    );
}

export default BarChartBox;