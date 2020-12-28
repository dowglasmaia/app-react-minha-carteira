import React from 'react';

import formatCurrency from '../../../utils/formatCurrency';

/* import do graficos   -  https://recharts.org/en-US/guide/getting-started */
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
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
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>

        </SideLef>

        <SideRight>
            {/** Montando o Grafico de Pizza - https://recharts.org/en-US/api/PieChart  */}
            <ResponsiveContainer>
                <PieChart> 
                   <Tooltip formatter={ (value => formatCurrency(Number(value))) } />                   
                    <Pie
                        data={data}
                        dataKey='value'
                        innerRadius={10}
                        //outerRadius={70}
                        //label 
                        cx="50%" 
                        cy="50%"
                        >
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