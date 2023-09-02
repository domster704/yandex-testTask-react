import React from 'react';
import s from './Caption.module.css'

const Caption = ({width, children}) => {
    return (
        <div className={s.caption} style={{
            width: width
        }}>
            {children}
        </div>
    );
};

export default Caption;