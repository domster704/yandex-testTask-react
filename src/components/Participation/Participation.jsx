import React from 'react';
import s from './Participation.module.css'
import ParticipationCard from "./ParticipationCard/ParticipationCard";

import zeroRublesSVG from '../../res/image/0R.svg';
import threeScootersSVG from '../../res/image/3Scooter.svg';
import timerSVG from '../../res/image/Timer.svg';
import energySVG from '../../res/image/0R.svg';

import margin from '../../style/margin.module.css'

const Participation = ({bottom}) => {
    return (
        <div className={margin.mainBlockMarginBottom} style={{marginBottom: bottom}}>
            <div className={s.textHeader}>Вот что даёт участие в клубе</div>
            <div className={s.allRow}>
                <div className={s.row}>
                    <ParticipationCard imgSrc={zeroRublesSVG}>0₽ за старт в каждой поездке</ParticipationCard>
                    <ParticipationCard imgSrc={threeScootersSVG}>Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так
                        у всех будет бесплатный старт</ParticipationCard>
                </div>
                <div className={s.row}>
                    <ParticipationCard imgSrc={timerSVG}>Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или
                        передохнуть</ParticipationCard>
                    <ParticipationCard imgSrc={energySVG}>Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените
                        по пути на другой — это бесплатно</ParticipationCard>
                </div>
            </div>
        </div>
    );
};

export default Participation;