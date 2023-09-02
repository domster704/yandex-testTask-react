import React from 'react';
import s from './PhotoCardExtra.module.css'

const PhotoCardExtra = ({imgSrc, top, bottom, left, right, shadowColor, width, height}) => {
    return (
        <div className={s.card} style={{
            top: top + "rem",
            bottom: bottom + "rem",
            left: left + "rem",
            right: right + "rem",
            backdropFilter: `-14px 51px 100px 0px ${shadowColor}`,
        }}>
            <img src={imgSrc} alt="" style={{
                width: width + "rem",
                height: height + "rem"
            }}/>
        </div>
    );
};

export default PhotoCardExtra;