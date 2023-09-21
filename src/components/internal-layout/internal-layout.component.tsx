import React, {JSX} from "react";
import {Navbar} from "../navbar/navbar.component";
import {Footer} from "../footer/footer.component";

type InternalLayoutProps={
    children:JSX.Element;
}
export const InternalLayout= ({children}:InternalLayoutProps): React.JSX.Element => {
    return (
        <div className="container">
            <header className='header'><Navbar/></header>
            <main className='main'>
                {children}
            </main>
            <Footer/>
        </div>
    );
}
