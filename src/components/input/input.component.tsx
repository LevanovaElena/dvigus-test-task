import React from "react";

type FieldFilterProps = {
    value?: string;
    icon?: 'none'|'place';
    readonly?: boolean;
    label?:string
}
export const InputField = ({value = '', icon='none', readonly = true,label=''}: FieldFilterProps): React.JSX.Element => {
    return (
        <div className="input-field">
            <label className="input-field__label" htmlFor="text">{label}</label>
            <div className={`input-field__icon ${icon?"input-field__icon_"+icon:''}`}>
                <input className="input-field__input" type="text" placeholder="" value={value} readOnly={readonly}/>
            </div>
        </div>
    )
}
