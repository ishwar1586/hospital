import "./InvoiceCustomer.css";

const InvoiceCustomer = ({

    customer = {},

}) => {

    const {

        customerName = "Cash Customer",

        customerType = "CASH CUSTOMER",

        patientId = "",

        uhid = "",

        age = "",

        gender = "",

        mobile = "",

        email = "",

        address = "",

        doctorName = "",

    } = customer;

    return (

        <section className="thermal-customer">

            <h3 className="thermal-section-title">

                CUSTOMER DETAILS

            </h3>

            <div className="thermal-divider" />

            <table className="thermal-customer-table">

                <tbody>

                    <tr>

                        <td>Name</td>

                        <td>:</td>

                        <td>{customerName}</td>

                    </tr>

                    <tr>

                        <td>Type</td>

                        <td>:</td>

                        <td>{customerType}</td>

                    </tr>

                    {

                        patientId && (

                            <tr>

                                <td>Patient ID</td>

                                <td>:</td>

                                <td>{patientId}</td>

                            </tr>

                        )

                    }

                    {

                        uhid && (

                            <tr>

                                <td>UHID</td>

                                <td>:</td>

                                <td>{uhid}</td>

                            </tr>

                        )

                    }

                    {

                        (age || gender) && (

                            <tr>

                                <td>Age/Gender</td>

                                <td>:</td>

                                <td>

                                    {age || "-"} / {gender || "-"}

                                </td>

                            </tr>

                        )

                    }

                    {

                        mobile && (

                            <tr>

                                <td>Mobile</td>

                                <td>:</td>

                                <td>{mobile}</td>

                            </tr>

                        )

                    }

                    {

                        email && (

                            <tr>

                                <td>Email</td>

                                <td>:</td>

                                <td>{email}</td>

                            </tr>

                        )

                    }

                    {

                        address && (

                            <tr>

                                <td>Address</td>

                                <td>:</td>

                                <td>{address}</td>

                            </tr>

                        )

                    }

                    {

                        doctorName && (

                            <tr>

                                <td>Doctor</td>

                                <td>:</td>

                                <td>{doctorName}</td>

                            </tr>

                        )

                    }

                </tbody>

            </table>

            <div className="thermal-divider" />

        </section>

    );

};

export default InvoiceCustomer;