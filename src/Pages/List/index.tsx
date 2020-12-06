import React, { useMemo, useState, useEffect } from 'react';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/shared/ContentHeader';
import SelectInput from '../../components/shared/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

/* data b/
/* data base mok*/
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';


interface IRouteParams {
    match: {
        params: {
            type: string; /*O nome do parametro deve ser o mesmo definido na rota, neste caso foi 'type'. ex: /list/:type */
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string
}

/* O match e disponibilizando graças a rootDom, para pegar parametros da rota */
const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);

    /* armazenando o Mês e o Ano selecionado */
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1)); // sempre carrear com o mes atual
    const [yaerSelected, setYaerSelected] = useState<string>(String(new Date().getFullYear()));

    const { type } = match.params;

    /* Hook useMemo - extrutura: useMemo( () => {},[]); */
    /* const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]); 
    */

    /* retornar um Objeto no useMemo */
    const titleAndLineColor = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#4E41F0'
        } : {
                title: 'Saídas',
                lineColor: '#E44C4E'
            };
    }, [type]);

    /**cria uma lista de acordo com o tipo de finança */
    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    //useEffect e chamado sempre que a pagina e carregada, e tem a mesma estrutua do useMemmo
    useEffect(() => {

        /* Filtrando os Dados para exibição na Tela */
        const filteredData = listData.filter(item => {
            let date = new Date(item.date);
            let month = String(date.getMonth() + 1);
            let yaer = String(date.getFullYear());

            return month === monthSelected && yaer === yaerSelected; // retonar os dados de acordo com o Ano e Mes selecionado.
        });

        const formattedData = filteredData.map(item => {
            return {
                id: String(Math.random() * data.length + item.amount),// criando ID unico de forma aleatoria.
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#E44C4E' : '#4E41F0', // usando ifTernario para ver qual cor usar na tagColor:
            }
        })
        setData(formattedData);
    }, [listData, monthSelected, yaerSelected]);

    const months = [
        { value: 6, label: 'Junho' },
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro' },
        { value: 11, label: 'Novembro' },
        { value: 12, label: 'Dezembro' },
    ];

    const years = [
        { value: 2018, label: 2018 },
        { value: 2019, label: 2019 },
        { value: 2020, label: 2020 },
    ];




    return (
        <Container>
            <ContentHeader title={titleAndLineColor.title} lineColor={titleAndLineColor.lineColor}>
                <SelectInput
                    options={months}
                    onChange={(e) => setMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />

                <SelectInput
                    options={years}
                    onChange={(e) => setYaerSelected(e.target.value)}
                    defaultValue={yaerSelected}
                />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-recorrentes"> Recorrentes </button>

                <button type="button" className="tag-filter tag-eventuais"> Eventuais </button>
            </Filters>

            <Content>
                {/* Cartão de Historico Financeiro */}
                {/* Populando o carde com Lista carregada na requisição */}

                {
                    data.map(item => (
                        < HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>

        </Container>
    );
}

export default List;