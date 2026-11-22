import {
    useEffect,
    useMemo,
    useState,
} from "react";


// =========================================================
// Components
// =========================================================

import AppointmentManagementHeader
    from "../components/Header/AppointmentManagementHeader";

import AppointmentStatsCards
    from "../components/StatsCards/AppointmentStatsCards";

import AppointmentFilters
    from "../components/Filters/AppointmentFilters";

import AppointmentTabs
    from "../components/Tabs/AppointmentTabs";

import AppointmentTable
    from "../components/Table/AppointmentTable";

import AppointmentDetails
    from "../components/Profile/AppointmentDetails/AppointmentDetails";

import NewAppointment
    from "../components/Form/NewAppointmentForm/NewAppointment";


// =========================================================
// Shared
// =========================================================

import Pagination
    from "../../../master_shared/components/Pagination/Pagination";


// =========================================================
// Hooks
// =========================================================

import useAppointmentPagination
    from "../hooks/useAppointmentPagination";


// =========================================================
// Mock Data
// =========================================================

import appointmentMockData
    from "../mock/appointment.mock";


// =========================================================
// Config
// =========================================================

import {
    appointmentFilterInitialValues,
} from "../config/Filter.Config";


// =========================================================
// Styles
// =========================================================

import "./../styles/appointment-management.css";


// =========================================================
// Component
// =========================================================

