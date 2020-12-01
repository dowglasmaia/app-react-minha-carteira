import React from 'react';

import { ContainerHistory, Tag } from './styles'

interface IHistoryFinaceCard {   
    tagColor: string;
    title: string;
    subTitle: string;
    amount: string
}

const HistoryFinaceCard: React.FC<IHistoryFinaceCard> = ({   
    tagColor,
    title,
    subTitle,
    amount,
}) => {
    return (
        /* montando o card */
        <ContainerHistory >
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