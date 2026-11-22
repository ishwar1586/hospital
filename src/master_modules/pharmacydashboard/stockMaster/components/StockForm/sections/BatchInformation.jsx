import FormSection from "@/master_modules/pharmacydashboard/stockMaster/components/StockForm/components/FormSection.jsx";

import { stockFormConfig } from "../config/stockFormConfig";

const BatchInformation = (props) => {

    return (

        <FormSection

            title="Batch Information"

            fields={

                stockFormConfig.batchInformation

            }

            {...props}

        />

    );

};

export default BatchInformation;