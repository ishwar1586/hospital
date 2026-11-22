import {
    useEffect,
    useMemo,
    useState,
} from "react";


// =========================================
// COMPONENTS
// =========================================

import PatientResultHeader
    from "@/master_modules/Laboratory/resultEntry/components/Workspace/PatientResultHeader.jsx";

import TestResultTabs
    from "./TestResultTabs";

import TestResultTable
    from "./TestResultTable";

import ResultEntryActions
    from "./ResultEntryActions";


// =========================================
// CONFIG
// =========================================

import resultColumns
    from "../../config/resultColumns";


// =========================================
// UTILS
// =========================================

import validateResult
    from "../../utils/validateResult";


// =========================================
// STYLES
// =========================================

import "./ResultEntryWorkspace.css";


// =========================================
// COMPONENT
// =========================================

const ResultEntryWorkspace = ({

    data = {},

    mode = "enter",

    onClose,

    onSaveDraft,

    onValidate,

    onComplete,

}) => {


    // =========================================
    // RESULT DATA
    // =========================================

    const initialResults = useMemo(() => {

        if (
            !Array.isArray(
                data?.results
            )
        ) {

            return [];

        }


        return data.results;

    }, [
        data?.results,
    ]);


    // =========================================
    // RESULT VALUES
    // =========================================

    const [
        resultValues,
        setResultValues,
    ] = useState(
        () =>
            buildInitialResultValues(
                initialResults
            )
    );


    // =========================================
    // REMARKS
    // =========================================

    const [
        remarks,
        setRemarks,
    ] = useState(
        data?.remarks || ""
    );


    // =========================================
    // ACTIVE TAB
    // =========================================

    const [
        activeTab,
        setActiveTab,
    ] = useState(
        "currentResults"
    );


    // =========================================
    // VALIDATION STATE
    // =========================================

    const [
        validationState,
        setValidationState,
    ] = useState(
        createEmptyValidationState()
    );


    // =========================================
    // DIRTY STATE
    // =========================================

    const [
        isDirty,
        setIsDirty,
    ] = useState(false);


    // =========================================
    // SAVING STATE
    // =========================================

    const [
        isSaving,
        setIsSaving,
    ] = useState(false);


    // =========================================
    // VALIDATING STATE
    // =========================================

    const [
        isValidating,
        setIsValidating,
    ] = useState(false);


    // =========================================
    // COMPLETING STATE
    // =========================================

    const [
        isCompleting,
        setIsCompleting,
    ] = useState(false);


    // =========================================
    // PREVIOUS RESULTS
    // =========================================

    const previousResults = useMemo(() => {

        if (
            !Array.isArray(
                data?.previousResults
            )
        ) {

            return [];

        }


        return data.previousResults;

    }, [
        data?.previousResults,
    ]);


    // =========================================
    // VERIFICATION HISTORY
    // =========================================

    const verificationHistory = useMemo(() => {

        if (
            !Array.isArray(
                data?.verificationHistory
            )
        ) {

            return [];

        }


        return data.verificationHistory;

    }, [
        data?.verificationHistory,
    ]);


    // =========================================
    // RESET WORKSPACE
    // =========================================

    useEffect(() => {

        setResultValues(
            buildInitialResultValues(
                initialResults
            )
        );


        setRemarks(
            data?.remarks || ""
        );


        setValidationState(
            createEmptyValidationState()
        );


        setActiveTab(
            "currentResults"
        );


        setIsDirty(
            false
        );


        setIsSaving(
            false
        );


        setIsValidating(
            false
        );


        setIsCompleting(
            false
        );

    }, [
        data,
        initialResults,
    ]);


    // =========================================
    // RESULT ROWS
    // =========================================

    const resultRows = useMemo(() => {

        return initialResults.map(
            (
                item,
                index
            ) => {

                const resultId =
                    getResultId(
                        item,
                        index
                    );


                const currentValue =
                    resultValues[
                        resultId
                    ] ?? "";


                const validation =
                    findValidationResult(
                        validationState.results,
                        resultId
                    );


                return {

                    ...item,

                    id:
                        resultId,

                    result:
                        currentValue,

                    flag:
                        validation?.flag ||
                        item?.flag ||
                        "",

                    validationStatus:
                        validation?.status ||
                        "",

                    validationMessage:
                        validation?.message ||
                        "",

                };

            }
        );

    }, [

        initialResults,

        resultValues,

        validationState.results,

    ]);


    // =========================================
    // WORKSPACE TABS
    // =========================================

    const workspaceTabs = useMemo(() => {

        return [

            {
                id:
                    "currentResults",

                label:
                    "Test Results",

                count:
                    resultRows.length,

            },

            {
                id:
                    "previousResults",

                label:
                    "Previous Results",

                count:
                    previousResults.length,

            },

            {
                id:
                    "remarks",

                label:
                    "Remarks",

                count:
                    0,

            },

            {
                id:
                    "verificationHistory",

                label:
                    "Verification History",

                count:
                    verificationHistory.length,

            },

        ];

    }, [

        resultRows.length,

        previousResults.length,

        verificationHistory.length,

    ]);


    // =========================================
    // HANDLE TAB CHANGE
    // =========================================

    const handleTabChange = (
        tabId
    ) => {

        const allowedTabs = [

            "currentResults",

            "testResults",

            "previousResults",

            "remarks",

            "verificationHistory",

        ];


        if (
            !allowedTabs.includes(
                tabId
            )
        ) {

            return;

        }


        /*
         * Keep backward compatibility
         * with "testResults".
         */

        if (
            tabId ===
            "testResults"
        ) {

            setActiveTab(
                "currentResults"
            );

            return;

        }


        setActiveTab(
            tabId
        );

    };


    // =========================================
    // HANDLE RESULT CHANGE
    // =========================================

    const handleResultChange = (
        resultId,
        value
    ) => {

        setResultValues(
            (previousValues) => ({

                ...previousValues,

                [resultId]:
                    value,

            })
        );


        setIsDirty(
            true
        );


        /*
         * Once the user changes a value,
         * previous validation is no longer
         * considered final.
         */

        setValidationState(
            (previousState) => ({

                ...previousState,

                isValid:
                    false,

            })
        );

    };


    // =========================================
    // HANDLE REMARKS CHANGE
    // =========================================

    const handleRemarksChange = (
        event
    ) => {

        setRemarks(
            event.target.value
        );


        setIsDirty(
            true
        );

    };


    // =========================================
    // BUILD PAYLOAD
    // =========================================

    const buildPayload = () => {

        return {

            accessionNo:
                data?.accessionNo ||
                null,

            patientId:
                data?.patientId ||
                data?.uhid ||
                null,

            uhid:
                data?.uhid ||
                data?.patientId ||
                null,

            mode:
                mode,

            remarks:
                remarks.trim(),

            results:
                initialResults.map(
                    (
                        item,
                        index
                    ) => {

                        const resultId =
                            getResultId(
                                item,
                                index
                            );


                        const validation =
                            findValidationResult(
                                validationState.results,
                                resultId
                            );


                        return {

                            id:
                                resultId,

                            testId:
                                item?.testId ||
                                null,

                            testCode:
                                item?.testCode ||
                                null,

                            testName:
                                item?.testName ||
                                item?.name ||
                                "",

                            result:
                                resultValues[
                                    resultId
                                ] ?? "",

                            unit:
                                item?.unit ||
                                "",

                            referenceRange:
                                item?.referenceRange ||
                                "",

                            method:
                                item?.method ||
                                "",

                            flag:
                                validation?.flag ||
                                item?.flag ||
                                "",

                        };

                    }
                ),

        };

    };


    // =========================================
    // PERFORM VALIDATION
    // =========================================

    const performValidation = () => {

        try {

            const validation =
                validateResult(
                    initialResults,
                    resultValues
                );


            /*
             * Safety fallback in case the
             * validation utility returns
             * undefined/null unexpectedly.
             */

            if (
                !validation ||
                typeof validation !==
                "object"
            ) {

                return createEmptyValidationState({

                    isValid:
                        false,

                    hasErrors:
                        true,

                    errors: [

                        {

                            id:
                                "validation-error",

                            testName:
                                "Result Validation",

                            value:
                                "",

                            status:
                                "error",

                            flag:
                                "Invalid",

                            message:
                                "Unable to validate the entered results.",

                        },

                    ],

                });

            }


            return {

                isValid:
                    Boolean(
                        validation.isValid
                    ),

                hasErrors:
                    Boolean(
                        validation.hasErrors
                    ),

                hasWarnings:
                    Boolean(
                        validation.hasWarnings
                    ),

                results:
                    Array.isArray(
                        validation.results
                    )
                        ? validation.results
                        : [],

                errors:
                    Array.isArray(
                        validation.errors
                    )
                        ? validation.errors
                        : [],

                warnings:
                    Array.isArray(
                        validation.warnings
                    )
                        ? validation.warnings
                        : [],

            };

        } catch (
            error
        ) {

            console.error(
                "Result validation error:",
                error
            );


            return {

                isValid:
                    false,

                hasErrors:
                    true,

                hasWarnings:
                    false,

                results:
                    [],

                errors: [

                    {

                        id:
                            "validation-error",

                        testName:
                            "Result Validation",

                        value:
                            "",

                        status:
                            "error",

                        flag:
                            "Invalid",

                        message:
                            "An unexpected validation error occurred.",

                    },

                ],

                warnings:
                    [],

            };

        }

    };


    // =========================================
    // VALIDATE
    // =========================================

    const handleValidate = () => {

        if (
            isValidating ||
            isSaving ||
            isCompleting
        ) {

            return;

        }


        setIsValidating(
            true
        );


        const validation =
            performValidation();


        setValidationState(
            validation
        );


        setIsValidating(
            false
        );


        if (
            typeof onValidate ===
            "function"
        ) {

            onValidate({

                success:
                    !validation.hasErrors,

                validation:
                    validation,

                payload:
                    buildPayload(),

                data:
                    data,

                source:
                    "validate",

            });

        }

    };


    // =========================================
    // SAVE DRAFT
    // =========================================

    const handleSaveDraft = () => {

        if (
            isSaving ||
            isValidating ||
            isCompleting
        ) {

            return;

        }


        setIsSaving(
            true
        );


        const payload =
            buildPayload();


        try {

            if (
                typeof onSaveDraft ===
                "function"
            ) {

                onSaveDraft({

                    success:
                        true,

                    payload:
                        payload,

                    data:
                        data,

                });

            }


            setIsDirty(
                false
            );

        } catch (
            error
        ) {

            console.error(
                "Save draft error:",
                error
            );

        } finally {

            setIsSaving(
                false
            );

        }

    };


    // =========================================
    // COMPLETE & SEND
    // =========================================

    const handleComplete = () => {

        if (
            isCompleting ||
            isSaving ||
            isValidating
        ) {

            return;

        }


        /*
         * Always perform fresh validation
         * before completing.
         */

        const validation =
            performValidation();


        setValidationState(
            validation
        );


        // =====================================
        // BLOCK ON VALIDATION ERROR
        // =====================================

        if (
            validation.hasErrors
        ) {

            setActiveTab(
                "currentResults"
            );


            if (
                typeof onValidate ===
                "function"
            ) {

                onValidate({

                    success:
                        false,

                    validation:
                        validation,

                    payload:
                        buildPayload(),

                    data:
                        data,

                    source:
                        "complete",

                });

            }


            return;

        }


        // =====================================
        // COMPLETE
        // =====================================

        setIsCompleting(
            true
        );


        const payload =
            buildPayload();


        try {

            if (
                typeof onComplete ===
                "function"
            ) {

                onComplete({

                    success:
                        true,

                    validation:
                        validation,

                    payload:
                        payload,

                    data:
                        data,

                });

            }


            setIsDirty(
                false
            );

        } catch (
            error
        ) {

            console.error(
                "Complete result error:",
                error
            );

        } finally {

            setIsCompleting(
                false
            );

        }

    };


    // =========================================
    // RENDER TAB CONTENT
    // =========================================

    const renderTabContent = () => {

        switch (
            activeTab
        ) {
     
            

            // =================================
            // TEST RESULTS
            // =================================


            
            case "currentResults":
        //   break;

            case "testResults":
        
                return (

                    <div
                        className="
                            result-entry-workspace__table-panel
                        "
                    >

                        <TestResultTable

                            data={
                                resultRows
                            }

                            columns={
                                resultColumns
                            }

                            resultValues={
                                resultValues
                            }

                            onResultChange={
                                handleResultChange
                            }

                        />

                    </div>

                );


            // =================================
            // PREVIOUS RESULTS
            // =================================

            case "previousResults":

                return (

                    <div
                        className="
                            result-entry-workspace__history-panel
                        "
                    >

                        {previousResults.length === 0 ? (

                            <EmptyPanel

                                title="
                                    No Previous Results
                                "

                                message="
                                    No previous laboratory
                                    results are available
                                    for this patient.
                                "

                            />

                        ) : (

                            <>

                                <div
                                    className="
                                        result-entry-workspace__history-header
                                    "
                                >

                                    <strong>
                                        Previous Results
                                    </strong>

                                    <span>
                                        {
                                            previousResults.length
                                        } Records
                                    </span>

                                </div>


                                <div
                                    className="
                                        result-entry-workspace__history-list
                                    "
                                >

                                    {previousResults.map(
                                        (
                                            item,
                                            index
                                        ) => (

                                            <div
                                                key={
                                                    item?.id ||
                                                    item?.testId ||
                                                    index
                                                }

                                                className="
                                                    result-entry-workspace__history-item
                                                "
                                            >

                                                <div
                                                    className="
                                                        result-entry-workspace__history-main
                                                    "
                                                >

                                                    <strong>
                                                        {
                                                            item?.testName ||
                                                            item?.name ||
                                                            "Laboratory Test"
                                                        }
                                                    </strong>

                                                    <span>
                                                        {
                                                            item?.date ||
                                                            item?.resultDate ||
                                                            item?.createdAt ||
                                                            "—"
                                                        }
                                                    </span>

                                                </div>


                                                <div
                                                    className="
                                                        result-entry-workspace__history-result
                                                    "
                                                >

                                                    <strong>
                                                        {
                                                            item?.result ??
                                                            "—"
                                                        }
                                                    </strong>

                                                    <span>
                                                        {
                                                            item?.unit ||
                                                            ""
                                                        }
                                                    </span>

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>

                            </>

                        )}

                    </div>

                );


            // =================================
            // REMARKS
            // =================================

            case "remarks":

                return (

                    <div
                        className="
                            result-entry-workspace__remarks-panel
                        "
                    >

                        <div
                            className="
                                result-entry-workspace__remarks-header
                            "
                        >

                            <strong>
                                Remarks & Comments
                            </strong>

                            <span>
                                Add laboratory observations
                                or additional comments.
                            </span>

                        </div>


                        <textarea

                            className="
                                result-entry-workspace__remarks-input
                            "

                            value={
                                remarks
                            }

                            onChange={
                                handleRemarksChange
                            }

                            placeholder="
                                Enter remarks or comments...
                            "

                        />

                    </div>

                );


            // =================================
            // VERIFICATION HISTORY
            // =================================

            case "verificationHistory":

                return (

                    <div
                        className="
                            result-entry-workspace__history-panel
                        "
                    >

                        {verificationHistory.length === 0 ? (

                            <EmptyPanel

                                title="
                                    No Verification History
                                "

                                message="
                                    Verification activity
                                    will appear here after
                                    result verification.
                                "

                            />

                        ) : (

                            <>

                                <div
                                    className="
                                        result-entry-workspace__history-header
                                    "
                                >

                                    <strong>
                                        Verification History
                                    </strong>

                                    <span>
                                        {
                                            verificationHistory.length
                                        } Records
                                    </span>

                                </div>


                                <div
                                    className="
                                        result-entry-workspace__history-list
                                    "
                                >

                                    {verificationHistory.map(
                                        (
                                            item,
                                            index
                                        ) => (

                                            <div
                                                key={
                                                    item?.id ||
                                                    index
                                                }

                                                className="
                                                    result-entry-workspace__verification-item
                                                "
                                            >

                                                <div>

                                                    <strong>
                                                        {
                                                            item?.action ||
                                                            "Verification Activity"
                                                        }
                                                    </strong>

                                                    <span>
                                                        {
                                                            item?.user ||
                                                            item?.performedBy ||
                                                            "System"
                                                        }
                                                    </span>

                                                </div>


                                                <div>

                                                    <span>
                                                        {
                                                            item?.date ||
                                                            item?.createdAt ||
                                                            "—"
                                                        }
                                                    </span>

                                                    <span>
                                                        {
                                                            item?.status ||
                                                            "Completed"
                                                        }
                                                    </span>

                                                </div>

                                            </div>

                                        )
                                    )}

                                </div>

                            </>

                        )}

                    </div>

                );


            // =================================
            // FALLBACK
            // =================================

            default:

                return (

                    <div
                        className="
                            result-entry-workspace__table-panel
                        "
                    >

                        <TestResultTable

                            data={
                                resultRows
                            }

                            columns={
                                resultColumns
                            }

                            resultValues={
                                resultValues
                            }

                            onResultChange={
                                handleResultChange
                            }

                        />

                    </div>

                );

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <section
            className="
                result-entry-workspace
            "
        >


            {/* =================================
                PATIENT HEADER
            ================================= */}

            <PatientResultHeader

                data={
                    data
                }

                onClose={
                    onClose
                }

            />


            {/* =================================
                TABS
            ================================= */}

            <TestResultTabs

                tabs={
                    workspaceTabs
                }

                activeTab={
                    activeTab
                }

                onTabChange={
                    handleTabChange
                }

            />


            {/* =================================
                TAB CONTENT
            ================================= */}

            <div
                className="
                    result-entry-workspace__content
                "
            >

                {renderTabContent()}

            </div>


            {/* =================================
                ACTIONS
            ================================= */}

            <ResultEntryActions

                isDirty={
                    isDirty
                }

                isSaving={
                    isSaving
                }

                isValidating={
                    isValidating
                }

                isCompleting={
                    isCompleting
                }

                validationState={
                    validationState
                }

                onCancel={
                    onClose
                }

                onSaveDraft={
                    handleSaveDraft
                }

                onValidate={
                    handleValidate
                }

                onComplete={
                    handleComplete
                }

            />

        </section>

    );

};


// =========================================
// EMPTY PANEL
// =========================================

const EmptyPanel = ({
    title,
    message,
}) => {

    return (

        <div
            className="
                result-entry-workspace__empty-panel
            "
        >

            <strong>
                {title}
            </strong>

            <span>
                {message}
            </span>

        </div>

    );

};


// =========================================
// GET RESULT ID
// =========================================

const getResultId = (
    item,
    index
) => {

    return (
        item?.id ??
        item?.testId ??
        item?.testCode ??
        `result-${index}`
    );

};


// =========================================
// BUILD INITIAL RESULT VALUES
// =========================================

const buildInitialResultValues = (
    results = []
) => {

    const values = {};


    if (
        !Array.isArray(
            results
        )
    ) {

        return values;

    }


    results.forEach(
        (
            item,
            index
        ) => {

            const resultId =
                getResultId(
                    item,
                    index
                );


            values[resultId] =
                item?.result ??
                "";

        }
    );


    return values;

};


// =========================================
// FIND VALIDATION RESULT
// =========================================

const findValidationResult = (
    validationResults = [],
    resultId
) => {

    if (
        !Array.isArray(
            validationResults
        )
    ) {

        return null;

    }


    return (
        validationResults.find(
            (
                item
            ) =>
                String(
                    item?.id
                ) ===
                String(
                    resultId
                )
        ) ||
        null
    );

};


// =========================================
// EMPTY VALIDATION STATE
// =========================================

const createEmptyValidationState = (
    overrides = {}
) => {

    return {

        isValid:
            false,

        hasErrors:
            false,

        hasWarnings:
            false,

        results:
            [],

        errors:
            [],

        warnings:
            [],

        ...overrides,

    };

};


// =========================================
// EXPORT
// =========================================

export default ResultEntryWorkspace;