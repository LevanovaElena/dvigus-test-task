import React, {useEffect,  useRef, useState} from "react";


type EstimationProps = {
    result: number;
    caption: string;
    text: string;
    className?:string;
    name:string
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
export const Estimation = ({result, caption, text,className,name}: EstimationProps): React.JSX.Element => {
    const [isOpened, setIsOpened] = useState(false);
    const ref=useRef<HTMLParagraphElement>(null);
    useEffect(() => {
        // @ts-ignore
        if(window.estimates&&window.replace) replace('district','realty_complex','flat',window.estimates);
        // @ts-ignore
        if(!window.estimates) getData('district','realty_complex','flat');
    }, [isOpened]);
    return (
        <div className={`estimation ${className?className:''}`}>
            <div className={`estimation__result ${getEstimationColor(result)}`}>{result}</div>
            <div className={`estimation__caption `}>{caption}</div>
            <button className={`estimation__button ${isOpened ? 'opened' : ''}`}
                    onClick={() => setIsOpened(prevState => !prevState)}></button>
            {isOpened ?
                <div className='estimation__text'>
                    <p ref={ref} id={name}></p>
                </div> : null
            }
        </div>
    );
}
