import "./DocumentStatusChip.css";

import {
    CheckCircleOutlined,
    CloudUploadOutlined,
    PendingActionsOutlined,
    ErrorOutlineOutlined,
    DescriptionOutlined,
} from "@mui/icons-material";

const DocumentStatusChip = ({

    status,

}) => {

    const statusMap = {

        Verified: {

            className: "verified",

            icon: <CheckCircleOutlined fontSize="small" />,

        },

        Uploaded: {

            className: "uploaded",

            icon: <CloudUploadOutlined fontSize="small" />,

        },

        Pending: {

            className: "pending",

            icon: <PendingActionsOutlined fontSize="small" />,

        },

        Missing: {

            className: "missing",

            icon: <ErrorOutlineOutlined fontSize="small" />,

        },

    };

    const currentStatus =

        statusMap[status] ||

        {

            className: "default",

            icon: <DescriptionOutlined fontSize="small" />,

        };

    return (

        <span

            className={`document-status-chip ${currentStatus.className}`}

        >

            {currentStatus.icon}

            {status}

        </span>

    );

};

export default DocumentStatusChip;