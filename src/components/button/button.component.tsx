import React from "react";

type ButtonProps = {
    type?: 'success';
    caption: string;
    size?:'sm'|'md'|'lg';
}
export const Button = ({type = 'success', caption, size='md'}: ButtonProps): React.JSX.Element => {
    return (
        <button className={`button ${type ? 'button-' + type : ''} ${size ? 'button-' + size : ''}`}>
            {caption}
        </button>
    );
}
