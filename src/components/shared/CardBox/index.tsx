import React, { useMemo } from 'react';

/* biblioteca para formata e da efeitos a valores monetarios e numericos */
import CountUp from 'react-countup';

import { Container } from './styles';

import dolarImg from '../../../assets/dollar.svg';
import arrowDownImg from '../../../assets/arrow-down.svg';
import arrowUpImg from '../../../assets/arrow-up.svg';


interface IWalletBoxProps {
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerLabel,
    icon,
    color,
}) => {

    /* Funcção para validar qual icon deve ir em cada card */
    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            default:
                return undefined;
        }

        /*if (icon === 'dolar')
            return dolarImg;

        if (icon === 'arrowUp')
            return arrowUpImg;

        if (icon === 'arrowDown')
            return arrowDownImg; */
    }, [icon]);


    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>

                {/* biblioteca para formata e da efeitos a valores monetarios e numericos */}
                <CountUp
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}
                    preserveValue={true}
                />
            </h1>
            <small>{footerLabel}</small>
            <img src={iconSelected} alt={title}></img>

        </Container>
    );
}

export default WalletBox;