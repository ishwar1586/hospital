import {
    useEffect,
} from "react";

import {
    createPortal,
} from "react-dom";


// =========================================
// ICONS
// =========================================

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import ErrorOutlineOutlinedIcon
    from "@mui/icons-material/ErrorOutlineOutlined";

import WarningAmberOutlinedIcon
    from "@mui/icons-material/WarningAmberOutlined";

import InfoOutlinedIcon
    from "@mui/icons-material/InfoOutlined";

import CloseOutlinedIcon
    from "@mui/icons-material/CloseOutlined";


// =========================================
// STYLES
// =========================================

import "./ToastNotification.css";


// =========================================
// COMPONENT
// =========================================

const ToastNotification = ({
    open = false,

    type = "success",

    title = "Success",

    message = "",

    duration = 4000,

    onClose,
}) => {


    // =========================================
    // AUTO CLOSE
    // =========================================

    useEffect(() => {

        if (!open) {

            return undefined;

        }


        if (
            duration <= 0
        ) {

            return undefined;

        }


        const timer =
            setTimeout(() => {

                if (
                    typeof onClose ===
                    "function"
                ) {

                    onClose();

                }

            }, duration);


        return () => {

            clearTimeout(
                timer
            );

        };

    }, [
        open,
        duration,
        onClose,
    ]);


    // =========================================
    // DON'T RENDER
    // =========================================

    if (!open) {

        return null;

    }


    // =========================================
    // TOAST CONFIG
    // =========================================

    const toastConfig = {

        success: {
            icon:
                <CheckCircleOutlineOutlinedIcon />,
        },

        error: {
            icon:
                <ErrorOutlineOutlinedIcon />,
        },

        warning: {
            icon:
                <WarningAmberOutlinedIcon />,
        },

        info: {
            icon:
                <InfoOutlinedIcon />,
        },

    };


    // =========================================
    // NORMALIZE TYPE
    // =========================================

    const normalizedType =
        toastConfig[type]
            ? type
            : "success";


    const currentConfig =
        toastConfig[
            normalizedType
        ];


    // =========================================
    // CLOSE HANDLER
    // =========================================

    const handleClose = () => {

        if (
            typeof onClose ===
            "function"
        ) {

            onClose();

        }

    };


    // =========================================
    // TOAST CONTENT
    // =========================================

    const toastContent = (

        <div
            className={`
                toast-notification
                toast-notification--${normalizedType}
            `}
            role="alert"
            aria-live="polite"
        >


            {/* =================================
                ICON
            ================================= */}

            <div
                className="
                    toast-notification__icon
                "
                aria-hidden="true"
            >

                {
                    currentConfig.icon
                }

            </div>


            {/* =================================
                CONTENT
            ================================= */}

            <div
                className="
                    toast-notification__content
                "
            >

                <div
                    className="
                        toast-notification__title
                    "
                >

                    {
                        title
                    }

                </div>


                {message && (

                    <div
                        className="
                            toast-notification__message
                        "
                    >

                        {
                            message
                        }

                    </div>

                )}

            </div>


            {/* =================================
                CLOSE
            ================================= */}

            <button

                type="button"

                className="
                    toast-notification__close
                "

                onClick={
                    handleClose
                }

                aria-label="
                    Close notification
                "

            >

                <CloseOutlinedIcon />

            </button>


            {/* =================================
                PROGRESS
            ================================= */}

            {duration > 0 && (

                <div
                    className="
                        toast-notification__progress
                    "
                    style={{
                        animationDuration:
                            `${duration}ms`,
                    }}
                    aria-hidden="true"
                />

            )}

        </div>

    );


    // =========================================
    // PORTAL
    // =========================================

    return createPortal(
        toastContent,
        document.body
    );

};


export default ToastNotification;