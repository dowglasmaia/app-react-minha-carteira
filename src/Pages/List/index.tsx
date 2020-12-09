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
import listOfMonths from '../../utils/months'

import { uuid } from 'uuidv4';


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
    const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recorrente', 'eventual']);  //inicializa o array com os dois valores.


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
            
            console.log(item.frequency);

            return month === monthSelected 
                         && yaer === yaerSelected 
                         && selectedFrequency.includes(item.frequency); // retonar os dados de acordo com o Ano e Mes selecionado.
        });

        const formattedData = filteredData.map(item => {
            return {
                id: uuid(), //setando um ID
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0': '#E44C4E' , // usando ifTernario para ver qual cor usar na tagColor:
            }
        })
        setData(formattedData);
    }, [listData, monthSelected, yaerSelected, selectedFrequency]);


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

        listData.forEach(item => {
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
    }, [listData]);

    /* FUNÇÃO PARA PEGAR OS TIPO DE FINANÇAS */
    const handleFrequencyClick = (frequency: string) => {
        const alreadySeleted = selectedFrequency.findIndex(item => item === frequency);

        if (alreadySeleted >= 0) {
            const filtered = selectedFrequency.filter(item => item != frequency); // desmarcando o butão seleionado.
            setSelectedFrequency(filtered);
        } else {
            setSelectedFrequency((prev) => [...prev, frequency]);  // marcando o butão desejado
        }
    }



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
                <button
                    type="button"
                    className=
                        {`tag-filter tag-recorrentes
                            ${selectedFrequency.includes('recorrente') && 'tag-actived'} 
                        `}
                    onClick={() => handleFrequencyClick('recorrente')}
                >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className=
                        {`tag-filter tag-eventuais
                            ${selectedFrequency.includes('eventual') && 'tag-actived'} 
                        `}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </button>
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