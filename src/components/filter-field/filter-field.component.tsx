import React, {JSX} from "react";

type FieldFilterProps = {
    caption: string;
    className?: string;
    children?: JSX.Element;
    line?: 'left' | 'right'|'none'
}
export const FieldFilter = ({caption, children, line,className}: FieldFilterProps): React.JSX.Element => {
    return (
        <div className={`field-filter ${line ? 'filter-line-' + line : ''} ${className ? 'filter-line-' + className : ''}`}>
            <div className='field-filter__caption'><span>{caption}</span></div>
            <div className='field-filter__children'>{children}</div>
        </div>
    );
}
