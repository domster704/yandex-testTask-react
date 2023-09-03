import React from 'react';
import s from './ParticipationCard.module.css'
import YandexText from "../../UIElements/YandexText/YandexText";

const ParticipationCard = ({imgSrc, children}) => {
    return (
        <div className={s.card}>
            <div className={s.img}>
                <img src={imgSrc} alt=""/>
            </div>
            <YandexText>{children}</YandexText>
        </div>
    );
};

export default ParticipationCard;