const AppointmentManagement = () => {

    // =====================================================
    // Appointment Data
    // =====================================================

    const [
        appointments,
        setAppointments,
    ] = useState(
        appointmentMockData
    );


    // =====================================================
    // Selected Appointment
    // =====================================================

    const [
        selectedAppointment,
        setSelectedAppointment,
    ] = useState(null);


    // =====================================================
    // New Appointment View
    // =====================================================

    const [
        isNewAppointmentOpen,
        setIsNewAppointmentOpen,
    ] = useState(false);


    // =====================================================
    // Active Appointment Tab
    // =====================================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        "appointment-list"
    );


    // =====================================================
    // Appointment Filters
    // =====================================================

    const [
        filters,
        setFilters,
    ] = useState(
        appointmentFilterInitialValues
    );


    // =====================================================
    // Filter Change
    // =====================================================

    const handleFilterChange = (
        name,
        value
    ) => {

        setFilters(
            (previousFilters) => ({
                ...previousFilters,
                [name]: value,
            })
        );

    };


    // =====================================================
    // Appointment Tab Change
    // =====================================================

    const handleAppointmentTabChange = (
        tab
    ) => {

        setActiveTab(tab);

    };


    // =====================================================
    // Filtered Appointments
    // =====================================================

    const filteredAppointments = useMemo(() => {

        return appointments.filter(
            (appointment) => {

                // =========================================
                // Department Filter
                // =========================================

                if (
                    filters.department !== "all" &&
                    appointment.department !==
                        filters.department
                ) {

                    return false;

                }


                // =========================================
                // Doctor Filter
                // =========================================

                if (
                    filters.doctor !== "all" &&
                    appointment.doctorName !==
                        filters.doctor
                ) {

                    return false;

                }


                // =========================================
                // Appointment Type Filter
                // =========================================

                if (
                    filters.appointmentType !== "all" &&
                    appointment.appointmentType !==
                        filters.appointmentType
                ) {

                    return false;

                }


                // =========================================
                // Status Filter
                // =========================================

                if (
                    filters.status !== "all" &&
                    appointment.status !==
                        filters.status
                ) {

                    return false;

                }


                // =========================================
                // Date Filter
                // =========================================

                if (
                    filters.date &&
                    appointment.date !==
                        formatDateForMockData(
                            filters.date
                        )
                ) {

                    return false;

                }


                // =========================================
                // Active Tab Filter
                // =========================================

                if (
                    !matchesAppointmentTab(
                        appointment,
                        activeTab,
                        filters.date
                    )
                ) {

                    return false;

                }


                return true;

            }
        );

    }, [
        appointments,
        filters,
        activeTab,
    ]);


    // =====================================================
    // Pagination
    // =====================================================

    const {
        page,
        rowsPerPage,
        totalRows,
        paginatedData:
            paginatedAppointments,
        handlePageChange,
        handleRowsPerPageChange,
        resetPagination,
    } = useAppointmentPagination(
        filteredAppointments
    );


    // =====================================================
    // Reset Pagination On Filter / Tab Change
    // =====================================================

    useEffect(() => {

        resetPagination();

    }, [
        filters,
        activeTab,
        resetPagination,
    ]);


    // =====================================================
    // Apply Filters
    // =====================================================

    const handleApplyFilters = () => {

        resetPagination();

    };


    // =====================================================
    // Reset Filters
    // =====================================================

    const handleResetFilters = () => {

        setFilters({
            ...appointmentFilterInitialValues,
        });

        setActiveTab(
            "appointment-list"
        );

        resetPagination();

    };


    // =====================================================
    // Open New Appointment
    // =====================================================

    const handleNewAppointment = () => {

        // Close appointment details if
        // somehow already open.

        setSelectedAppointment(null);

        // Open New Appointment screen.

        setIsNewAppointmentOpen(true);

    };


    // =====================================================
    // Close New Appointment
    // =====================================================

    const handleCloseNewAppointment = () => {

        setIsNewAppointmentOpen(false);

    };


    // =====================================================
    // Complete New Appointment
    // =====================================================

    const handleNewAppointmentComplete = (
        appointmentData
    ) => {

        if (!appointmentData) {
            return;
        }


        console.log(
            "New appointment completed:",
            appointmentData
        );


        // -------------------------------------------------
        // Temporary handling
        // -------------------------------------------------
        //
        // Actual appointment creation / API integration
        // will be handled when the complete appointment
        // submission flow is implemented.
        //

        setIsNewAppointmentOpen(false);

    };


    // =====================================================
    // Appointment Settings
    // =====================================================

    const handleAppointmentSettings = () => {

        console.log(
            "Appointment settings"
        );

    };


    // =====================================================
    // Export Appointments
    // =====================================================

    const handleExport = () => {

        console.log(
            "Export appointments"
        );

    };


    // =====================================================
    // View Appointment
    // =====================================================

    const handleViewAppointment = (
        appointment
    ) => {

        if (!appointment) {
            return;
        }


        // Make sure New Appointment is closed.

        setIsNewAppointmentOpen(false);


        // Open appointment details.

        setSelectedAppointment(
            appointment
        );

    };


    // =====================================================
    // Close Appointment Details
    // =====================================================

    const handleCloseAppointmentDetails = () => {

        setSelectedAppointment(null);

    };


    // =====================================================
    // Edit Appointment
    // =====================================================

    const handleEditAppointment = (
        appointment
    ) => {

        if (!appointment) {
            return;
        }


        console.log(
            "Edit appointment:",
            appointment
        );

    };


    // =====================================================
    // Check In Appointment
    // =====================================================

    const handleCheckInAppointment = (
        appointment
    ) => {

        if (!appointment) {
            return;
        }


        // ================================================
        // Update Appointment List
        // ================================================

        setAppointments(
            (previousAppointments) =>
                previousAppointments.map(
                    (item) => {

                        if (
                            item.id !==
                            appointment.id
                        ) {

                            return item;

                        }


                        return {
                            ...item,
                            status: "Checked In",
                        };

                    }
                )
        );


        // ================================================
        // Update Selected Appointment
        // ================================================

        setSelectedAppointment(
            (previousAppointment) => {

                if (
                    !previousAppointment ||
                    previousAppointment.id !==
                        appointment.id
                ) {

                    return previousAppointment;

                }


                return {
                    ...previousAppointment,
                    status: "Checked In",
                };

            }
        );

    };


    // =====================================================
    // Reschedule Appointment
    // =====================================================

    const handleRescheduleAppointment = (
        appointment
    ) => {

        if (!appointment) {
            return;
        }


        console.log(
            "Reschedule appointment:",
            appointment
        );

    };


    // =====================================================
    // Cancel Appointment
    // =====================================================

    const handleCancelAppointment = (
        appointment
    ) => {

        if (!appointment) {
            return;
        }


        // ================================================
        // Update Appointment List
        // ================================================

        setAppointments(
            (previousAppointments) =>
                previousAppointments.map(
                    (item) => {

                        if (
                            item.id !==
                            appointment.id
                        ) {

                            return item;

                        }


                        return {
                            ...item,
                            status: "Cancelled",
                        };

                    }
                )
        );


        // ================================================
        // Update Selected Appointment
        // ================================================

        setSelectedAppointment(
            (previousAppointment) => {

                if (
                    !previousAppointment ||
                    previousAppointment.id !==
                        appointment.id
                ) {

                    return previousAppointment;

                }


                return {
                    ...previousAppointment,
                    status: "Cancelled",
                };

            }
        );

    };


    // =====================================================
    // Generic Appointment Action
    // =====================================================

    const handleAppointmentAction = (
        action,
        appointment
    ) => {

        if (!appointment) {
            return;
        }


        console.log(
            "Appointment action:",
            action,
            appointment
        );

    };


    // =====================================================
    // New Appointment View
    // =====================================================

    if (isNewAppointmentOpen) {

        return (
            <NewAppointment
                onClose={
                    handleCloseNewAppointment
                }

                onComplete={
                    handleNewAppointmentComplete
                }
            />
        );

    }


    // =====================================================
    // Appointment Details View
    // =====================================================

    if (selectedAppointment) {

        return (
            <div className="appointment-management">

                <AppointmentDetails
                    appointment={
                        selectedAppointment
                    }

                    onClose={
                        handleCloseAppointmentDetails
                    }

                    onEdit={
                        handleEditAppointment
                    }

                    onReschedule={
                        handleRescheduleAppointment
                    }

                    onCheckIn={
                        handleCheckInAppointment
                    }

                    onCancel={
                        handleCancelAppointment
                    }
                />

            </div>
        );

    }


    // =====================================================
    // Main Appointment Management
    // =====================================================

    return (

        <div className="appointment-management">

            {/* =================================================
                Header
            ================================================= */}

            <AppointmentManagementHeader

                onNewAppointment={
                    handleNewAppointment
                }

                onAppointmentSettings={
                    handleAppointmentSettings
                }

                onExport={
                    handleExport
                }

            />


            {/* =================================================
                Stats Cards
            ================================================= */}

            <section
                className="
                    appointment-management-section
                "
            >

                <AppointmentStatsCards />

            </section>


            {/* =================================================
                Filters
            ================================================= */}

            <section
                className="
                    appointment-management-section
                "
            >

                <AppointmentFilters

                    filters={
                        filters
                    }

                    onFilterChange={
                        handleFilterChange
                    }

                    onApply={
                        handleApplyFilters
                    }

                    onReset={
                        handleResetFilters
                    }

                />

            </section>


            {/* =================================================
                Appointment Tabs
            ================================================= */}

            <section
                className="
                    appointment-management-section
                "
            >

                <AppointmentTabs

                    activeTab={
                        activeTab
                    }

                    onTabChange={
                        handleAppointmentTabChange
                    }

                />

            </section>


            {/* =================================================
                Appointment Table
            ================================================= */}

            <section
                className="
                    appointment-management-section
                    appointment-management-table-section
                "
            >

                <AppointmentTable

                    appointments={
                        paginatedAppointments
                    }

                    onView={
                        handleViewAppointment
                    }

                    onEdit={
                        handleEditAppointment
                    }

                    onCheckIn={
                        handleCheckInAppointment
                    }

                    onReschedule={
                        handleRescheduleAppointment
                    }

                    onCancel={
                        handleCancelAppointment
                    }

                    onAction={
                        handleAppointmentAction
                    }

                />

            </section>


            {/* =================================================
                Pagination
            ================================================= */}

            <section
                className="
                    appointment-management-pagination
                "
            >

                <Pagination

                    page={
                        page
                    }

                    rowsPerPage={
                        rowsPerPage
                    }

                    totalRows={
                        totalRows
                    }

                    onPageChange={
                        handlePageChange
                    }

                    onRowsPerPageChange={
                        handleRowsPerPageChange
                    }

                />

            </section>

        </div>

    );

};


