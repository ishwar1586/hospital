import "./DrawerFooter.css";

import {
    CloseOutlined,
    SaveOutlined,
} from "@mui/icons-material";

const DrawerFooter = ({

    onCancel,

    onSave,

    loading = false,

}) => {

    return (

        <div className="adjustment-footer">

            <button

                type="button"

                className="adjustment-btn secondary"

                onClick={onCancel}

            >

                <CloseOutlined />

                Cancel

            </button>

            <button

                type="button"

                className="adjustment-btn primary"

                onClick={onSave}

                disabled={loading}

            >

                <SaveOutlined />

                {

                    loading

                        ? "Saving..."

                        : "Save Adjustment"

                }

            </button>

        </div>

    );

};

export default DrawerFooter;