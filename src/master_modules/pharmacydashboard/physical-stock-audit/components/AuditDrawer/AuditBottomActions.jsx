import {
    PrintOutlined,
    PictureAsPdfOutlined,
    FileDownloadOutlined,
    CloseOutlined,
} from "@mui/icons-material";

import "./AuditBottomActions.css";

// const AuditBottomActions = ({

//     data,

const AuditBottomActions = ({

    data,

    onClose,


}) => {

    const handlePrint = () => {

        console.log("Print Audit", data);

    };

    const handleExportPDF = () => {

        console.log("Export PDF", data);

    };

    const handleExportExcel = () => {

        console.log("Export Excel", data);

    };

    return (

        <div className="audit-bottom-actions">

            <button

                type="button"

                className="audit-action-btn print"

                onClick={handlePrint}

            >

                <PrintOutlined />

                Print Report

            </button>

            <button

                type="button"

                className="audit-action-btn pdf"

                onClick={handleExportPDF}

            >

                <PictureAsPdfOutlined />

                Export PDF

            </button>

            <button

                type="button"

                className="audit-action-btn excel"

                onClick={handleExportExcel}

            >

                <FileDownloadOutlined />

                Export Excel

            </button>

            <button

                type="button"

                className="audit-action-btn close"

                // onClick={() => window.history.back()}

                onClick={onClose}

            >

                <CloseOutlined />

                Close

            </button>

        </div>

    );

};

export default AuditBottomActions;