import React, {
    useState,
} from "react";

import NewAppointmentHeader from "./NewAppointmentHeader";
import PatientSearch from "./PatientSearch";
import PatientResultsTable from "./PatientResultsTable";
import AvailableSlots from "./AvailableSlots";
import AppointmentDetailsForm from "./AppointmentDetailsForm";
import AdditionalInformation from "./AdditionalInformation";
import NewAppointmentActions from "./NewAppointmentActions";

import "./NewAppointment.css";


const NewAppointment = ({
    onClose,
    onComplete,
}) => {

    /* =====================================================
       Selected Patient
    ===================================================== */

    const [
        selectedPatient,
        setSelectedPatient,
    ] = useState(null);


    /* =====================================================
       Patient Search Results
    ===================================================== */

    const [
        patientResults,
        setPatientResults,
    ] = useState([]);


    /* =====================================================
       Selected Time Slot
    ===================================================== */

    const [
        selectedTimeSlot,
        setSelectedTimeSlot,
    ] = useState(null);


    /* =====================================================
       Appointment Details
    ===================================================== */

    const [
        appointmentDetails,
        setAppointmentDetails,
    ] = useState({
        department: "",
        doctor: "",
        date: "2024-05-16",
        appointmentType: "",
        visitType: "",
        reason: "",
    });


    /* =====================================================
       Additional Information
    ===================================================== */

    const [
        additionalInformation,
        setAdditionalInformation,
    ] = useState({
        priority: "normal",
        referralSource: "",
        symptoms: "",
        instructions: "",
        reminder: "none",
    });


    /* =====================================================
       Temporary Patient Mock Data
    ===================================================== */

    const patientMockData = [
        {
            id: "PAT001",
            uhid: "UHID123456",
            patientName: "Rohit Kumar",
            age: 32,
            gender: "Male",
            mobile: "+91 9876543210",
            lastVisit: "12 Apr 2024",
            lastVisitDetails: "OPD - Dr. Sharma",
            status: "Active",
        },
        {
            id: "PAT002",
            uhid: "UHID987654",
            patientName: "Sneha Gupta",
            age: 28,
            gender: "Female",
            mobile: "+91 98765432109",
            lastVisit: "05 Mar 2024",
            lastVisitDetails: "OPD - Dr. Patel",
            status: "Active",
        },
    ];


    /* =====================================================
       Patient Search
    ===================================================== */

    const handlePatientSearch = (
        searchData
    ) => {

        const {
            searchBy,
            searchValue,
        } = searchData;


        const normalizedSearch =
            String(
                searchValue || ""
            )
                .trim()
                .toLowerCase();


        /*
         * Empty search:
         * Show all available mock patients.
         */

        if (!normalizedSearch) {

            setPatientResults(
                patientMockData
            );

            return;
        }


        /*
         * Filter patients according
         * to selected search type.
         */

        const filteredPatients =
            patientMockData.filter(
                (patient) => {

                    if (
                        searchBy === "uhid"
                    ) {
                        return patient.uhid
                            .toLowerCase()
                            .includes(
                                normalizedSearch
                            );
                    }


                    if (
                        searchBy === "mobile"
                    ) {
                        return patient.mobile
                            .toLowerCase()
                            .includes(
                                normalizedSearch
                            );
                    }


                    if (
                        searchBy === "patientName"
                    ) {
                        return patient.patientName
                            .toLowerCase()
                            .includes(
                                normalizedSearch
                            );
                    }


                    return false;
                }
            );


        setPatientResults(
            filteredPatients
        );

    };


    /* =====================================================
       Patient Selection
    ===================================================== */

    const handlePatientSelect = (
        patient
    ) => {

        setSelectedPatient(
            patient
        );

    };


    /* =====================================================
       Time Slot Selection
    ===================================================== */

    const handleTimeSlotSelect = (
        slot
    ) => {

        setSelectedTimeSlot(
            slot
        );

    };


    /* =====================================================
       New Patient Registration
    ===================================================== */

    const handleNewPatient = () => {

        console.log(
            "New patient registration"
        );

    };


    /* =====================================================
       View All Slots
    ===================================================== */

    const handleViewAllSlots = () => {

        console.log(
            "View all appointment slots"
        );

    };


    /* =====================================================
       Close New Appointment
    ===================================================== */

    const handleClose = () => {

        if (
            typeof onClose === "function"
        ) {
            onClose();
        }

    };


    /* =====================================================
       Review & Confirm
    ===================================================== */

    const handleNext = () => {

        const appointmentData = {
            patient: selectedPatient,
            appointment: {
                ...appointmentDetails,
                timeSlot: selectedTimeSlot,
            },
            additionalInformation,
        };


        console.log(
            "Review appointment",
            appointmentData
        );


        if (
            typeof onComplete === "function"
        ) {
            onComplete(
                appointmentData
            );
        }

    };


    /* =====================================================
       Render
    ===================================================== */

    return (

        <div className="new-appointment">


            {/* =================================================
                Header
            ================================================= */}

            <NewAppointmentHeader
                currentStep={1}
                onBack={handleClose}
            />


            {/* =================================================
                Main Content
            ================================================= */}

            <main className="new-appointment__content">


                {/* =================================================
                    Section 1
                    Patient Search / Selection
                ================================================= */}

                <section className="new-appointment__section">

                    <div className="new-appointment__section-header">

                        <span className="new-appointment__section-number">
                            1
                        </span>

                        <h2 className="new-appointment__section-title">
                            Patient Search / Selection
                        </h2>

                    </div>


                    <div className="new-appointment__section-content">

                        <div className="new-appointment__patient-layout">


                            {/* =================================================
                                Patient Search + Results
                            ================================================= */}

                            <div className="new-appointment__patient-main">

                                <PatientSearch
                                    onSearch={
                                        handlePatientSearch
                                    }
                                    onNewPatient={
                                        handleNewPatient
                                    }
                                />


                                <div className="new-appointment__patient-results">

                                    <PatientResultsTable
                                        patients={
                                            patientResults.length > 0
                                                ? patientResults
                                                : patientMockData
                                        }
                                        selectedPatientId={
                                            selectedPatient?.id
                                        }
                                        onSelectPatient={
                                            handlePatientSelect
                                        }
                                    />

                                </div>

                            </div>


                            {/* =================================================
                                Available Slots
                            ================================================= */}

                            <div className="new-appointment__patient-slots">

                                <AvailableSlots
                                    selectedDate="16 May 2024"
                                    selectedTimeSlot={
                                        selectedTimeSlot?.value
                                    }
                                    onTimeSlotSelect={
                                        handleTimeSlotSelect
                                    }
                                    onViewAllSlots={
                                        handleViewAllSlots
                                    }
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/* =================================================
                    Section 2
                    Appointment Details
                ================================================= */}

                <section className="new-appointment__section">

                    <div className="new-appointment__section-header">

                        <span className="new-appointment__section-number">
                            2
                        </span>

                        <h2 className="new-appointment__section-title">
                            Appointment Details
                        </h2>

                    </div>


                    <div className="new-appointment__section-content">

                        <AppointmentDetailsForm
                            formData={
                                appointmentDetails
                            }
                            onFormChange={
                                setAppointmentDetails
                            }
                        />

                    </div>

                </section>


                {/* =================================================
                    Section 3
                    Additional Information
                ================================================= */}

                <section className="new-appointment__section">

                    <div className="new-appointment__section-header">

                        <span className="new-appointment__section-number">
                            3
                        </span>

                        <h2 className="new-appointment__section-title">
                            Additional Information
                        </h2>

                    </div>


                    <div className="new-appointment__section-content">

                        <AdditionalInformation
                            formData={
                                additionalInformation
                            }
                            onFormChange={
                                setAdditionalInformation
                            }
                        />

                    </div>

                </section>


            </main>


            {/* =================================================
                Bottom Actions
            ================================================= */}

            <NewAppointmentActions
                onCancel={handleClose}
                onNext={handleNext}
            />


        </div>

    );

};


export default NewAppointment;