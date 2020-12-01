import React from 'react';

import { ContainerHistory, Tag } from './styles'

interface IHistoryFinaceCard {
    cardColor: string;
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string
}

const HistoryFinaceCard: React.FC<IHistoryFinaceCard> = ({
    cardColor,
    tagColor,
    title,
    subTitle,
    amount,
}) => {
    return (
        /* montando o card */
        <ContainerHistory color={cardColor}>
            <Tag color={tagColor} />
            <div>
                <span>{title}</span>
                <small>{subTitle}</small>             
            </div>
            <h3>{amount}</h3>
        </ContainerHistory>
    );
}
export default HistoryFinaceCard;