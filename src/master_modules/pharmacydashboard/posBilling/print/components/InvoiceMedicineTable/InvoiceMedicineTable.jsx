import "./InvoiceMedicineTable.css";

const formatCurrency = (value = 0) => {

    return `₹${Number(value).toFixed(2)}`;

};

const InvoiceMedicineTable = ({

    medicines = [],

}) => {

    return (

        <section className="thermal-medicine">

            <h3 className="thermal-section-title">

                MEDICINES

            </h3>

            <div className="thermal-divider" />

            {

                medicines.length === 0 && (

                    <p className="thermal-empty">

                        No Medicines

                    </p>

                )

            }

            {

                medicines.map((medicine, index) => (

                    <div

                        key={`${medicine.medicineId || index}-${medicine.batchNo}`}

                        className="thermal-medicine-item"

                    >

                        <div className="medicine-index">

                            {index + 1}.

                        </div>

                        <div className="medicine-content">

                            <div className="medicine-name">

                                {medicine.medicineName}

                            </div>

                            {

                                medicine.strength && (

                                    <div className="medicine-strength">

                                        {medicine.strength}

                                    </div>

                                )

                            }

                            <table className="medicine-details">

                                <tbody>

                                    <tr>

                                        <td>Batch</td>

                                        <td>:</td>

                                        <td>

                                            {medicine.batchNo || "-"}

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>Expiry</td>

                                        <td>:</td>

                                        <td>

                                            {medicine.expiryDate || "-"}

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>Qty</td>

                                        <td>:</td>

                                        <td>

                                            {medicine.quantity}

                                            {" × "}

                                            {

                                                formatCurrency(

                                                    medicine.sellingPrice

                                                )

                                            }

                                        </td>

                                    </tr>

                                    <tr>

                                        <td>GST</td>

                                        <td>:</td>

                                        <td>

                                            {

                                                medicine.gstPercentage || 0

                                            }%

                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                            <div className="medicine-total">

                                Total

                                <span>

                                    {

                                        formatCurrency(

                                            medicine.lineTotal

                                        )

                                    }

                                </span>

                            </div>

                        </div>

                    </div>

                ))

            }

            <div className="thermal-divider" />

        </section>

    );

};

export default InvoiceMedicineTable;