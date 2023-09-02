import React from 'react';
import s from './YandexButton.module.css'

const YandexButton = ({children}) => {
    return (
        <div className={s.yaButton}>
            {children}
        </div>
    );
};

export default YandexButton;