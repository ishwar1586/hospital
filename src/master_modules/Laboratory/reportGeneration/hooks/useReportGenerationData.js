// =========================================
// REPORT GENERATION DATA HOOK
// =========================================

import {
    useCallback,
    useEffect,
    useState,
} from "react";

import reportGenerationService
    from "../services/reportGeneration.service";


// =========================================
// CUSTOM HOOK
// =========================================

const useReportGenerationData = () => {

    // =========================================
    // REPORT DATA
    // =========================================

    const [
        reports,
        setReports,
    ] = useState([]);


    // =========================================
    // LOADING
    // =========================================

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);


    // =========================================
    // REFRESHING
    // =========================================

    const [
        isRefreshing,
        setIsRefreshing,
    ] = useState(false);


    // =========================================
    // ERROR
    // =========================================

    const [
        error,
        setError,
    ] = useState(null);


    // =========================================
    // FETCH REPORTS
    // =========================================

    const fetchReports = useCallback(
        async ({
            showLoader = true,
        } = {}) => {

            try {

                if (showLoader) {

                    setIsLoading(
                        true
                    );

                }


                setError(null);


                const data =
                    await reportGenerationService
                        .getReports();


                if (
                    !Array.isArray(
                        data
                    )
                ) {

                    setReports([]);

                    return;

                }


                setReports(
                    data
                );

            }

            catch (fetchError) {

                console.error(
                    "Failed to fetch report generation data:",
                    fetchError
                );


                setReports([]);


                setError(
                    fetchError?.message ||
                    "Unable to load reports."
                );

            }

            finally {

                if (showLoader) {

                    setIsLoading(
                        false
                    );

                }

            }

        },
        []
    );


    // =========================================
    // INITIAL LOAD
    // =========================================

    useEffect(
        () => {

            fetchReports();

        },
        [
            fetchReports,
        ]
    );


    // =========================================
    // REFRESH
    // =========================================

    const refreshReports =
        useCallback(
            async () => {

                if (
                    isRefreshing
                ) {
                    return;
                }


                try {

                    setIsRefreshing(
                        true
                    );

                    setError(null);


                    const data =
                        await reportGenerationService
                            .getReports();


                    if (
                        !Array.isArray(
                            data
                        )
                    ) {

                        setReports([]);

                        return;

                    }


                    setReports(
                        data
                    );

                }

                catch (refreshError) {

                    console.error(
                        "Failed to refresh report generation data:",
                        refreshError
                    );


                    setError(
                        refreshError?.message ||
                        "Unable to refresh reports."
                    );

                }

                finally {

                    setIsRefreshing(
                        false
                    );

                }

            },
            [
                isRefreshing,
            ]
        );


    // =========================================
    // UPDATE SINGLE REPORT
    // =========================================

    const updateReport =
        useCallback(
            async (
                reportId,
                updates
            ) => {

                if (
                    !reportId ||
                    !updates
                ) {
                    return null;
                }


                try {

                    setError(null);


                    const updatedReport =
                        await reportGenerationService
                            .updateReport(
                                reportId,
                                updates
                            );


                    if (
                        !updatedReport
                    ) {
                        return null;
                    }


                    setReports(
                        (previousReports) =>
                            previousReports.map(
                                (report) =>
                                    report.id ===
                                    reportId
                                        ? updatedReport
                                        : report
                            )
                    );


                    return updatedReport;

                }

                catch (updateError) {

                    console.error(
                        "Failed to update report:",
                        updateError
                    );


                    setError(
                        updateError?.message ||
                        "Unable to update report."
                    );


                    return null;

                }

            },
            []
        );


    // =========================================
    // GENERATE SINGLE REPORT
    // =========================================

    const generateReport =
        useCallback(
            async (
                reportId
            ) => {

                if (
                    !reportId
                ) {
                    return null;
                }


                try {

                    setError(null);


                    const generatedReport =
                        await reportGenerationService
                            .generateReport(
                                reportId
                            );


                    if (
                        !generatedReport
                    ) {
                        return null;
                    }


                    setReports(
                        (previousReports) =>
                            previousReports.map(
                                (report) =>
                                    report.id ===
                                    reportId
                                        ? generatedReport
                                        : report
                            )
                    );


                    return generatedReport;

                }

                catch (generateError) {

                    console.error(
                        "Failed to generate report:",
                        generateError
                    );


                    setError(
                        generateError?.message ||
                        "Unable to generate report."
                    );


                    return null;

                }

            },
            []
        );


    // =========================================
    // GENERATE MULTIPLE REPORTS
    // =========================================

    const generateReports =
        useCallback(
            async (
                reportIds
            ) => {

                if (
                    !Array.isArray(
                        reportIds
                    ) ||
                    reportIds.length === 0
                ) {
                    return [];

                }


                try {

                    setError(null);


                    const generatedReports =
                        await reportGenerationService
                            .generateReports(
                                reportIds
                            );


                    if (
                        !Array.isArray(
                            generatedReports
                        )
                    ) {
                        return [];

                    }


                    const generatedMap =
                        new Map(
                            generatedReports.map(
                                (report) => [
                                    report.id,
                                    report,
                                ]
                            )
                        );


                    setReports(
                        (previousReports) =>
                            previousReports.map(
                                (report) =>
                                    generatedMap.has(
                                        report.id
                                    )
                                        ? generatedMap.get(
                                            report.id
                                        )
                                        : report
                            )
                    );


                    return generatedReports;

                }

                catch (generateError) {

                    console.error(
                        "Failed to generate reports:",
                        generateError
                    );


                    setError(
                        generateError?.message ||
                        "Unable to generate reports."
                    );


                    return [];

                }

            },
            []
        );


    // =========================================
    // MARK PRINTED
    // =========================================

    const markAsPrinted =
        useCallback(
            async (
                reportId
            ) => {

                if (
                    !reportId
                ) {
                    return null;
                }


                try {

                    setError(null);


                    const updatedReport =
                        await reportGenerationService
                            .markAsPrinted(
                                reportId
                            );


                    if (
                        !updatedReport
                    ) {
                        return null;
                    }


                    setReports(
                        (previousReports) =>
                            previousReports.map(
                                (report) =>
                                    report.id ===
                                    reportId
                                        ? updatedReport
                                        : report
                            )
                    );


                    return updatedReport;

                }

                catch (printError) {

                    console.error(
                        "Failed to mark report as printed:",
                        printError
                    );


                    setError(
                        printError?.message ||
                        "Unable to print report."
                    );


                    return null;

                }

            },
            []
        );


    // =========================================
    // MARK EMAILED
    // =========================================

    const markAsEmailed =
        useCallback(
            async (
                reportId
            ) => {

                if (
                    !reportId
                ) {
                    return null;
                }


                try {

                    setError(null);


                    const updatedReport =
                        await reportGenerationService
                            .markAsEmailed(
                                reportId
                            );


                    if (
                        !updatedReport
                    ) {
                        return null;
                    }


                    setReports(
                        (previousReports) =>
                            previousReports.map(
                                (report) =>
                                    report.id ===
                                    reportId
                                        ? updatedReport
                                        : report
                            )
                    );


                    return updatedReport;

                }

                catch (emailError) {

                    console.error(
                        "Failed to mark report as emailed:",
                        emailError
                    );


                    setError(
                        emailError?.message ||
                        "Unable to email report."
                    );


                    return null;

                }

            },
            []
        );


    // =========================================
    // MARK DOWNLOADED
    // =========================================

    const markAsDownloaded =
        useCallback(
            async (
                reportId
            ) => {

                if (
                    !reportId
                ) {
                    return null;
                }


                try {

                    setError(null);


                    const updatedReport =
                        await reportGenerationService
                            .markAsDownloaded(
                                reportId
                            );


                    if (
                        !updatedReport
                    ) {
                        return null;
                    }


                    setReports(
                        (previousReports) =>
                            previousReports.map(
                                (report) =>
                                    report.id ===
                                    reportId
                                        ? updatedReport
                                        : report
                            )
                    );


                    return updatedReport;

                }

                catch (downloadError) {

                    console.error(
                        "Failed to mark report as downloaded:",
                        downloadError
                    );


                    setError(
                        downloadError?.message ||
                        "Unable to download report."
                    );


                    return null;

                }

            },
            []
        );


    // =========================================
    // RETURN
    // =========================================

    return {

        reports,

        setReports,

        isLoading,

        isRefreshing,

        error,

        fetchReports,

        refreshReports,

        updateReport,

        generateReport,

        generateReports,

        markAsPrinted,

        markAsEmailed,

        markAsDownloaded,

    };

};


export default useReportGenerationData;