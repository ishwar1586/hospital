import {
    MoreVertOutlined,
    VisibilityOutlined,
} from "@mui/icons-material";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import ExpiryStatusChip from "../ExpiryStatusChip/ExpiryStatusChip";

const ExpiryRow = ({

    medicine,

    onView,

}) => {

    return (

        <tr>

            <td>{medicine.id}</td>

            <td>

                <div className="medicine-info">

                    <h4>

                        {medicine.medicineName}

                    </h4>

                    <span>

                        {medicine.genericName}

                    </span>

                </div>

            </td>

            <td>

                {medicine.batchNo}

            </td>

            <td>

                {medicine.category}

            </td>

            <td>

                {medicine.manufacturer}

            </td>

            <td>

                {medicine.expiryDate}

            </td>

            <td>

                <span
                    className={
                        medicine.daysLeft < 0
                            ? "expired-days"
                            : "remaining-days"
                    }
                >

                    {

                        medicine.daysLeft < 0

                            ? `${Math.abs(medicine.daysLeft)} Days Ago`

                            : `${medicine.daysLeft} Days`

                    }

                </span>

            </td>

            <td>

                {medicine.stockQty}

            </td>

            <td>

                {medicine.unit}

            </td>

            <td>

                ₹{medicine.stockValue.toLocaleString()}

            </td>

            <td>

                <ExpiryStatusChip

                    status={medicine.status}

                />

            </td>

            <td>

                <div className="expiry-table-actions">

                    <Tooltip title="View">

                        <IconButton

                            onClick={() =>

                                onView(medicine)

                            }

                        >

                            <VisibilityOutlined />

                        </IconButton>

                    </Tooltip>

                    <Tooltip title="More">

                        <IconButton>

                            <MoreVertOutlined />

                        </IconButton>

                    </Tooltip>

                </div>

            </td>

        </tr>

    );

};

export default ExpiryRow;