import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import auditNotesMock from "../../mock/auditNotes.mock";

import "./AuditNotes.css";

const AuditNotes = () => {

    return (

        <div className="audit-notes-card">

            <div className="audit-section-header">

                <h3>

                    Audit Notes

                </h3>

            </div>

            <div className="audit-notes-list">

                {

                    auditNotesMock.map((item)=>(

                        <div

                            key={item.id}

                            className="audit-note-item"

                        >

                            <div className="audit-note-icon">

                                <ChatBubbleOutlineOutlinedIcon/>

                            </div>

                            <div className="audit-note-content">

                                <div className="audit-note-top">

                                    <h4>

                                        {item.author}

                                    </h4>

                                    <span>

                                        {item.role}

                                    </span>

                                </div>

                                <p>

                                    {item.note}

                                </p>

                                <small>

                                    {item.date}

                                </small>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AuditNotes;