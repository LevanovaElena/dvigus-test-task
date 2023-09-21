import React from "react";
import {InternalLayout} from "../../components/internal-layout/internal-layout.component";
import {Banner} from "../../components/banner/banner.component";
import {OptionFiltersFlat} from "../../components/option-filters-flat/option-filters-flat.component";
import {Results} from "../../components/results/results.component";
export const PageValuation= (): React.JSX.Element => {
    return (
        <InternalLayout>
           <>
               <Banner>
                   <OptionFiltersFlat/>
               </Banner>
               <Results/>
           </>
        </InternalLayout>
    );
}
