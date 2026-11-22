import "./ActivityActions.css";

import {
    VisibilityOutlined,
    ReceiptLongOutlined,
    PrintOutlined,
    ContentCopyOutlined,
} from "@mui/icons-material";

const ActivityActions = ({

    activity,

}) => {

    const handleViewReference = () => {

        console.log(

            "View Reference",

            activity

        );

    };

    const handleOpenReference = () => {

        console.log(

            "Open Related",

            activity

        );

    };

    const handlePrintAudit = () => {

        console.log(

            "Print Audit",

            activity

        );

    };

    const handleCopyReference = async () => {

        if (!activity.referenceNo) return;

        await navigator.clipboard.writeText(

            activity.referenceNo

        );

        alert("Reference copied.");

    };

    return (

        <div className="activity-actions">

            <button

                className="activity-action-btn primary"

                onClick={handleViewReference}

            >

                <VisibilityOutlined/>

                View Reference

            </button>

            <button

                className="activity-action-btn secondary"

                onClick={handleOpenReference}

            >

                <ReceiptLongOutlined/>

                Open Reference

            </button>

            <button

                className="activity-action-btn warning"

                onClick={handlePrintAudit}

            >

                <PrintOutlined/>

                Print Audit

            </button>

            <button

                className="activity-action-btn success"

                onClick={handleCopyReference}

            >

                <ContentCopyOutlined/>

                Copy Ref.

            </button>

        </div>

    );

};

export default ActivityActions;