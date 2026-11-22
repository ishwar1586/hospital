import "./GRNNotes.css";

const GRNNotes = ({
    formData,
    handleChange,
}) => {

    return (

        <div className="grn-notes-card">

            <h3>
                Notes
            </h3>

            <div className="grn-notes-body">

                <div className="grn-notes-field">

                    <label>

                        Internal Notes

                    </label>

                    <textarea

                        name="internalNotes"

                        value={
                            formData.internalNotes || ""
                        }

                        onChange={handleChange}

                        placeholder="Enter internal notes..."

                        rows={4}

                    />

                </div>

            </div>

        </div>

    );

};

export default GRNNotes;