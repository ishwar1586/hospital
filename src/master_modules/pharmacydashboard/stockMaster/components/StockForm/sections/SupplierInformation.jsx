import FormSection from "@/master_modules/pharmacydashboard/stockMaster/components/StockForm/components/FormSection.jsx";

import { stockFormConfig } from "../config/stockFormConfig";

const SupplierInformation = (props) => {

    return (

        <FormSection

            title="Supplier Information"

            fields={

                stockFormConfig.supplierInformation

            }

            {...props}

        />

    );

};

export default SupplierInformation;