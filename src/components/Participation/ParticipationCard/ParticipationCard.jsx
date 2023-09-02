import React from 'react';
import s from './ParticipationCard.module.css'

const ParticipationCard = ({imgSrc, children}) => {
    return (
        <div className={s.card}>
            <div className={s.img}>
                <img src={imgSrc} alt=""/>
            </div>
            <div className={s.text}>
                {children}
            </div>
        </div>
    );
};

export default ParticipationCard;