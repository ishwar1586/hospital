// =========================================
// DISPATCH MODE CHIP
// =========================================

import {
    DISPATCH_MODE,
    isValidDispatchMode,
    getDispatchModeLabel,
} from "../../utils/dispatchMode";


// =========================================
// DISPATCH MODE CHIP
// =========================================

const DispatchModeChip = ({
    mode,
}) => {

    // =========================================
    // NORMALIZE MODE
    // =========================================

    const normalizedMode =
        isValidDispatchMode(
            mode
        )
            ? mode
            : DISPATCH_MODE.EMAIL;


    // =========================================
    // LABEL
    // =========================================

    const label =
        getDispatchModeLabel(
            normalizedMode
        );


    // =========================================
    // MODE CLASS
    // =========================================

    const modeClass =
        normalizedMode
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
                report-dispatch-mode-chip
                report-dispatch-mode-chip--${modeClass}
            `}
        >

            <span
                className="
                    report-dispatch-mode-chip__dot
                "
            />

            <span
                className="
                    report-dispatch-mode-chip__label
                "
            >
                {
                    label
                }
            </span>

        </span>

    );

};


export default DispatchModeChip;