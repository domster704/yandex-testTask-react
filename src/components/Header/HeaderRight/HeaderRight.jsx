import React from 'react';
import scooterImage from '../../../res/image/scooter.png';

import s from './HeaderRight.module.css'

const HeaderRight = () => {
    return (
        <div style={{zIndex: 1}}>
            <div className={s.headerRight}>
                <img className={s.img} src={scooterImage} alt=""/>
            </div>
            <div className={s.ellipse}></div>
        </div>
    );
};

export default HeaderRight;