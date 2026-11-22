import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import auditStatus from "../../config/auditStatus";

import "./AuditStatusChip.css";

const iconMap = {

    success: <CheckCircleOutlineOutlinedIcon fontSize="small" />,

    warning: <PendingActionsOutlinedIcon fontSize="small" />,

    danger: <WarningAmberOutlinedIcon fontSize="small" />,

    secondary: <CancelOutlinedIcon fontSize="small" />,

};

const AuditStatusChip = ({ status }) => {

    const currentStatus = auditStatus[status] || {

        label: status,

        color: "secondary",

    };

    return (

        <span

            className={`audit-status-chip ${currentStatus.color}`}

        >

            {iconMap[currentStatus.color]}

            {currentStatus.label}

        </span>

    );

};

export default AuditStatusChip;