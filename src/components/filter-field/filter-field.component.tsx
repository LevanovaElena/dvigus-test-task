import React, {JSX} from "react";

type FieldFilterProps = {
    caption: string;
    children?: JSX.Element;
    line?: 'left' | 'right'|'none'
}
export const FieldFilter = ({caption, children, line}: FieldFilterProps): React.JSX.Element => {
    return (
        <div className={`field-filter ${line ? 'filter-line-' + line : ''}`}>
            <div className='field-filter__caption'><span>{caption}</span></div>
            <div className='field-filter__children'>{children}</div>
        </div>
    );
}
