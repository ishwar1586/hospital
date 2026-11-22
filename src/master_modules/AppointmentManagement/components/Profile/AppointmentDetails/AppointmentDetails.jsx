import React, {
    useState,
} from "react";

import AppointmentDetailsHeader
    from "./AppointmentDetailsHeader";

import AppointmentDetailsSummary
    from "./AppointmentDetailsSummary";

import AppointmentScheduleInfo
    from "./AppointmentScheduleInfo";

import AppointmentDetailsTabs
    from "./AppointmentDetailsTabs";

import AppointmentDetailsActions
    from "./AppointmentDetailsActions";

import PatientInfoTab
    from "../Tabs/PatientInfoTab";

import VisitInfoTab
    from "../Tabs/VisitInfoTab";

import HistoryTab
    from "../Tabs/HistoryTab";

import NotesTab
    from "../Tabs/NotesTab";

import PaymentTab
    from "../Tabs/PaymentTab";

import "./AppointmentDetails.css";


// =========================================
// Component
// =========================================

const AppointmentDetails = ({
    appointment,
    onClose,
    onEdit,
    onCheckIn,
    onReschedule,
    onCancel,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return null;
    }


    // =========================================
    // Active Tab
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        "patient-info"
    );


    // =========================================
    // Tab Change
    // =========================================

    const handleTabChange = (
        tab
    ) => {

        setActiveTab(tab);

    };


    // =========================================
    // Render Active Tab
    // =========================================

    const renderActiveTab = () => {

        switch (activeTab) {

            case "patient-info":
                return (
                    <PatientInfoTab
                        appointment={
                            appointment
                        }
                    />
                );


            case "visit-info":
                return (
                    <VisitInfoTab
                        appointment={
                            appointment
                        }
                    />
                );


            case "history":
                return (
                    <HistoryTab
                        appointment={
                            appointment
                        }
                    />
                );


            case "notes":
                return (
                    <NotesTab
                        appointment={
                            appointment
                        }
                    />
                );


            case "payment":
                return (
                    <PaymentTab
                        appointment={
                            appointment
                        }
                    />
                );


            default:
                return (
                    <PatientInfoTab
                        appointment={
                            appointment
                        }
                    />
                );
        }
    };


    // =========================================
    // Render
    // =========================================

    return (

        <div
            className="
                appointment-details
            "
        >

            {/* =====================================
                Header
            ===================================== */}

            <AppointmentDetailsHeader
                appointment={
                    appointment
                }
                onClose={
                    onClose
                }
            />


            {/* =====================================
                Appointment Summary
            ===================================== */}

            <div
                className="
                    appointment-details__summary-section
                "
            >

                <AppointmentDetailsSummary
                    appointment={
                        appointment
                    }
                />

            </div>


            {/* =====================================
                Schedule Information
            ===================================== */}

            <div
                className="
                    appointment-details__schedule-section
                "
            >

                <AppointmentScheduleInfo
                    appointment={
                        appointment
                    }
                />

            </div>


            {/* =====================================
                Profile Tabs
            ===================================== */}

            <div
                className="
                    appointment-details__tabs-section
                "
            >

                <AppointmentDetailsTabs
                    activeTab={
                        activeTab
                    }
                    onTabChange={
                        handleTabChange
                    }
                />

            </div>


            {/* =====================================
                Tab Content
            ===================================== */}

            <div
                className="
                    appointment-details__tab-content
                "
            >

                {
                    renderActiveTab()
                }

            </div>


            {/* =====================================
                Bottom Actions
            ===================================== */}

            <div
                className="
                    appointment-details__actions-section
                "
            >

                <AppointmentDetailsActions
                    appointment={
                        appointment
                    }

                    onEdit={
                        onEdit
                    }

                    onCheckIn={
                        onCheckIn
                    }

                    onReschedule={
                        onReschedule
                    }

                    onCancel={
                        onCancel
                    }
                />

            </div>

        </div>
    );
};


export default AppointmentDetails;