import React, { useMemo } from 'react';

import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/shared/ContentHeader';

import SelectInput from '../../components/shared/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';


interface IRouteParams {
    match: {
        params: {
            type: string; /*O nome do parametro deve ser o mesmo definido na rota, neste caso foi 'type'. ex: /list/:type */
        }
    }
}

/* O match e disponibilizando graças a rootDom, para pegar parametros da rota */
const List: React.FC<IRouteParams> = ({ match }) => {

    const { type } = match.params;

    /* Hook useMemo - extrutura: useMemo( () => {},[]); */
    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas';
    }, [type]);

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' }
    ];

    const years = [
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
    ];


    return (
        <Container>
            <ContentHeader title={title} lineColor="#F79390">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button type="button" className="tag-filter tag-recorrentes"> Recorrentes </button>

                <button type="button" className="tag-filter tag-eventuais"> Eventuais </button>
            </Filters>


            <Content>
                {/* Cartão de Historico Financeiro */}
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="01/12/2020"
                    amount="R$ 79,00"
                />
            </Content>
        </Container>
    );
}

export default List;