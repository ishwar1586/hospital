import { useMemo, useState } from "react";

import "./ActivityTab.css";

import {
    SearchOutlined,
    FilterAltOutlined,
    RestartAltOutlined,
} from "@mui/icons-material";

import ActivityTimeline from "./ActivityTimeline";

import { activityMock }
from "../../mock/activity.mock";

const ActivityTab = () => {

    const [search, setSearch] =
        useState("");

    const [activityType, setActivityType] =
        useState("All");

    /* ===================================== */

    const filteredActivities =

        useMemo(() => {

            return activityMock.filter((item) => {

                const keyword =

                    search.toLowerCase();

                const matchSearch =

                    item.title
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    item.description
                        .toLowerCase()
                        .includes(keyword)

                    ||

                    item.user
                        .toLowerCase()
                        .includes(keyword);

                const matchType =

                    activityType === "All"

                    ||

                    item.type === activityType;

                return (

                    matchSearch &&

                    matchType

                );

            });

        }, [

            search,

            activityType,

        ]);

    /* ===================================== */

    const handleReset = () => {

        setSearch("");

        setActivityType("All");

    };

    return (

        <div className="activity-tab">

            {/* ================================= */}

            <div className="activity-toolbar">

                {/* Search */}

                <div className="activity-search">

                    <SearchOutlined/>

                    <input

                        type="text"

                        placeholder="Search activity..."

                        value={search}

                        onChange={(e)=>

                            setSearch(

                                e.target.value

                            )

                        }

                    />

                </div>

                {/* Filter */}

                <div className="activity-filter">

                    <FilterAltOutlined/>

                    <select

                        value={activityType}

                        onChange={(e)=>

                            setActivityType(

                                e.target.value

                            )

                        }

                    >

                        <option>

                            All

                        </option>

                        <option>

                            Stock Created

                        </option>

                        <option>

                            Purchase

                        </option>

                        <option>

                            Adjustment

                        </option>

                        <option>

                            Transfer

                        </option>

                        <option>

                            Price Updated

                        </option>

                        <option>

                            Document Uploaded

                        </option>

                        <option>

                            Barcode Printed

                        </option>

                        <option>

                            Expired

                        </option>

                    </select>

                </div>

                {/* Reset */}

                <button

                    className="activity-reset-btn"

                    onClick={handleReset}

                >

                    <RestartAltOutlined/>

                    Reset

                </button>

            </div>

            {/* ================================= */}

            <ActivityTimeline

                activities={

                    filteredActivities

                }

            />

        </div>

    );

};

export default ActivityTab;