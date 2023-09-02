import React from 'react';
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import s from '../../style/margin.module.css'

const Header = () => {
    return (
        <div className={s.mainBlockMarginBottom}>
            <HeaderLeft/>
        </div>
    );
};

export default Header;