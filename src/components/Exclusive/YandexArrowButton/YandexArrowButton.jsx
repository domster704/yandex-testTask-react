import React from 'react';
import s from "./YandexArrowButton.module.css"

import next from '../../../res/image/next.svg';
import back from '../../../res/image/back.svg';

const YandexArrowButton = ({handler, index, direction, count}) => {
    let svg = direction === 'left' ? back : next;
    let opacity = 1;

    if (direction === 'left' && index === 0 || direction === 'right' && index === count - 1) {
        opacity = 0.5;
    }

    return (
        <div onClick={opacity === 1 ? handler : null} className={s.block} style={{
            opacity: opacity
        }}>
            <img src={svg} alt=""/>
        </div>
    );
};

export default YandexArrowButton;