import AuditStatusChip from "../AuditStatusChip/AuditStatusChip";

import "./AuditOverview.css";

const AuditOverview = ({ data }) => {

    return (

        <div className="audit-overview-card">

            <div className="audit-overview-header">

                <h3>

                    Audit Overview

                </h3>

                <AuditStatusChip

                    status={data.status}

                />

            </div>

            <div className="audit-overview-grid">

                <div className="audit-overview-item">

                    <label>

                        Audit No.

                    </label>

                    <span>

                        {data.auditNo}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Audit Type

                    </label>

                    <span>

                        {data.auditType}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Audit Date

                    </label>

                    <span>

                        {data.auditDate}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Auditor

                    </label>

                    <span>

                        {data.auditor}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Store

                    </label>

                    <span>

                        {data.store}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Start Time

                    </label>

                    <span>

                        {data.startTime}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Completed At

                    </label>

                    <span>

                        {data.completedTime}

                    </span>

                </div>

                <div className="audit-overview-item">

                    <label>

                        Total Duration

                    </label>

                    <span>

                        {data.duration}

                    </span>

                </div>

            </div>

        </div>

    );

};

export default AuditOverview;