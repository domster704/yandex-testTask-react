import React from 'react';
import s from './YandexButton.module.css'

const YandexButton = ({children, isFixed}) => {
    return (
        <div className={s.yaButton + (isFixed ? " " + s.butFixed : "")}>
            {children}
        </div>
    );
};

export default YandexButton;