import SaveOutlinedIcon
    from "@mui/icons-material/SaveOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";

import SendOutlinedIcon
    from "@mui/icons-material/SendOutlined";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";

import CircularProgress
    from "@mui/material/CircularProgress";

import "./ResultEntryActions.css";


// =========================================
// COMPONENT
// =========================================

const ResultEntryActions = ({

    isDirty = false,

    isSaving = false,

    isValidating = false,

    isCompleting = false,

    validationState = {},

    onCancel,

    onSaveDraft,

    onValidate,

    onComplete,

}) => {


    // =========================================
    // LOADING STATE
    // =========================================

    const isBusy =
        isSaving ||
        isValidating ||
        isCompleting;


    // =========================================
    // VALIDATION ERROR
    // =========================================

    const hasValidationErrors =
        Boolean(
            validationState?.hasErrors
        );


    // =========================================
    // CANCEL
    // =========================================

    const handleCancel = () => {

        if (
            isBusy
        ) {

            return;

        }


        if (
            typeof onCancel ===
            "function"
        ) {

            onCancel();

        }

    };


    // =========================================
    // SAVE DRAFT
    // =========================================

    const handleSaveDraft = () => {

        if (
            isBusy
        ) {

            return;

        }


        if (
            typeof onSaveDraft ===
            "function"
        ) {

            onSaveDraft();

        }

    };


    // =========================================
    // VALIDATE
    // =========================================

    const handleValidate = () => {

        if (
            isBusy
        ) {

            return;

        }


        if (
            typeof onValidate ===
            "function"
        ) {

            onValidate();

        }

    };


    // =========================================
    // COMPLETE
    // =========================================

    const handleComplete = () => {

        if (
            isBusy
        ) {

            return;

        }


        if (
            hasValidationErrors
        ) {

            if (
                typeof onValidate ===
                "function"
            ) {

                onValidate();

            }


            return;

        }


        if (
            typeof onComplete ===
            "function"
        ) {

            onComplete();

        }

    };


    // =========================================
    // RENDER
    // =========================================

    return (

        <footer
            className="
                result-entry-actions
            "
        >


            {/* =================================
                LEFT SIDE
            ================================= */}

            <div
                className="
                    result-entry-actions__left
                "
            >

                {isDirty && (

                    <span
                        className="
                            result-entry-actions__unsaved
                        "
                    >

                        Unsaved changes

                    </span>

                )}

            </div>


            {/* =================================
                RIGHT SIDE
            ================================= */}

            <div
                className="
                    result-entry-actions__right
            "
            >


                {/* =================================
                    CANCEL
                ================================= */}

                <button

                    type="button"

                    className="
                        result-entry-actions__button
                        result-entry-actions__button--cancel
                    "

                    disabled={
                        isBusy
                    }

                    onClick={
                        handleCancel
                    }

                >

                    <CloseOutlinedIcon />

                    <span>
                        Cancel
                    </span>

                </button>


                {/* =================================
                    SAVE DRAFT
                ================================= */}

                <button

                    type="button"

                    className="
                        result-entry-actions__button
                        result-entry-actions__button--secondary
                    "

                    disabled={
                        isBusy ||
                        !isDirty
                    }

                    onClick={
                        handleSaveDraft
                    }

                >

                    {isSaving ? (

                        <CircularProgress
                            size={14}
                            thickness={5}
                        />

                    ) : (

                        <SaveOutlinedIcon />

                    )}


                    <span>

                        {isSaving
                            ? "Saving..."
                            : "Save Draft"}

                    </span>

                </button>


                {/* =================================
                    VALIDATE
                ================================= */}

                <button

                    type="button"

                    className="
                        result-entry-actions__button
                        result-entry-actions__button--validate
                    "

                    disabled={
                        isBusy
                    }

                    onClick={
                        handleValidate
                    }

                >

                    {isValidating ? (

                        <CircularProgress
                            size={14}
                            thickness={5}
                        />

                    ) : (

                        <VerifiedOutlinedIcon />

                    )}


                    <span>

                        {isValidating
                            ? "Validating..."
                            : "Validate"}

                    </span>

                </button>


                {/* =================================
                    COMPLETE & SEND
                ================================= */}

                <button

                    type="button"

                    className="
                        result-entry-actions__button
                        result-entry-actions__button--primary
                    "

                    disabled={
                        isBusy
                    }

                    onClick={
                        handleComplete
                    }

                >

                    {isCompleting ? (

                        <CircularProgress
                            size={14}
                            thickness={5}
                        />

                    ) : (

                        <SendOutlinedIcon />

                    )}


                    <span>

                        {isCompleting
                            ? "Completing..."
                            : "Complete & Send"}

                    </span>

                </button>

            </div>

        </footer>

    );

};


export default ResultEntryActions;