import "./ActivityDetails.css";

import ActivityActions from "./ActivityActions";

const ActivityDetails = ({

    details = {},

    activity = {},

}) => {

    const entries = Object.entries(details);

    if (!entries.length) {

        return (

            <div className="activity-details-empty">

                No additional details available.

            </div>

        );

    }

    return (

        <>

            <div className="activity-details">

                {

                    entries.map(

                        ([label, value]) => (

                            <div

                                key={label}

                                className="activity-detail-item"

                            >

                                <div className="activity-detail-label">

                                    {label}

                                </div>

                                <div className="activity-detail-value">

                                    {value || "--"}

                                </div>

                            </div>

                        )

                    )

                }

            </div>

            <ActivityActions

                activity={activity}

            />

        </>

    );

};

export default ActivityDetails;