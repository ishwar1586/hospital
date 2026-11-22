import FormSection from "@/master_modules/pharmacydashboard/stockMaster/components/StockForm/components/FormSection.jsx";

import { stockFormConfig } from "../config/stockFormConfig";

const PricingInformation = (props) => {

    return (

        <FormSection

            title="Pricing Information"

            fields={

                stockFormConfig.pricingInformation

            }

            {...props}

        />

    );

};

export default PricingInformation;