import React from "react";
import {FieldFilter} from "../filter-field/filter-field.component";
import {Button} from "../button/button.component";
import {InputField} from "../input/input.component";

type OptionFiltersFlatProps = {
    flat?: string;
}
export const OptionFiltersFlat = ({flat,}: OptionFiltersFlatProps): React.JSX.Element => {
    return (
        <section className='option-filters'>
            <FieldFilter caption={'Адрес и номер дома'}>
                <InputField icon={'place'} label={''} value={'Бунинские Луга, 3.4.1'}/>
            </FieldFilter>
            <FieldFilter caption={'Площадь м²'}>
                <InputField  label={''} value={'38.6'}/>
            </FieldFilter>
            <FieldFilter caption={'Количество комнат'}>
                <></>
            </FieldFilter>
            <Button caption={''} size={'sm'}/>
        </section>
    );
}
