import React, {
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";


// =========================================
// COMPONENTS
// =========================================

import DoctorManagementHeader
    from "../components/Header/DoctorManagementHeader";

import DoctorStatsCards
    from "../components/StatsCards/DoctorStatsCards";

import DoctorFilters
    from "../components/Filters/DoctorFilters";

import DoctorTabs
    from "../components/Tabs/DoctorTabs";

import DoctorTable
    from "../components/Table/DoctorTable";

import DoctorDetails
    from "../components/Profile/DoctorDetails/DoctorDetails";


// =========================================
// REUSABLE PAGINATION
// =========================================

import Pagination
    from "@/master_shared/components/Pagination/Pagination";


// =========================================
// HOOKS
// =========================================

import useDoctorFilters
    from "../hooks/useDoctorFilters";

import useDoctorPagination
    from "../hooks/useDoctorPagination";


// =========================================
// SERVICE
// =========================================

import doctorService
    from "../services/doctorService";


// =========================================
// CONFIG
// =========================================

import {
    DOCTOR_ACTIONS,
} from "../config/doctorConfig";


// =========================================
// STYLES
// =========================================

import "../styles/DoctorManagement.css";


// =========================================
// COMPONENT
// =========================================

const DoctorManagement = () => {


    // =========================================
    // DOCTOR FILTERS
    // =========================================

    const {
        filters,
        setSearch,
        setDepartment,
        setStatus,
        setAvailability,
        setTab,
        clearFilters,
    } = useDoctorFilters();


    // =========================================
    // DOCTOR DATA
    // =========================================

    const [
        doctors,
        setDoctors,
    ] = useState([]);


    // =========================================
    // SELECTED DOCTOR
    // =========================================

    const [
        selectedDoctor,
        setSelectedDoctor,
    ] = useState(null);


    // =========================================
    // DOCTOR LOADING
    // =========================================

    const [
        isDoctorsLoading,
        setIsDoctorsLoading,
    ] = useState(true);


    // =========================================
    // DOCTOR ERROR
    // =========================================

    const [
        doctorsError,
        setDoctorsError,
    ] = useState(null);


    // =========================================
    // STATS STATE
    // =========================================

    const [
        doctorStats,
        setDoctorStats,
    ] = useState({});


    // =========================================
    // STATS LOADING STATE
    // =========================================

    const [
        isStatsLoading,
        setIsStatsLoading,
    ] = useState(true);


    // =========================================
    // STATS ERROR STATE
    // =========================================

    const [
        statsError,
        setStatsError,
    ] = useState(null);


    // =========================================
    // PAGINATION
    // =========================================

    const {
        currentPage,
        pageSize,
        totalItems,

        setCurrentPage,
        setPageSize,
        updateTotalItems,

        resetPagination,
    } = useDoctorPagination();


    // =========================================
    // FETCH DOCTORS
    // =========================================

    const fetchDoctors = useCallback(
        async () => {

            try {

                setIsDoctorsLoading(
                    true
                );

                setDoctorsError(
                    null
                );


                const response =
                    await doctorService.getDoctors(
                        filters
                    );


                // =================================
                // NORMALIZE RESPONSE
                // =================================

                const result =
                    response?.data ??
                    response ??
                    [];


                const doctorList =
                    Array.isArray(result)
                        ? result
                        : result?.doctors ??
                          result?.items ??
                          [];


                // =================================
                // SET DOCTORS
                // =================================

                setDoctors(
                    doctorList
                );


                // =================================
                // TOTAL ITEMS
                // =================================

                const total =
                    Array.isArray(result)
                        ? doctorList.length
                        : Number(
                            result?.total ??
                            result?.totalItems ??
                            doctorList.length
                        );


                updateTotalItems(
                    Number.isFinite(total)
                        ? total
                        : doctorList.length
                );


                // =================================
                // KEEP SELECTED DOCTOR IN SYNC
                // =================================

                setSelectedDoctor(
                    (previousDoctor) => {

                        if (!previousDoctor) {
                            return null;
                        }


                        const selectedId =
                            previousDoctor?.id ??
                            previousDoctor?.doctorId;


                        const updatedDoctor =
                            doctorList.find(
                                (doctor) => {

                                    const doctorId =
                                        doctor?.id ??
                                        doctor?.doctorId;

                                    return (
                                        doctorId ===
                                        selectedId
                                    );
                                }
                            );


                        return (
                            updatedDoctor ??
                            null
                        );
                    }
                );


            } catch (error) {

                console.error(
                    "Failed to load doctors:",
                    error
                );


                setDoctors(
                    []
                );


                updateTotalItems(
                    0
                );


                setSelectedDoctor(
                    null
                );


                setDoctorsError(
                    error?.message ||
                    "Unable to load doctors."
                );


            } finally {

                setIsDoctorsLoading(
                    false
                );

            }

        },
        [
            filters,
            updateTotalItems,
        ]
    );


    // =========================================
    // FETCH DOCTORS WHEN FILTERS CHANGE
    // =========================================

    useEffect(
        () => {

            fetchDoctors();

        },
        [
            fetchDoctors,
        ]
    );


    // =========================================
    // RESET PAGINATION ON FILTER CHANGE
    // =========================================

    useEffect(
        () => {

            resetPagination();

        },
        [
            filters,
            resetPagination,
        ]
    );


    // =========================================
    // PAGINATED DOCTORS
    // =========================================

    const paginatedDoctors =
        useMemo(
            () => {

                const startIndex =
                    (
                        currentPage -
                        1
                    ) *
                    pageSize;


                const endIndex =
                    startIndex +
                    pageSize;


                return doctors.slice(
                    startIndex,
                    endIndex
                );

            },
            [
                doctors,
                currentPage,
                pageSize,
            ]
        );


    // =========================================
    // FETCH DOCTOR STATS
    // =========================================

    const fetchDoctorStats =
        useCallback(
            async () => {

                try {

                    setIsStatsLoading(
                        true
                    );

                    setStatsError(
                        null
                    );


                    const response =
                        await doctorService.getDoctorStats();


                    const stats =
                        response?.data ??
                        response ??
                        {};


                    setDoctorStats(
                        stats
                    );


                } catch (error) {

                    console.error(
                        "Failed to load doctor statistics:",
                        error
                    );


                    setStatsError(
                        error?.message ||
                        "Unable to load doctor statistics."
                    );


                } finally {

                    setIsStatsLoading(
                        false
                    );

                }

            },
            []
        );


    // =========================================
    // INITIAL STATS LOAD
    // =========================================

    useEffect(
        () => {

            fetchDoctorStats();

        },
        [
            fetchDoctorStats,
        ]
    );


    // =========================================
    // RETRY STATS
    // =========================================

    const handleStatsRetry =
        useCallback(
            () => {

                fetchDoctorStats();

            },
            [
                fetchDoctorStats,
            ]
        );


    // =========================================
    // RETRY DOCTORS
    // =========================================

    const handleDoctorsRetry =
        useCallback(
            () => {

                fetchDoctors();

            },
            [
                fetchDoctors,
            ]
        );


    // =========================================
    // EXPORT DOCTORS
    // =========================================

    const handleExportDoctors =
        useCallback(
            () => {

                /*
                 * Export implementation can be
                 * connected to backend later.
                 *
                 * Current action intentionally does
                 * not modify doctor data.
                 */

                console.log(
                    "Export doctors requested",
                    filters
                );

            },
            [
                filters,
            ]
        );


    // =========================================
    // DOCTOR SELECT
    // =========================================

    const handleDoctorSelect =
        useCallback(
            (doctor) => {

                if (!doctor) {
                    return;
                }


                setSelectedDoctor(
                    doctor
                );

            },
            []
        );


    // =========================================
    // EDIT DOCTOR
    // =========================================

    const handleEditDoctor =
        useCallback(
            (doctor) => {

                if (!doctor) {
                    return;
                }


                /*
                 * Selected doctor remains available
                 * for the future edit form/modal.
                 *
                 * Backend/form integration can be
                 * connected here later.
                 */

                setSelectedDoctor(
                    doctor
                );

            },
            []
        );


    // =========================================
    // BOOK APPOINTMENT
    // =========================================

    const handleBookAppointment =
        useCallback(
            (doctor) => {

                if (!doctor) {
                    return;
                }


                /*
                 * Appointment flow integration can
                 * be connected here later.
                 *
                 * Keeping selected doctor ensures
                 * the current doctor context remains
                 * available.
                 */

                setSelectedDoctor(
                    doctor
                );

            },
            []
        );


    // =========================================
    // DOCTOR ACTION
    // =========================================

    const handleDoctorAction =
        useCallback(
            async (
                action,
                doctor
            ) => {

                if (!doctor) {
                    return;
                }


                // =====================================
                // NORMALIZE ACTION
                // =====================================

                const normalizedAction =
                    String(
                        action?.id ??
                        action?.key ??
                        action?.action ??
                        action ??
                        ""
                    )
                        .toLowerCase()
                        .replace(
                            /[\s_]+/g,
                            "-"
                        );


                const doctorId =
                    doctor?.id ??
                    doctor?.doctorId;


                // =====================================
                // VIEW DETAILS
                // =====================================

                if (
                    normalizedAction ===
                        DOCTOR_ACTIONS.VIEW ||
                    normalizedAction ===
                        "view-details" ||
                    normalizedAction ===
                        "viewdetail"
                ) {

                    setSelectedDoctor(
                        doctor
                    );

                    return;
                }


                // =====================================
                // VIEW SCHEDULE
                // =====================================

                if (
                    normalizedAction ===
                        DOCTOR_ACTIONS.SCHEDULE ||
                    normalizedAction ===
                        "view-schedule" ||
                    normalizedAction ===
                        "viewschedule"
                ) {

                    setSelectedDoctor(
                        doctor
                    );

                    return;
                }


                // =====================================
                // EDIT DOCTOR
                // =====================================

                if (
                    normalizedAction ===
                        DOCTOR_ACTIONS.EDIT ||
                    normalizedAction ===
                        "edit-doctor" ||
                    normalizedAction ===
                        "editdoctor"
                ) {

                    handleEditDoctor(
                        doctor
                    );

                    return;
                }


                // =====================================
                // BOOK APPOINTMENT
                // =====================================

                if (
                    normalizedAction ===
                        DOCTOR_ACTIONS.BOOK_APPOINTMENT ||
                    normalizedAction ===
                        "bookappointment"
                ) {

                    handleBookAppointment(
                        doctor
                    );

                    return;
                }


                // =====================================
                // CHANGE STATUS
                // =====================================

                if (
                    normalizedAction ===
                        DOCTOR_ACTIONS.CHANGE_STATUS ||
                    normalizedAction ===
                        "changestatus"
                ) {

                    setSelectedDoctor(
                        doctor
                    );

                    return;
                }


                // =====================================
                // DELETE DOCTOR
                // =====================================

                if (
                    normalizedAction ===
                        DOCTOR_ACTIONS.DELETE ||
                    normalizedAction ===
                        "delete-doctor" ||
                    normalizedAction ===
                        "deletedoctor"
                ) {

                    if (!doctorId) {
                        return;
                    }


                    try {

                        await doctorService.deleteDoctor(
                            doctorId
                        );


                        // =================================
                        // CLEAR SELECTED DOCTOR IF NEEDED
                        // =================================

                        setSelectedDoctor(
                            (previousDoctor) => {

                                if (
                                    !previousDoctor
                                ) {
                                    return null;
                                }


                                const previousId =
                                    previousDoctor?.id ??
                                    previousDoctor?.doctorId;


                                return (
                                    previousId ===
                                    doctorId
                                )
                                    ? null
                                    : previousDoctor;
                            }
                        );


                        // =================================
                        // REFRESH DOCTORS
                        // =================================

                        await fetchDoctors();


                        // =================================
                        // REFRESH STATS
                        // =================================

                        await fetchDoctorStats();


                    } catch (error) {

                        console.error(
                            "Failed to delete doctor:",
                            error
                        );


                        setDoctorsError(
                            error?.message ||
                            "Unable to delete doctor."
                        );

                    }


                    return;
                }


                // =====================================
                // UNKNOWN ACTION
                // =====================================

                console.warn(
                    "Unhandled doctor action:",
                    action
                );

            },
            [
                fetchDoctors,
                fetchDoctorStats,
                handleEditDoctor,
                handleBookAppointment,
            ]
        );


    // =========================================
    // SORT
    // =========================================

    const handleSort =
        useCallback(
            (
                columnId,
                direction
            ) => {

                /*
                 * Sorting integration can be connected
                 * with backend/service later.
                 */

                console.log(
                    "Sort requested:",
                    {
                        columnId,
                        direction,
                    }
                );

            },
            []
        );


    // =========================================
    // PAGINATION - PAGE CHANGE
    // =========================================

    const handlePageChange =
        useCallback(
            (
                event,
                page
            ) => {

                setCurrentPage(
                    page
                );

            },
            [
                setCurrentPage,
            ]
        );


    // =========================================
    // PAGINATION - ROWS CHANGE
    // =========================================

    const handleRowsPerPageChange =
        useCallback(
            (event) => {

                const value =
                    Number(
                        event?.target?.value
                    );


                if (
                    Number.isNaN(value) ||
                    value <= 0
                ) {
                    return;
                }


                setPageSize(
                    value
                );


                setCurrentPage(
                    1
                );

            },
            [
                setPageSize,
                setCurrentPage,
            ]
        );


    // =========================================
    // RENDER
    // =========================================

    return (

        <main
            className="
                doctor-management
            "
        >


            {/* =====================================
                HEADER
            ===================================== */}

            <DoctorManagementHeader />


            {/* =====================================
                PAGE CONTENT
            ===================================== */}

            <div
                className="
                    doctor-management__content
                "
            >


                {/* =================================
                    STATS
                ================================= */}

                <section
                    className="
                        doctor-management__section
                        doctor-management__stats-section
                    "
                >

                    {isStatsLoading ? (

                        <div
                            className="
                                doctor-management__stats-state
                                doctor-management__stats-loading
                            "
                            aria-live="polite"
                        >

                            <span
                                className="
                                    doctor-management__loading-dot
                                "
                            />

                            <span>
                                Loading doctor statistics...
                            </span>

                        </div>

                    ) : statsError ? (

                        <div
                            className="
                                doctor-management__stats-state
                                doctor-management__stats-error
                            "
                            role="alert"
                        >

                            <span>
                                {statsError}
                            </span>


                            <button
                                type="button"
                                onClick={
                                    handleStatsRetry
                                }
                                className="
                                    doctor-management__retry-button
                                "
                            >
                                Retry
                            </button>

                        </div>

                    ) : (

                        <DoctorStatsCards
                            stats={
                                doctorStats
                            }
                        />

                    )}

                </section>


                {/* =================================
                    FILTERS
                ================================= */}

                <section
                    className="
                        doctor-management__section
                        doctor-management__filters-section
                    "
                >

                    <DoctorFilters

                        filters={
                            filters
                        }

                        onSearchChange={
                            setSearch
                        }

                        onDepartmentChange={
                            setDepartment
                        }

                        onStatusChange={
                            setStatus
                        }

                        onAvailabilityChange={
                            setAvailability
                        }

                        onClear={
                            clearFilters
                        }

                        onExport={
                            handleExportDoctors
                        }

                    />

                </section>


                {/* =================================
                    TABS
                ================================= */}

                <section
                    className="
                        doctor-management__section
                        doctor-management__tabs-section
                    "
                >

                    <DoctorTabs

                        activeTab={
                            filters.tab
                        }

                        onTabChange={
                            setTab
                        }

                    />

                </section>


                {/* =================================
                    TABLE + DETAILS WORKSPACE
                ================================= */}

                <section
                    className="
                        doctor-management__workspace
                    "
                >


                    {/* =================================
                        DOCTOR TABLE
                    ================================= */}

                    <div
                        className="
                            doctor-management__table-section
                        "
                    >

                        <DoctorTable

                            doctors={
                                paginatedDoctors
                            }

                            totalDoctors={
                                totalItems
                            }

                            loading={
                                isDoctorsLoading
                            }

                            error={
                                doctorsError
                            }

                            page={
                                currentPage
                            }

                            rowsPerPage={
                                pageSize
                            }

                            onRetry={
                                handleDoctorsRetry
                            }

                            onDoctorSelect={
                                handleDoctorSelect
                            }

                            onAction={
                                handleDoctorAction
                            }

                            onSort={
                                handleSort
                            }

                            sortConfig={
                                null
                            }

                        />

                    </div>


                    {/* =================================
                        DOCTOR DETAILS
                    ================================= */}

                    {selectedDoctor && (

                        <aside
                            className="
                                doctor-management__details-section
                            "
                        >

                            <DoctorDetails

                                doctor={
                                    selectedDoctor
                                }

                                onEdit={
                                    handleEditDoctor
                                }

                                onBookAppointment={
                                    handleBookAppointment
                                }

                            />

                        </aside>

                    )}

                </section>


                {/* =================================
                    REUSABLE PAGINATION
                ================================= */}

                {!isDoctorsLoading &&
                    !doctorsError &&
                    totalItems > 0 && (

                    <section
                        className="
                            doctor-management__pagination-section
                        "
                    >

                        <Pagination

                            page={
                                currentPage
                            }

                            rowsPerPage={
                                pageSize
                            }

                            totalRows={
                                totalItems
                            }

                            onPageChange={
                                handlePageChange
                            }

                            onRowsPerPageChange={
                                handleRowsPerPageChange
                            }

                        />

                    </section>

                )}

            </div>

        </main>

    );

};


export default DoctorManagement;