import React from 'react';
import s from "./PhotoCard.module.css"

const PhotoCard = ({imgSrc, children}) => {
    return (
        <div className={s.cardBlock}>
            <div className={s.card}>
                <img className={s.img} src={imgSrc} alt=""/>
            </div>
            {children}
        </div>
    );
};

export default PhotoCard;