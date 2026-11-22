import {
    CloudUploadOutlined,
    DescriptionOutlined,
    DeleteOutlineOutlined,
} from "@mui/icons-material";

const uploadedDocuments = [

    {
        id:1,
        name:"Purchase Invoice.pdf",
        size:"2.4 MB",
    },

    {
        id:2,
        name:"Drug License.pdf",
        size:"1.1 MB",
    },

];

const DocumentUpload = () => {

    return (

        <div className="stock-form-section">

            <div className="stock-form-section-header">

                <h3>

                    Document Upload

                </h3>

            </div>

            <div className="stock-form-section-body">

                <div className="document-upload-box">

                    <CloudUploadOutlined/>

                    <h4>

                        Upload Documents

                    </h4>

                    <p>

                        Drag & Drop files here

                    </p>

                    <button

                        type="button"

                        className="btn btn-primary"

                    >

                        Browse Files

                    </button>

                </div>

                <div className="uploaded-documents">

                    {

                        uploadedDocuments.map((doc)=>(

                            <div

                                key={doc.id}

                                className="uploaded-document"

                            >

                                <div className="uploaded-document-info">

                                    <DescriptionOutlined/>

                                    <div>

                                        <h5>

                                            {doc.name}

                                        </h5>

                                        <span>

                                            {doc.size}

                                        </span>

                                    </div>

                                </div>

                                <button

                                    type="button"

                                    className="document-delete-btn"

                                >

                                    <DeleteOutlineOutlined/>

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

        </div>

    );

};

export default DocumentUpload;