// =========================================================
// Date Formatter
// =========================================================

const formatDateForMockData = (
    dateValue
) => {

    if (!dateValue) {

        return "";

    }


    const date = new Date(
        `${dateValue}T00:00:00`
    );


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return "";

    }


    const day = String(
        date.getDate()
    ).padStart(
        2,
        "0"
    );


    const month = date.toLocaleString(
        "en-US",
        {
            month: "short",
        }
    );


    const year =
        date.getFullYear();


    return `${day} ${month} ${year}`;

};


// =========================================================
// Appointment Tab Matcher
// =========================================================

const matchesAppointmentTab = (
    appointment,
    activeTab,
    selectedDate
) => {

    // =====================================================
    // Appointment List
    // =====================================================

    if (
        activeTab ===
        "appointment-list"
    ) {

        return true;

    }


    // =====================================================
    // Today's Schedule
    // =====================================================

    if (
        activeTab ===
        "todays-schedule"
    ) {

        return (
            appointment.date ===
            formatDateForMockData(
                selectedDate
            )
        );

    }


    // =====================================================
    // Upcoming
    // =====================================================

    if (
        activeTab ===
        "upcoming"
    ) {

        return isUpcomingAppointment(
            appointment.date,
            selectedDate
        );

    }


    // =====================================================
    // Requests
    // =====================================================

    if (
        activeTab ===
        "requests"
    ) {

        return (
            appointment.status ===
            "Pending"
        );

    }


    // =====================================================
    // Unknown Tab
    // =====================================================

    return true;

};


// =========================================================
// Upcoming Appointment Helper
// =========================================================

const isUpcomingAppointment = (
    appointmentDate,
    selectedDate
) => {

    if (
        !appointmentDate ||
        !selectedDate
    ) {

        return false;

    }


    const appointmentDateObject =
        parseMockDate(
            appointmentDate
        );


    const selectedDateObject =
        new Date(
            `${selectedDate}T00:00:00`
        );


    if (
        Number.isNaN(
            appointmentDateObject.getTime()
        ) ||
        Number.isNaN(
            selectedDateObject.getTime()
        )
    ) {

        return false;

    }


    return (
        appointmentDateObject >
        selectedDateObject
    );

};


// =========================================================
// Mock Date Parser
// =========================================================

const parseMockDate = (
    dateValue
) => {

    if (!dateValue) {

        return new Date(
            "invalid"
        );

    }


    const parts =
        dateValue.split(" ");


    if (
        parts.length !== 3
    ) {

        return new Date(
            "invalid"
        );

    }


    const [
        day,
        month,
        year,
    ] = parts;


    const monthIndexMap = {

        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,

    };


    const monthIndex =
        monthIndexMap[
            month
        ];


    if (
        monthIndex === undefined
    ) {

        return new Date(
            "invalid"
        );

    }


    return new Date(
        Number(year),
        monthIndex,
        Number(day)
    );

};


export default AppointmentManagement;