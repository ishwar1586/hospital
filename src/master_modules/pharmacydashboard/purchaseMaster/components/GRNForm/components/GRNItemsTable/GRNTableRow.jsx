import { DeleteOutlined } from "@mui/icons-material";

import "./GRNTableRow.css";

const GRNTableRow = ({
    item,
    items,
    setItems,
}) => {

    const handleChange = (
        field,
        value
    ) => {

        const updatedItems =
            items.map((row) => {

                if (row.id !== item.id)
                    return row;

                const updatedRow = {

                    ...row,

                    [field]: value,

                };

                const qty =
                    Number(
                        updatedRow.receivedQty || 0
                    );

                const rate =
                    Number(
                        updatedRow.rate || 0
                    );

                const discount =
                    Number(
                        updatedRow.discount || 0
                    );

                const gst =
                    Number(
                        updatedRow.gst || 0
                    );

                const subTotal =
                    qty * rate;

                const discountAmount =
                    (subTotal * discount) / 100;

                const taxable =
                    subTotal - discountAmount;

                const gstAmount =
                    (taxable * gst) / 100;

                updatedRow.amount =
                    taxable + gstAmount;

                return updatedRow;

            });

        setItems(updatedItems);

    };

    const handleDelete = () => {

        setItems(

            items.filter(
                row =>
                    row.id !== item.id
            )

        );

    };

    return (

        <tr>

            <td>

                <input

                    type="text"

                    value={
                        item.medicineName
                    }

                    onChange={(e) =>
                        handleChange(
                            "medicineName",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="text"

                    value={
                        item.batchNo
                    }

                    onChange={(e) =>
                        handleChange(
                            "batchNo",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="date"

                    value={
                        item.expiryDate
                    }

                    onChange={(e) =>
                        handleChange(
                            "expiryDate",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="text"

                    value={
                        item.hsnCode
                    }

                    onChange={(e) =>
                        handleChange(
                            "hsnCode",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="text"

                    value={
                        item.unit
                    }

                    onChange={(e) =>
                        handleChange(
                            "unit",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                {item.poQty}

            </td>

            <td>

                <input

                    type="number"

                    value={
                        item.receivedQty
                    }

                    onChange={(e) =>
                        handleChange(
                            "receivedQty",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="number"

                    value={
                        item.rate
                    }

                    onChange={(e) =>
                        handleChange(
                            "rate",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="number"

                    value={
                        item.discount
                    }

                    onChange={(e) =>
                        handleChange(
                            "discount",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                <input

                    type="number"

                    value={
                        item.gst
                    }

                    onChange={(e) =>
                        handleChange(
                            "gst",
                            e.target.value
                        )
                    }

                />

            </td>

            <td>

                ₹{" "}

                {Number(
                    item.amount || 0
                ).toLocaleString(
                    "en-IN",
                    {
                        minimumFractionDigits: 2,
                    }
                )}

            </td>

            <td>

                <button

                    className="delete-row-btn"

                    onClick={
                        handleDelete
                    }

                >

                    <DeleteOutlined />

                </button>

            </td>

        </tr>

    );

};

export default GRNTableRow;