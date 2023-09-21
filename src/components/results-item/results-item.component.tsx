import React from "react";

type ResultsItemProps = {
    caption: string;
    result: string;
    text: string
}
export const ResultsItem = ({caption, result, text}: ResultsItemProps): React.JSX.Element => {
    return (
        <div className="results-item">
            <p>{caption}</p>
            <h2>{result}</h2>
            <p>{text}</p>
        </div>
    );
}
