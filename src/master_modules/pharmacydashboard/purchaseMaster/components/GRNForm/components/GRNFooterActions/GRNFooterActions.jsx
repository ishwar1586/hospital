import "./GRNFooterActions.css";

const GRNFooterActions = ({

    onCancel,

    onPrint,

    onSave,

    loading = false,

}) => {

    return (

        <div className="grn-footer-actions">

            <div>

                <button
                    className="cancel-btn"
                    onClick={onCancel}
                >

                    Cancel

                </button>

            </div>

            <div className="footer-right">

                <button
                    className="print-btn"
                    onClick={onPrint}
                >

                    Print Preview

                </button>

                <button
                    className="save-btn"
                    onClick={onSave}
                >

                    {
                        loading
                            ? "Saving..."
                            : "Save GRN"
                    }

                </button>

            </div>

        </div>

    );

};

export default GRNFooterActions;