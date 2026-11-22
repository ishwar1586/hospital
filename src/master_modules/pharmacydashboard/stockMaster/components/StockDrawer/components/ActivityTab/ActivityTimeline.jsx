import "./ActivityTimeline.css";

import ActivityItem from "./ActivityItem";

const ActivityTimeline = ({

    activities = [],

}) => {

    if (!activities.length) {

        return (

            <div className="activity-empty">

                No Activity Found.

            </div>

        );

    }

    return (

        <div className="activity-timeline">

            {

                activities.map(

                    (activity, index) => (

                        <ActivityItem

                            key={activity.id}

                            activity={activity}

                            isLast={

                                index ===

                                activities.length - 1

                            }

                        />

                    )

                )

            }

        </div>

    );

};

export default ActivityTimeline;