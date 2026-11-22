import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import auditAttachmentsMock from "../../mock/auditAttachments.mock";

import "./AuditAttachment.css";

const getIcon = (type) => {

    switch (type) {

        case "PDF":
            return <DescriptionOutlinedIcon />;

        case "Excel":
            return <InsertDriveFileOutlinedIcon />;

        case "Image":
            return <ImageOutlinedIcon />;

        default:
            return <InsertDriveFileOutlinedIcon />;
    }

};

const AuditAttachment = () => {

    return (

        <div className="audit-attachment-card">

            <div className="audit-section-header">

                <h3>

                    Attachments

                </h3>

                <span>

                    {auditAttachmentsMock.length} Files

                </span>

            </div>

            <div className="attachment-list">

                {

                    auditAttachmentsMock.map((file)=>(

                        <div

                            key={file.id}

                            className="attachment-item"

                        >

                            <div className="attachment-left">

                                <div className="attachment-icon">

                                    {getIcon(file.fileType)}

                                </div>

                                <div>

                                    <h4>

                                        {file.fileName}

                                    </h4>

                                    <p>

                                        {file.fileSize} • {file.uploadedBy}

                                    </p>

                                    <span>

                                        {file.uploadedAt}

                                    </span>

                                </div>

                            </div>

                            <button

                                className="attachment-download-btn"

                            >

                                <DownloadOutlinedIcon />

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AuditAttachment;