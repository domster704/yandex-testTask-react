import React from 'react';
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = ({bottom}) => {
    return (
        <div style={{marginBottom: bottom}}>
            <HeaderLeft>
                <HeaderRight />
            </HeaderLeft>
        </div>
    );
};

export default Header;