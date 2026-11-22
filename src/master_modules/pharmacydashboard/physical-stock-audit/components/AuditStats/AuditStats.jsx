import {
    AssignmentTurnedInOutlined,
    PendingActionsOutlined,
    VerifiedOutlined,
    WarningAmberOutlined,
    InsightsOutlined,
} from "@mui/icons-material";

import auditStatsMock from "../../mock/auditStats.mock";

import "./AuditStats.css";

const iconMap = {

    blue: <AssignmentTurnedInOutlined />,

    orange: <PendingActionsOutlined />,

    green: <VerifiedOutlined />,

    red: <WarningAmberOutlined />,

    purple: <InsightsOutlined />,

};

const AuditStats = () => {

    return (

        <div className="audit-stats">

            {

                auditStatsMock.map((item) => (

                    <div

                        key={item.id}

                        className={`audit-stat-card ${item.color}`}

                    >

                        <div className="audit-stat-header">

                            <div className="audit-stat-icon">

                                {iconMap[item.color]}

                            </div>

                            {

                                item.trend && (

                                    <span className="audit-trend">

                                        {item.trend}

                                    </span>

                                )

                            }

                        </div>

                        <h2>

                            {item.value}

                        </h2>

                        <h4>

                            {item.title}

                        </h4>

                        <p>

                            {item.subtitle}

                        </p>

                    </div>

                ))

            }

        </div>

    );

};

export default AuditStats;