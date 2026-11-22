import { useState } from "react";

import "./LedgerNotes.css";

const LedgerNotes = ({
    notes = [],
}) => {

    const [noteText,
        setNoteText] =
        useState("");

    const handleAddNote = () => {

        if (!noteText.trim())
            return;

        console.log(
            "Add Note",
            noteText
        );

        setNoteText("");
    };

    return (

        <div className="ledger-notes">

            <div className="notes-card">

                <div className="notes-header">

                    <h3>
                        Add Note
                    </h3>

                </div>

                <textarea
                    placeholder="Write note here..."
                    value={noteText}
                    onChange={(e) =>
                        setNoteText(
                            e.target.value
                        )
                    }
                />

                <button
                    className="add-note-btn"
                    onClick={
                        handleAddNote
                    }
                >
                    Save Note
                </button>

            </div>

            <div className="notes-history">

                <h3>
                    Notes History
                </h3>

                {notes.map(
                    (note) => (

                        <div
                            key={note.id}
                            className="note-item"
                        >

                            <div className="note-meta">

                                <span>
                                    {
                                        note.noteDate
                                    }
                                </span>

                                <span>
                                    {
                                        note.createdBy
                                    }
                                </span>

                            </div>

                            <p>
                                {
                                    note.remark
                                }
                            </p>

                        </div>
                    )
                )}

            </div>

        </div>

    );
};

export default LedgerNotes;