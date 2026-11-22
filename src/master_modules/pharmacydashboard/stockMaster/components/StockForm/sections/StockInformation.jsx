import FormSection from "@/master_modules/pharmacydashboard/stockMaster/components/StockForm/components/FormSection.jsx";

import { stockFormConfig } from "../config/stockFormConfig";

const StockInformation = (props) => {

    return (

        <FormSection

            title="Stock Information"

            fields={

                stockFormConfig.stockInformation

            }

            {...props}

        />

    );

};

export default StockInformation;