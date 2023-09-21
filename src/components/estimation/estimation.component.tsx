import React, {useState} from "react";


type EstimationProps = {
    result: number;
    caption: string;
    text: string;
}

const getEstimationColor = (result: number) => {
    switch (result) {
        case 4:
            return 'warning';
        case 3:
            return 'success';
        default:
            return 'warning';
    }
}
export const Estimation = ({result, caption, text}: EstimationProps): React.JSX.Element => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="estimation">
            <header>
                <div className={`estimation__result ${getEstimationColor}`}>{result}</div>
                <div className={`estimation__caption `}>{caption}</div>
                <button className={`estimation__button ${isOpened}`} onClick={()=>setIsOpened(prevState => !prevState)}></button>
            </header>
            {isOpened ?
                <div className='estimation__text'>
                    <p>{text}</p>
                </div> : null
            }
        </div>
    );
}
