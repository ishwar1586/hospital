import "./ReturnReceipt.css";

const formatCurrency = (amount = 0) => {

    return `₹${Number(amount).toFixed(2)}`;

};

const ReturnReceipt = ({ data }) => {

    if (!data) return null;

    return (

        <div className="return-receipt">

            <div className="receipt-header">

                <h2>SALES RETURN RECEIPT</h2>

            </div>

            <div className="receipt-divider" />

            <div className="receipt-info">

                <p>

                    <strong>Return No :</strong>

                    {data.returnNumber}

                </p>

                <p>

                    <strong>Invoice No :</strong>

                    {data.invoiceNumber}

                </p>

                <p>

                    <strong>Return Date :</strong>

                    {data.returnDate}

                </p>

                <p>

                    <strong>Patient :</strong>

                    {data.patientName}

                </p>

            </div>

            <div className="receipt-divider" />

            <table className="receipt-table">

                <thead>

                    <tr>

                        <th>Medicine</th>

                        <th>Qty</th>

                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        data.medicines.map((medicine,index)=>(

                            <tr key={index}>

                                <td>

                                    {medicine.medicineName}

                                </td>

                                <td>

                                    {medicine.returnQty}

                                </td>

                                <td>

                                    {formatCurrency(medicine.amount)}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

            <div className="receipt-divider" />

            <div className="receipt-total">

                <span>

                    Refund Amount

                </span>

                <strong>

                    {formatCurrency(data.summary.refund)}

                </strong>

            </div>

            <div className="receipt-divider" />

            <div className="receipt-footer">

                <p>

                    Thank You

                </p>

                <p>

                    Sales Return Receipt

                </p>

            </div>

        </div>

    );

};

export default ReturnReceipt;