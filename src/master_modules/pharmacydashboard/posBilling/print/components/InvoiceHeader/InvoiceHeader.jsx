import "./InvoiceHeader.css";

const InvoiceHeader = ({

    hospital = {},

    invoice = {},

    branch = {},

    createdBy = {},

}) => {

    const {

        hospitalName = "",

        address = "",

        city = "",

        state = "",

        pincode = "",

        phone = "",

        gstNumber = "",

        drugLicenseNumber = "",

    } = hospital;

    const {

        invoiceNumber = "",

        invoiceDate = "",

        invoiceTime = "",

    } = invoice;

    const {

        branchName = "",

    } = branch;

    const {

        employeeName = "",

    } = createdBy;

    return (

        <section className="thermal-header">

            <h1 className="thermal-hospital-name">

                {hospitalName}

            </h1>

            {

                branchName && (

                    <p className="thermal-center">

                        {branchName}

                    </p>

                )

            }

            <p className="thermal-center">

                {address}

            </p>

            <p className="thermal-center">

                {city}, {state} - {pincode}

            </p>

            <p className="thermal-center">

                Phone : {phone}

            </p>

            {

                gstNumber && (

                    <p className="thermal-center">

                        GSTIN : {gstNumber}

                    </p>

                )

            }

            {

                drugLicenseNumber && (

                    <p className="thermal-center">

                        Drug Lic. : {drugLicenseNumber}

                    </p>

                )

            }

            <div className="thermal-divider" />

            <h2 className="thermal-title">

                TAX INVOICE

            </h2>

            <div className="thermal-divider" />

            <table className="thermal-header-table">

                <tbody>

                    <tr>

                        <td>Invoice</td>

                        <td>:</td>

                        <td>{invoiceNumber}</td>

                    </tr>

                    <tr>

                        <td>Date</td>

                        <td>:</td>

                        <td>{invoiceDate}</td>

                    </tr>

                    <tr>

                        <td>Time</td>

                        <td>:</td>

                        <td>{invoiceTime}</td>

                    </tr>

                    <tr>

                        <td>Cashier</td>

                        <td>:</td>

                        <td>{employeeName}</td>

                    </tr>

                </tbody>

            </table>

            <div className="thermal-divider" />

        </section>

    );

};

export default InvoiceHeader;