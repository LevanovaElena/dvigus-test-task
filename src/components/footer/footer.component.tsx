import React from "react";
import {Logo} from "../logo/logo.component";
export const Footer= (): React.JSX.Element => {
    return (
        <footer className='footer'>
            <Logo size={'sm'}/>
            <div className='footer__text'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                </p>
                <p></p>
                <p>
                    Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                </p>
            </div>
        </footer>
    );
}
