import React from "react";
import {FieldFilter} from "../filter-field/filter-field.component";
import {Button} from "../button/button.component";
import {InputField} from "../input/input.component";
import {InputDropdown} from "../input-dropdown/input-dropdown.component";

type OptionFiltersFlatProps = {
    flat?: string;
}
export const OptionFiltersFlat = ({flat,}: OptionFiltersFlatProps): React.JSX.Element => {
    return (
        <section className='option-filters'>
            <div className='option-filters__adress'>
                <FieldFilter caption={'Адрес и номер дома'} line={'right'} >
                    <InputField icon={'place'} label={''} value={'Бунинские Луга, 3.4.1'}/>
                </FieldFilter>
            </div>
            <div className='option-filters__squere'>
            <FieldFilter caption={'Площадь м²'} line={'right'} className='w-30'>
                <InputField label={''} value={'38.6'}/>
            </FieldFilter>
            </div>
                <div className='option-filters__rooms'>
            <FieldFilter caption={'Количество комнат'} className='w-20'>
                <InputDropdown value={'2'} list={['1', '2', '3', '4']}/>
            </FieldFilter>
                </div>
            <div className='option-filters__button'><Button caption={''} size={'sm'} icon='search'/></div>

        </section>
    );
}
