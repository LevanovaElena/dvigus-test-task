import React from "react";

type ButtonProps = {
    type?: 'success';
    caption: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: 'search';
    onClick?: () => void;
}
export const Button = ({
                           type = 'success',
                           caption,
                           size = 'md',
                           icon,
                           onClick = () => {
                               console.log('Click!')
                           }
                       }: ButtonProps): React.JSX.Element => {
    return (
        <button className={`button ${type ? 'button-' + type : ''} ${size ? 'button-' + size : ''} ${icon ? 'button-icon-' + icon : ""}`}
                onClick={onClick}>
            {caption}
        </button>
    );
}
