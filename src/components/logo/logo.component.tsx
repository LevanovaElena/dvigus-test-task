import LogoImg from "../../assets/images/logo.svg"

import React from "react";
export const Logo = ({size}:{size:"sm"|"md"}): React.JSX.Element => {
    return (
        <div className={`logo ${"logo-size-"+size}`}>
            <img className='logo__img' src={LogoImg} alt='logo'/>
            <span className='logo__text'>LOGO</span>
        </div>
    );
}
