import React, {
    useEffect,
    useState,
} from "react";


// =========================================================
// COMPONENTS
// =========================================================

import DoctorDetailsHeader
    from "./DoctorDetailsHeader";

import DoctorDetailsTabs
    from "./DoctorDetailsTabs";

import DoctorProfileSummary
    from "./DoctorProfileSummary";

import DoctorDetailsActions
    from "./../DoctorDetailsActions";


// =========================================================
// TABS
// =========================================================

import DoctorOverviewTab
    from "./../tabs/DoctorOverviewTab";

import DoctorScheduleTab
    from "./../tabs/DoctorScheduleTab";

import DoctorContactTab
    from "./../tabs/DoctorContactTab";

import DoctorDocumentsTab
    from "./../tabs/DoctorDocumentsTab";


// =========================================================
// CONFIG
// =========================================================

import {
    DOCTOR_DETAILS_TABS,
} from "../../../config/doctorConfig";


// =========================================================
// SERVICE
// =========================================================

import doctorService
    from "../../../services/doctorService";


// =========================================================
// STYLES
// =========================================================

import "./DoctorDetails.css";


// =========================================================
// COMPONENT
// =========================================================

const DoctorDetails = ({
    doctor,
    doctorId,
    onClose,
    onEdit,
    onBookAppointment,
}) => {


    // =====================================================
    // SELECTED DOCTOR
    // =====================================================

    const [
        selectedDoctor,
        setSelectedDoctor,
    ] = useState(
        doctor || null
    );


    // =====================================================
    // ACTIVE TAB
    // =====================================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        DOCTOR_DETAILS_TABS?.[0]?.id ||
        "overview"
    );


    // =====================================================
    // SCHEDULE
    // =====================================================

    const [
        schedule,
        setSchedule,
    ] = useState(null);


    // =====================================================
    // DOCUMENTS
    // =====================================================

    const [
        documents,
        setDocuments,
    ] = useState([]);


    // =====================================================
    // LOADING
    // =====================================================

    const [
        loading,
        setLoading,
    ] = useState(false);


    // =====================================================
    // ERROR
    // =====================================================

    const [
        error,
        setError,
    ] = useState(null);


    // =====================================================
    // UPDATE SELECTED DOCTOR
    // =====================================================

    useEffect(() => {

        if (doctor) {

            setSelectedDoctor(
                doctor
            );

            setError(null);

        }

    }, [
        doctor,
    ]);


    // =====================================================
    // LOAD DOCTOR DETAILS
    // =====================================================

    useEffect(() => {

        let isMounted = true;


        const loadDoctor = async () => {

            /*
             * If complete doctor object is already
             * supplied by the table, no API call
             * is required.
             */

            if (doctor) {

                setSelectedDoctor(
                    doctor
                );

                return;
            }


            /*
             * If only doctorId is supplied,
             * fetch doctor details from service.
             */

            if (!doctorId) {

                setSelectedDoctor(
                    null
                );

                return;
            }


            try {

                setLoading(true);

                setError(null);


                const response =
                    await doctorService.getDoctorById(
                        doctorId
                    );


                if (!isMounted) {
                    return;
                }


                const loadedDoctor =
                    response?.data ??
                    response ??
                    null;


                setSelectedDoctor(
                    loadedDoctor
                );

            } catch (err) {

                if (!isMounted) {
                    return;
                }


                setError(
                    err?.message ||
                    "Unable to load doctor details."
                );

                setSelectedDoctor(
                    null
                );

            } finally {

                if (isMounted) {

                    setLoading(false);

                }

            }

        };


        loadDoctor();


        return () => {

            isMounted = false;

        };

    }, [
        doctor,
        doctorId,
    ]);


    // =====================================================
    // LOAD SCHEDULE
    // =====================================================

    useEffect(() => {

        let isMounted = true;


        const loadSchedule = async () => {

            if (
                activeTab !== "schedule" ||
                !selectedDoctor
            ) {
                return;
            }


            const currentDoctorId =
                selectedDoctor?.id ??
                selectedDoctor?.doctorId;


            if (!currentDoctorId) {
                return;
            }


            try {

                setLoading(true);

                setError(null);


                const response =
                    await doctorService.getDoctorSchedule(
                        currentDoctorId
                    );


                if (!isMounted) {
                    return;
                }


                const scheduleData =
                    response?.data ??
                    response ??
                    null;


                setSchedule(
                    scheduleData
                );

            } catch (err) {

                if (!isMounted) {
                    return;
                }


                setError(
                    err?.message ||
                    "Unable to load doctor schedule."
                );

            } finally {

                if (isMounted) {

                    setLoading(false);

                }

            }

        };


        loadSchedule();


        return () => {

            isMounted = false;

        };

    }, [
        activeTab,
        selectedDoctor,
    ]);


    // =====================================================
    // LOAD DOCUMENTS
    // =====================================================

    useEffect(() => {

        let isMounted = true;


        const loadDocuments = async () => {

            if (
                activeTab !== "documents" ||
                !selectedDoctor
            ) {
                return;
            }


            const currentDoctorId =
                selectedDoctor?.id ??
                selectedDoctor?.doctorId;


            if (!currentDoctorId) {
                return;
            }


            try {

                setLoading(true);

                setError(null);


                const response =
                    await doctorService.getDoctorDocuments(
                        currentDoctorId
                    );


                if (!isMounted) {
                    return;
                }


                const documentData =
                    response?.data ??
                    response ??
                    [];


                setDocuments(
                    Array.isArray(documentData)
                        ? documentData
                        : []
                );

            } catch (err) {

                if (!isMounted) {
                    return;
                }


                setError(
                    err?.message ||
                    "Unable to load doctor documents."
                );


                setDocuments([]);

            } finally {

                if (isMounted) {

                    setLoading(false);

                }

            }

        };


        loadDocuments();


        return () => {

            isMounted = false;

        };

    }, [
        activeTab,
        selectedDoctor,
    ]);


    // =====================================================
    // TAB CHANGE
    // =====================================================

    const handleTabChange = (
        tabId
    ) => {

        if (!tabId) {
            return;
        }


        setActiveTab(
            tabId
        );

        setError(null);

    };


    // =====================================================
    // EDIT DOCTOR
    // =====================================================

    const handleEdit = () => {

        if (
            typeof onEdit ===
            "function"
        ) {

            onEdit(
                selectedDoctor
            );

        }

    };


    // =====================================================
    // VIEW SCHEDULE
    // =====================================================

    const handleViewSchedule = () => {

        setActiveTab(
            "schedule"
        );

        setError(null);

    };


    // =====================================================
    // BOOK APPOINTMENT
    // =====================================================

    const handleBookAppointment = () => {

        if (
            typeof onBookAppointment ===
            "function"
        ) {

            onBookAppointment(
                selectedDoctor
            );

        }

    };


    // =====================================================
    // CLOSE DETAILS
    // =====================================================

    const handleClose = () => {

        if (
            typeof onClose ===
            "function"
        ) {

            onClose();

        }

    };


    // =====================================================
    // LOADING STATE
    // =====================================================

    if (
        loading &&
        !selectedDoctor
    ) {

        return (

            <aside className="doctor-details">

                <div className="doctor-details__state">

                    Loading doctor details...

                </div>

            </aside>

        );

    }


    // =====================================================
    // EMPTY STATE
    // =====================================================

    if (!selectedDoctor) {

        return (

            <aside className="doctor-details">

                <div className="doctor-details__state">

                    {error ||
                        "Select a doctor to view details."}

                </div>

            </aside>

        );

    }


    // =====================================================
    // TAB CONTENT
    // =====================================================

    const renderActiveTab = () => {

        switch (activeTab) {


            // =============================================
            // SCHEDULE
            // =============================================

            case "schedule":

                return (

                    <DoctorScheduleTab
                        doctor={
                            selectedDoctor
                        }
                        schedule={
                            schedule
                        }
                        loading={
                            loading
                        }
                    />

                );


            // =============================================
            // CONTACT
            // =============================================

            case "contact":

                return (

                    <DoctorContactTab
                        doctor={
                            selectedDoctor
                        }
                    />

                );


            // =============================================
            // DOCUMENTS
            // =============================================

            case "documents":

                return (

                    <DoctorDocumentsTab
                        doctor={
                            selectedDoctor
                        }
                        documents={
                            documents
                        }
                        loading={
                            loading
                        }
                    />

                );


            // =============================================
            // OVERVIEW
            // =============================================

            case "overview":

            default:

                return (

                    <DoctorOverviewTab
                        doctor={
                            selectedDoctor
                        }
                    />

                );

        }

    };


    // =====================================================
    // RENDER
    // =====================================================

    return (

        <aside className="doctor-details">


            {/* =========================================
                HEADER
            ========================================= */}

            <DoctorDetailsHeader
                doctor={
                    selectedDoctor
                }
                onEdit={
                    handleEdit
                }
            />


            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="doctor-details__content">


                {/* =====================================
                    PROFILE SUMMARY
                ===================================== */}

                <DoctorProfileSummary
                    doctor={
                        selectedDoctor
                    }
                />


                {/* =====================================
                    TABS
                ===================================== */}

                <DoctorDetailsTabs
                    tabs={
                        DOCTOR_DETAILS_TABS
                    }
                    activeTab={
                        activeTab
                    }
                    onTabChange={
                        handleTabChange
                    }
                />


                {/* =====================================
                    ERROR
                ===================================== */}

                {error && (

                    <div
                        className="
                            doctor-details__error
                        "
                        role="alert"
                    >

                        {error}

                    </div>

                )}


                {/* =====================================
                    ACTIVE TAB
                ===================================== */}

                <div
                    className="
                        doctor-details__tab-content
                    "
                >

                    {renderActiveTab()}

                </div>


                {/* =====================================
                    ACTIONS
                ===================================== */}

                <DoctorDetailsActions
                    doctor={
                        selectedDoctor
                    }
                    onViewSchedule={
                        handleViewSchedule
                    }
                    onBookAppointment={
                        handleBookAppointment
                    }
                />

            </div>

        </aside>

    );
};


export default DoctorDetails;