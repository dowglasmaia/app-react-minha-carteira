import React, { PureComponent } from 'react';

/* import do graficos   -  https://recharts.org/en-US/guide/getting-started */
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Sector
} from 'recharts';

import {
    Container,
    SideLef,
    LegendContainer,
    Legend,
    SideRight
} from './styles';

interface IPieChartsProps {
    data: {
        name: string,
        value: number,
        percent: number,
        color: string
    }[];
}

/* Componente sem Estado, somente para exiber coteudo */
const PieChartBox: React.FC<IPieChartsProps> = ({ data }) => (
    /* Montando a estrutura  de exibição do compomente */
    <Container>
        <SideLef>
            <h2> Relação </h2>
            <LegendContainer>
                {/** fazendo um loop com map para pegar os dados do array de dados da IPieChartsProps */}
                {
                    data.map((indicator) => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>

        </SideLef>

        <SideRight>
            {/** Montando o Grafico de Pizza */}
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={data} dataKey="percent" innerRadius={25} label >
                        {
                            data.map((indicator) => (
                                <Cell
                                    key={indicator.name}
                                    fill={indicator.color}
                                    />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>

    </Container>
);


export default PieChartBox;