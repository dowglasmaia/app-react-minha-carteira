import React from 'react';

/* import do graficos   -  https://recharts.org/en-US/guide/getting-started */
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';

import { 
    Container,
    SideLef,
    LegendContainer,
    Legend,
    SideRight
 } from './styles';

/* Componente sem Estado, somente para exiber coteudo */
const PieCharts: React.FC = () => (
    /* Montando a estrutura  de exibição do compomente */
    <Container>
        <SideLef>
            <h2> Relação </h2>
            <LegendContainer>
                <Legend color="#F7931B">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>

                <Legend color="#F7931B">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>

                <Legend color="#F7931B">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
                <Legend color="#E44C4E">
                    <div>95%</div>
                    <span>Saídas</span>
                </Legend>
            </LegendContainer>
        </SideLef>

        <SideRight>
            
          
        </SideRight>

    </Container>
);


export default PieCharts;