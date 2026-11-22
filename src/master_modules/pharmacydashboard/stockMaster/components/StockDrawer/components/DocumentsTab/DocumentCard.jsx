import "./DocumentCard.css";

import {
    DescriptionOutlined,
    VisibilityOutlined,
    DownloadOutlined,
    PrintOutlined,
    CalendarTodayOutlined,
    PersonOutlineOutlined,
    InsertDriveFileOutlined,
} from "@mui/icons-material";

import DocumentStatusChip from "./DocumentStatusChip";
import DocumentActionMenu from "./DocumentActionMenu";

const DocumentCard = ({

    document,

}) => {

    return (

        <div className="document-card">

            {/* ================================= */}

            {/* <div className="document-card-header">

                <div className="document-icon">

                    <DescriptionOutlined />

                </div>

                <div className="document-header-content">

                    <h3>

                        {document.documentName}

                    </h3>

                    <p>

                        {document.fileName}

                    </p>

                </div>

                <DocumentStatusChip

                    status={document.status}

                />

            </div> */}


            <div className="document-card-header">

    <div className="document-icon">

        <DescriptionOutlined/>

    </div>

    <div className="document-header-content">

        <h3>

            {document.documentName}

        </h3>

        <p>

            {document.fileName}

        </p>

    </div>

    <DocumentStatusChip

        status={document.status}

    />

    <DocumentActionMenu

        document={document}

    />

</div>

            {/* ================================= */}

            <div className="document-card-body">

                <div className="document-info">

                    <CalendarTodayOutlined />

                    <span>

                        Uploaded :

                        {document.uploadedOn}

                    </span>

                </div>

                <div className="document-info">

                    <PersonOutlineOutlined />

                    <span>

                        By :

                        {document.uploadedBy}

                    </span>

                </div>

                <div className="document-info">

                    <InsertDriveFileOutlined />

                    <span>

                        Size :

                        {document.size}

                    </span>

                </div>

                <div className="document-info">

                    <DescriptionOutlined />

                    <span>

                        Invoice :

                        {document.invoiceNo}

                    </span>

                </div>

            </div>

            {/* ================================= */}

            {/* <div className="document-card-footer">

                <button className="document-btn preview">

                    <VisibilityOutlined />

                    Preview

                </button>

                <button className="document-btn download">

                    <DownloadOutlined />

                    Download

                </button>

                <button className="document-btn print">

                    <PrintOutlined />

                    Print

                </button>

            </div> */}

        </div>

    );

};

export default DocumentCard;