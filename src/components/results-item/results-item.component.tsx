import React from "react";

type ResultsItemProps = {
    caption: string;
    result: string;
    text: string;
    type?:'warning'
}
export const ResultsItem = ({caption, result, text,type}: ResultsItemProps): React.JSX.Element => {
    return (
        <div className="results-item">
            <p className='results-item__caption'>{caption}</p>
            <h2 className={type?type:''}>{result}</h2>
            <p className='results-item__text'>{text}</p>
        </div>
    );
}
