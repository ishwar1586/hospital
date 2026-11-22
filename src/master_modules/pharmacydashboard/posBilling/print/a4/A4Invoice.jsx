import "./A4Invoice.css";

import InvoiceHeader from "../components/InvoiceHeader/InvoiceHeader";
import InvoiceCustomer from "../components/InvoiceCustomer/InvoiceCustomer";
import InvoiceMedicineTable from "../components/InvoiceMedicineTable/InvoiceMedicineTable";
import InvoiceSummary from "../components/InvoiceSummary/InvoiceSummary";
import InvoiceFooter from "../components/InvoiceFooter/InvoiceFooter";

const A4Invoice = ({

    saleData = {},

}) => {

    const {

        invoice = {},

        hospital = {},

        branch = {},

        customer = {},

        medicines = [],

        billing = {},

        payment = {},

        gstSummary = {},

        createdBy = {},

    } = saleData;

    return (

        <div className="a4-invoice">

            <InvoiceHeader

                hospital={hospital}
                invoice={invoice}
                branch={branch}

            />

            <InvoiceCustomer

                customer={customer}
                invoice={invoice}
                payment={payment}
                billing={billing}

            />

            <InvoiceMedicineTable

                medicines={medicines}

            />

            <InvoiceSummary

                billing={billing}
                payment={payment}
                gstSummary={gstSummary}

            />

            <InvoiceFooter

                hospital={hospital}
                user={createdBy}
                payment={payment}

            />

        </div>

    );

};

export default A4Invoice;