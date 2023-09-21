import React from "react";
import {Logo} from "../logo/logo.component";
import {Button} from "../button/button.component";
export const Navbar= (): React.JSX.Element => {
    return (
        <nav className='nav'>
            <Logo size={'md'}/>
            <Button caption={'Войти'} type={'success'} size={'md'}/>
        </nav>
    );
}
