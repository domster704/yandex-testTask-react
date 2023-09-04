import React from 'react';
import s from "./PhotoCard.module.css"

const PhotoCard = ({imgSrc, children, rot}) => {
    return (
        <div className={s.cardBlock + " " + (rot || rot === undefined ? s.rot : "")}>
            <div className={s.card}>
                <img className={s.img} src={imgSrc} alt=""/>
            </div>
            {children}
        </div>
    );
};

export default PhotoCard;