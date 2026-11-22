// import "./ThermalInvoice.css";

// import InvoiceHeader from "../components/InvoiceHeader/InvoiceHeader";
// import InvoiceCustomer from "../components/InvoiceCustomer/InvoiceCustomer";
// import InvoiceMedicineTable from "../components/InvoiceMedicineTable/InvoiceMedicineTable";
// import InvoiceSummary from "../components/InvoiceSummary/InvoiceSummary";
// import InvoiceFooter from "../components/InvoiceFooter/InvoiceFooter";

// const ThermalInvoice = ({


//     saleData = {},

// }) => {

//     console.log("THERMAL INVOICE DATA");

//     console.log(saleData);

//     const {

//         invoice = {},

//         hospital = {},

//         branch = {},

//         customer = {},

//         medicines = [],

//         billing = {},

//         payment = {},

//         gstSummary = {},

//         createdBy = {},

//     } = saleData;

//     return (

//         <div className="thermal-invoice">

//             <InvoiceHeader

//                 hospital={hospital}

//                 invoice={invoice}

//                 branch={branch}

//             />

//             <InvoiceCustomer

//                 customer={customer}

//                 invoice={invoice}

//                 payment={payment}

//                 billing={billing}

//             />

//             <InvoiceMedicineTable

//                 medicines={medicines}

//             />

//             <InvoiceSummary

//                 billing={billing}

//                 payment={payment}

//                 gstSummary={gstSummary}

//             />

//             <InvoiceFooter

//                 hospital={hospital}

//                 user={createdBy}

//                 payment={payment}

//             />

//         </div>

//     );

// };

// export default ThermalInvoice;





import "./ThermalInvoice.css";

import InvoiceHeader from "../components/InvoiceHeader/InvoiceHeader";
import InvoiceCustomer from "../components/InvoiceCustomer/InvoiceCustomer";
import InvoiceMedicineTable from "../components/InvoiceMedicineTable/InvoiceMedicineTable";
import InvoiceSummary from "../components/InvoiceSummary/InvoiceSummary";
import InvoiceFooter from "../components/InvoiceFooter/InvoiceFooter";

const ThermalInvoice = ({ saleData = {} }) => {

    return (

        <div className="thermal-invoice">

            <InvoiceHeader

                hospital={saleData.hospital}

                invoice={saleData.invoice}

                branch={saleData.branch}

                createdBy={saleData.createdBy}

            />

            <InvoiceCustomer

                customer={saleData.customer}

            />

            <InvoiceMedicineTable

                medicines={saleData.medicines || []}

            />

            <InvoiceSummary

                billing={saleData.billing}

                payment={saleData.payment}

                gstSummary={saleData.gstSummary}

            />

            <InvoiceFooter

                hospital={saleData.hospital}

                payment={saleData.payment}

                createdBy={saleData.createdBy}

            />

        </div>

    );

};

export default ThermalInvoice;