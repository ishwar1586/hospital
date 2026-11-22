import React, {
    useState,
} from "react";

import "./NotesTab.css";

const NotesTab = ({
    appointment,
}) => {

    // =========================================
    // Safety Check
    // =========================================

    if (!appointment) {
        return (
            <div className="appointment-notes-tab appointment-notes-tab--empty">
                <p>
                    Appointment notes are not available.
                </p>
            </div>
        );
    }


    // =========================================
    // Existing Notes
    // =========================================

    const existingNotes =
        appointment?.notes || "";


    // =========================================
    // Local Note State
    // =========================================

    const [
        noteText,
        setNoteText,
    ] = useState(
        existingNotes
    );


    const [
        isSaving,
        setIsSaving,
    ] = useState(false);


    // =========================================
    // Note Change
    // =========================================

    const handleNoteChange = (
        event
    ) => {

        setNoteText(
            event.target.value
        );

    };


    // =========================================
    // Save Note
    // =========================================

    const handleSaveNote = () => {

        const trimmedNote =
            noteText.trim();

        if (!trimmedNote) {
            return;
        }


        setIsSaving(true);


        /*
         * Backend/API integration will be
         * connected here later.
         */

        console.log(
            "Saving appointment note:",
            {
                appointmentId:
                    appointment?.appointmentId ||
                    appointment?.id,

                note: trimmedNote,
            }
        );


        setTimeout(() => {

            setIsSaving(false);

        }, 400);

    };


    // =========================================
    // Clear Note
    // =========================================

    const handleClearNote = () => {

        setNoteText("");

    };


    // =========================================
    // Character Count
    // =========================================

    const characterCount =
        noteText.length;


    // =========================================
    // Render
    // =========================================

    return (
        <div className="appointment-notes-tab">

            {/* =====================================
                Notes Section
            ===================================== */}

            <section className="appointment-notes-tab__section">

                {/* =================================
                    Section Header
                ================================= */}

                <div className="appointment-notes-tab__section-header">

                    <div>
                        <h3>
                            Appointment Notes
                        </h3>

                        <p>
                            Add or update notes related
                            to this appointment.
                        </p>
                    </div>

                </div>


                {/* =================================
                    Note Editor
                ================================= */}

                <div className="appointment-notes-tab__editor">

                    <label
                        htmlFor="appointment-note"
                        className="appointment-notes-tab__label"
                    >
                        Notes
                    </label>


                    <textarea
                        id="appointment-note"
                        className="appointment-notes-tab__textarea"
                        value={noteText}
                        onChange={
                            handleNoteChange
                        }
                        placeholder="Enter appointment notes..."
                        maxLength={1000}
                    />


                    {/* =================================
                        Editor Footer
                    ================================= */}

                    <div className="appointment-notes-tab__editor-footer">

                        <span className="appointment-notes-tab__character-count">
                            {characterCount}/1000
                        </span>


                        <div className="appointment-notes-tab__editor-actions">

                            <button
                                type="button"
                                className="appointment-notes-tab__clear-button"
                                onClick={
                                    handleClearNote
                                }
                                disabled={
                                    !noteText
                                }
                            >
                                Clear
                            </button>


                            <button
                                type="button"
                                className="appointment-notes-tab__save-button"
                                onClick={
                                    handleSaveNote
                                }
                                disabled={
                                    !noteText.trim() ||
                                    isSaving
                                }
                            >
                                {isSaving
                                    ? "Saving..."
                                    : "Save Note"}
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                Appointment Reference
            ===================================== */}

            <section className="appointment-notes-tab__section">

                <div className="appointment-notes-tab__reference">

                    <div className="appointment-notes-tab__reference-item">

                        <span className="appointment-notes-tab__reference-label">
                            Appointment
                        </span>

                        <span className="appointment-notes-tab__reference-value">
                            {
                                appointment?.appointmentId ||
                                appointment?.id ||
                                "—"
                            }
                        </span>

                    </div>


                    <div className="appointment-notes-tab__reference-item">

                        <span className="appointment-notes-tab__reference-label">
                            Patient
                        </span>

                        <span className="appointment-notes-tab__reference-value">
                            {
                                appointment?.patientName ||
                                "—"
                            }
                        </span>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default NotesTab;