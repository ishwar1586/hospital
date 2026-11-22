import "./SectionHeader.css";

import {

    ArrowForwardRounded,

} from "@mui/icons-material";

const SectionHeader = ({

    title = "Popular Medicines",

    actionLabel = "View All",

    onAction,

}) => {

    return (

        <div className="section-header">

            {/* ==========================================
                Left
            ========================================== */}

            <div className="section-header-left">

                <h2>

                    {title}

                </h2>

                <span>

                    Frequently dispensed medicines

                </span>

            </div>

            {/* ==========================================
                Right
            ========================================== */}

            <button

                type="button"

                className="section-action-btn"

                onClick={onAction}

            >

                {actionLabel}

                <ArrowForwardRounded />

            </button>

        </div>

    );

};

export default SectionHeader;