// =========================================
// DISPATCH STATUS CHIP
// =========================================

import {
    DISPATCH_STATUS,
    isValidDispatchStatus,
    getDispatchStatusLabel,
} from "../../utils/dispatchStatus";


// =========================================
// DISPATCH STATUS CHIP
// =========================================

const DispatchStatusChip = ({
    status,
}) => {

    // =========================================
    // VALIDATE STATUS
    // =========================================

    const normalizedStatus =
        isValidDispatchStatus(
            status
        )
            ? status
            : DISPATCH_STATUS.PENDING;


    // =========================================
    // LABEL
    // =========================================

    const label =
        getDispatchStatusLabel(
            normalizedStatus
        );


    // =========================================
    // CSS CLASS
    // =========================================

    const statusClass =
        normalizedStatus
            .toLowerCase()
            .replace(
                /\s+/g,
                "-"
            );


    // =========================================
    // RENDER
    // =========================================

    return (

        <span
            className={`
                report-dispatch-status-chip
                report-dispatch-status-chip--${statusClass}
            `}
        >

            <span
                className="
                    report-dispatch-status-chip__dot
                "
            />


            <span
                className="
                    report-dispatch-status-chip__label
                "
            >
                {
                    label
                }
            </span>

        </span>

    );

};


export default DispatchStatusChip;