import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

import auditActivityMock from "../../mock/auditActivity.mock";

import "./AuditActivityTimeline.css";

const AuditActivityTimeline = () => {

    return (

        <div className="audit-activity-card">

            <h3>

                Activity Timeline

            </h3>

            <div className="audit-timeline">

                {

                    auditActivityMock.map((item) => (

                        <div

                            key={item.id}

                            className="timeline-item"

                        >

                            <div className="timeline-icon">

                                <CheckCircleOutlineOutlinedIcon />

                            </div>

                            <div className="timeline-content">

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    {item.description}

                                </p>

                                <span>

                                    {item.dateTime}

                                </span>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default AuditActivityTimeline;