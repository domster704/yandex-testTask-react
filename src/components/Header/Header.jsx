import React from 'react';
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import margin from '../../style/margin.module.css'

const Header = () => {
    return (
        <div className={margin.mainBlockMarginBottom}>
            <HeaderLeft/>
        </div>
    );
};

export default Header;