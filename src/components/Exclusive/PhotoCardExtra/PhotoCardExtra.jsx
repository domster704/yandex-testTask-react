import React from 'react';
import s from './PhotoCardExtra.module.css'

const PhotoCardExtra = ({imgSrc, top, bottom, left, right, shadowColor, width, height}) => {
    console.log((top * 0.5) + "rem " + (top * 0.5) + 'vw')
    return (
        <div className={s.card} style={{
            top: `calc(${top * 0.5}rem  + ${top * 0.5}vw)`,
            bottom: `calc(${bottom * 0.5}rem  + ${bottom * 0.5}vw)`,
            left: `calc(${left * 0.5}rem  + ${left * 0.5}vw)`,
            right: `calc(${right * 0.5}rem  + ${right * 0.5}vw)`,
            backdropFilter: `-14px 51px 100px 0px ${shadowColor}`,
        }}>
            <img src={imgSrc} alt="" style={{
                width: `calc(${width * 0.5}rem  + ${width * 0.5}vw)`,
                height: `calc(${height * 0.5}rem  + ${height * 0.5}vw)`
            }}/>
        </div>
    );
};

export default PhotoCardExtra;