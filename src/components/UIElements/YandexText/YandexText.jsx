import React from 'react';
import s from './YandexText.module.css'

const YandexText = ({children}) => {
    return (
        <div className={s.text}>
            {children}
        </div>
    );
};

export default YandexText;