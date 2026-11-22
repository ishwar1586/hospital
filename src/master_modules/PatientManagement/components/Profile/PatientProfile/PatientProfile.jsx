import React, { useState } from "react";

import PatientProfileHeader from "../PatientProfileHeader/PatientProfileHeader";
import PatientBasicInfo from "../PatientBasicInfo/PatientBasicInfo";
import PatientProfileTabs from "../PatientProfileTabs/PatientProfileTabs";
import PatientOverview from "../PatientOverview/PatientOverview";
import "./PatientProfile.css";



const PatientProfile = ({
    patient,
    onClose,
}) => {

    const [activeTab, setActiveTab] = useState("overview");

    if (!patient) {
        return null;
    }

    return (
        <div className="patient-profile-overlay">

            <div className="patient-profile">

                {/* =====================================
            Profile Header
        ===================================== */}

                <PatientProfileHeader
                    patient={patient}
                    onClose={onClose}
                />


                {/* =====================================
            Basic Information
        ===================================== */}

                <PatientBasicInfo
                    patient={patient}
                />


                {/* =====================================
            Profile Tabs
        ===================================== */}

                <PatientProfileTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <div className="patient-profile-content">

                    {activeTab === "overview" && (
                        <PatientOverview
                            patient={patient}
                        />
                    )}

                </div>

            </div>

        </div>
    );
};

export default PatientProfile;