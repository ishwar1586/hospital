import { useState } from "react";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import ActivityDetails from "./ActivityDetails";


import "./ActivityItem.css";

import {
    PersonOutlineOutlined,
    CalendarTodayOutlined,
    AccessTimeOutlined,
} from "@mui/icons-material";

import ActivityIcon from "./ActivityIcon";

const ActivityItem = ({

    activity,

    isLast = false,

}) => {

    const [expanded, setExpanded] =

        useState(false);

    return (

        <div className="activity-item">

            {/* ================================= */}
            {/* Timeline */}
            {/* ================================= */}

            <div className="activity-left">

                <ActivityIcon

                    type={activity.type}

                />

                {

                    !isLast && (

                        <div className="activity-line" />

                    )

                }

            </div>

            {/* ================================= */}
            {/* Card */}
            {/* ================================= */}

            <div className="activity-content">

                <div className="activity-header">

                    <h4>

                        {activity.title}

                    </h4>

                    <button

                        className="activity-expand-btn"

                        onClick={() =>

                            setExpanded(!expanded)

                        }

                    >

                        <ExpandMoreOutlinedIcon

                            className={expanded ? "rotate" : ""}

                        />

                    </button>

                </div>

                <p className="activity-description">

                    {activity.description}

                </p>

                {

                    expanded && (

                        // <ActivityDetails

                        //     details={activity.details}

                        // />

                        <ActivityDetails

                            activity={activity}

                            details={activity.details}

                        />

                    )

                }

                <div className="activity-meta">

                    <div className="activity-meta-item">

                        <PersonOutlineOutlined />

                        <span>

                            {activity.user}

                        </span>

                    </div>

                    <div className="activity-meta-item">

                        <CalendarTodayOutlined />

                        <span>

                            {activity.date}

                        </span>

                    </div>

                    <div className="activity-meta-item">

                        <AccessTimeOutlined />

                        <span>

                            {activity.time}

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default ActivityItem;