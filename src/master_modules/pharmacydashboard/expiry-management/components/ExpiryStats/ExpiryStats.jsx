import {
    AssessmentOutlined,
    DownloadOutlined,
    SettingsOutlined,
} from "@mui/icons-material";

import expiryStatsMock from "../../mock/expiryStats.mock";

import "./ExpiryStats.css";

const ExpiryStats = () => {

    return (

        <>

            {/* ============================
                Header Actions
            ============================ */}

            <div className="expiry-top-actions">

                <button className="expiry-btn">

                    <AssessmentOutlined />

                    Expiry Report

                </button>

                <button className="expiry-btn success">

                    <DownloadOutlined />

                    Export Excel

                </button>

                <button className="expiry-btn primary">

                    <SettingsOutlined />

                    Settings

                </button>

            </div>

            {/* ============================
                Stats Cards
            ============================ */}

            <div className="expiry-stats-grid">

                {

                    expiryStatsMock.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div

                                key={item.id}

                                className="expiry-stat-card"

                            >

                                <div className="expiry-stat-top">

                                    <div

                                        className="expiry-icon"

                                        style={{

                                            background: `${item.color}15`,

                                            color: item.color,

                                        }}

                                    >

                                        <Icon />

                                    </div>

                                </div>

                                <small>

                                    {item.title}

                                </small>

                                <h2>

                                    {item.count}

                                </h2>

                                <p>

                                    {item.amount}

                                </p>

                                <div

                                    className="expiry-bottom-line"

                                    style={{

                                        background: item.color,

                                    }}

                                />

                            </div>

                        );

                    })

                }

            </div>

        </>

    );

};

export default ExpiryStats;