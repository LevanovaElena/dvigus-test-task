import React, {useState} from "react";

type FieldFilterProps = {
    value?: string;
    readonly?: boolean;
    label?: string;
    list?: string[];
}
export const InputDropdown = ({value = '', readonly = true, label = '', list = []}: FieldFilterProps): React.JSX.Element => {
    const [isOpened, setIsOpened] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    return (
        <div className="input-field">
            <label className="input-field__label" htmlFor="text">{label}</label>

            <div className={`input-field__icon input-field__icon_arrow ${isOpened ? '' : 'opened'}`}
                 onClick={() => setIsOpened(prevState => !prevState)}>
                <input className="input-field__input input-field__input_dropdown" type="text" placeholder="" value={selectedValue}
                       readOnly={readonly}/>
                {isOpened ? (
                    <ul className='input-field__dropdown'>
                        {list?.map((item,index)=>(
                            <li  key={index} onClick={()=>setSelectedValue(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>) : ''
                }

            </div>
        </div>
    )
}
