import React, {
    useState,
    useRef,
    useEffect,
} from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./AppointmentTableRow.css";


const AppointmentTableRow = ({
    appointment,
    onView,
    onEdit,
    onCheckIn,
    onReschedule,
    onCancel,
    onAction,
}) => {

    // =====================================================
    // Menu State
    // =====================================================

    const [menuOpen, setMenuOpen] = useState(false);

    const [
        menuPlacement,
        setMenuPlacement,
    ] = useState("bottom");


    // =====================================================
    // Refs
    // =====================================================

    const menuRef = useRef(null);

    const menuElementRef = useRef(null);


    // =====================================================
    // Close Menu On Outside Click
    // =====================================================

    useEffect(() => {

        const handleOutsideClick = (event) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target
                )
            ) {
                setMenuOpen(false);
            }

        };


        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );


        return () => {

            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

        };

    }, []);


    // =====================================================
    // Calculate Menu Placement
    // =====================================================

    useEffect(() => {

        if (!menuOpen) {
            return;
        }


        const calculateMenuPlacement = () => {

            if (
                !menuRef.current ||
                !menuElementRef.current
            ) {
                return;
            }


            const actionCellRect =
                menuRef.current.getBoundingClientRect();


            const menuRect =
                menuElementRef.current.getBoundingClientRect();


            const viewportHeight =
                window.innerHeight;


            const spacing = 8;


            // =============================================
            // Available Space
            // =============================================

            const spaceBelow =
                viewportHeight -
                actionCellRect.bottom;


            const spaceAbove =
                actionCellRect.top;


            // =============================================
            // Menu Height
            // =============================================

            const menuHeight =
                menuRect.height;


            // =============================================
            // Prefer Bottom
            // =============================================

            if (
                spaceBelow >=
                menuHeight + spacing
            ) {

                setMenuPlacement(
                    "bottom"
                );

                return;

            }


            // =============================================
            // Use Top If Bottom Is Not Available
            // =============================================

            if (
                spaceAbove >=
                menuHeight + spacing
            ) {

                setMenuPlacement(
                    "top"
                );

                return;

            }


            // =============================================
            // If Neither Side Has Full Space
            // Choose The Side With More Space
            // =============================================

            if (
                spaceAbove >
                spaceBelow
            ) {

                setMenuPlacement(
                    "top"
                );

            } else {

                setMenuPlacement(
                    "bottom"
                );

            }

        };


        // Run after menu has been rendered.
        const frameId =
            window.requestAnimationFrame(
                calculateMenuPlacement
            );


        // =============================================
        // Recalculate On Scroll
        // =============================================

        const handleScroll = () => {

            calculateMenuPlacement();

        };


        // =============================================
        // Recalculate On Resize
        // =============================================

        const handleResize = () => {

            calculateMenuPlacement();

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            true
        );


        window.addEventListener(
            "resize",
            handleResize
        );


        return () => {

            window.cancelAnimationFrame(
                frameId
            );


            window.removeEventListener(
                "scroll",
                handleScroll,
                true
            );


            window.removeEventListener(
                "resize",
                handleResize
            );

        };

    }, [menuOpen]);


    // =====================================================
    // Action Handler
    // =====================================================

    const handleAction = (action) => {

        setMenuOpen(false);


        // =============================================
        // Generic Action Callback
        // =============================================

        if (
            typeof onAction === "function"
        ) {
            onAction(
                action,
                appointment
            );
        }


        // =============================================
        // View
        // =============================================

        if (action === "view") {

            if (
                typeof onView === "function"
            ) {
                onView(
                    appointment
                );
            }

            return;
        }


        // =============================================
        // Edit
        // =============================================

        if (action === "edit") {

            if (
                typeof onEdit === "function"
            ) {
                onEdit(
                    appointment
                );
            }

            return;
        }


        // =============================================
        // Check In
        // =============================================

        if (action === "checkIn") {

            if (
                typeof onCheckIn === "function"
            ) {
                onCheckIn(
                    appointment
                );
            }

            return;
        }


        // =============================================
        // Reschedule
        // =============================================

        if (action === "reschedule") {

            if (
                typeof onReschedule === "function"
            ) {
                onReschedule(
                    appointment
                );
            }

            return;
        }


        // =============================================
        // Cancel
        // =============================================

        if (action === "cancel") {

            if (
                typeof onCancel === "function"
            ) {
                onCancel(
                    appointment
                );
            }

        }

    };


    // =====================================================
    // Appointment Data
    // =====================================================

    const {
        appointmentId,
        date,
        time,
        patientName,
        patientId,
        doctorName,
        department,
        appointmentType,
        status,
    } = appointment;


    // =====================================================
    // Status Class
    // =====================================================

    const normalizedStatus = String(
        status || ""
    )
        .toLowerCase()
        .replace(
            /\s+/g,
            "-"
        );


    // =====================================================
    // Render
    // =====================================================

    return (

        <div className="appointment-table-row">


            {/* =============================================
                Appointment
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--appointment
                "
            >

                <div className="appointment-table-row__appointment-id">
                    {appointmentId ||
                        appointment.id ||
                        "—"}
                </div>


                <div className="appointment-table-row__appointment-date">
                    {date || "—"}
                </div>


                <div className="appointment-table-row__appointment-time">
                    {time || "—"}
                </div>

            </div>


            {/* =============================================
                Patient
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--patient
                "
            >

                <div className="appointment-table-row__patient-name">
                    {patientName || "—"}
                </div>


                <div className="appointment-table-row__patient-id">
                    {patientId || "—"}
                </div>

            </div>


            {/* =============================================
                Doctor
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--doctor
                "
            >

                <span className="appointment-table-row__doctor-name">
                    {doctorName || "—"}
                </span>

            </div>


            {/* =============================================
                Department
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--department
                "
            >

                <span>
                    {department || "—"}
                </span>

            </div>


            {/* =============================================
                Appointment Type
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--type
                "
            >

                <span className="appointment-table-row__type">
                    {appointmentType || "—"}
                </span>

            </div>


            {/* =============================================
                Status
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--status
                "
            >

                <span
                    className={`
                        appointment-table-row__status
                        appointment-table-row__status--${normalizedStatus}
                    `}
                >
                    {status || "—"}
                </span>

            </div>


            {/* =============================================
                Actions
            ============================================= */}

            <div
                className="
                    appointment-table-row__cell
                    appointment-table-row__cell--actions
                "
                ref={menuRef}
            >

                {/* =========================================
                    Action Button
                ========================================= */}

                <button
                    type="button"
                    className="
                        appointment-table-row__action-button
                    "
                    onClick={() => {

                        setMenuOpen(
                            (previous) =>
                                !previous
                        );

                        setMenuPlacement(
                            "bottom"
                        );

                    }}
                    aria-label="Appointment actions"
                    aria-expanded={menuOpen}
                    aria-haspopup="menu"
                >

                    <MoreVertIcon
                        fontSize="small"
                    />

                </button>


                {/* =========================================
                    Action Menu
                ========================================= */}

                {menuOpen && (

                    <div
                        ref={menuElementRef}
                        className={`
                            appointment-table-row__action-menu
                            appointment-table-row__action-menu--${menuPlacement}
                        `}
                        role="menu"
                    >

                        {/* =================================
                            View Appointment
                        ================================= */}

                        <button
                            type="button"
                            className="
                                appointment-table-row__menu-item
                            "
                            onClick={() =>
                                handleAction(
                                    "view"
                                )
                            }
                            role="menuitem"
                        >

                            <span>
                                View Appointment
                            </span>

                        </button>


                        {/* =================================
                            Edit
                        ================================= */}

                        <button
                            type="button"
                            className="
                                appointment-table-row__menu-item
                            "
                            onClick={() =>
                                handleAction(
                                    "edit"
                                )
                            }
                            role="menuitem"
                        >

                            <span>
                                Edit
                            </span>

                        </button>


                        {/* =================================
                            Check In
                        ================================= */}

                        <button
                            type="button"
                            className="
                                appointment-table-row__menu-item
                            "
                            onClick={() =>
                                handleAction(
                                    "checkIn"
                                )
                            }
                            role="menuitem"
                        >

                            <span>
                                Check In
                            </span>

                        </button>


                        {/* =================================
                            Reschedule
                        ================================= */}

                        <button
                            type="button"
                            className="
                                appointment-table-row__menu-item
                            "
                            onClick={() =>
                                handleAction(
                                    "reschedule"
                                )
                            }
                            role="menuitem"
                        >

                            <span>
                                Reschedule
                            </span>

                        </button>


                        {/* =================================
                            Cancel
                        ================================= */}

                        <button
                            type="button"
                            className="
                                appointment-table-row__menu-item
                                appointment-table-row__menu-item--danger
                            "
                            onClick={() =>
                                handleAction(
                                    "cancel"
                                )
                            }
                            role="menuitem"
                        >

                            <span>
                                Cancel Appointment
                            </span>

                        </button>

                    </div>

                )}

            </div>

        </div>

    );

};


export default AppointmentTableRow;