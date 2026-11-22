import Drawer from "@mui/material/Drawer";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import AuditOverview from "./AuditOverview";
import AuditSummaryCard from "./AuditSummaryCard";
import AuditVarianceSummary from "./AuditVarianceSummary";
// import AuditItemDetails from "./AuditItemDetails";
import AuditVarianceTable from "./AuditVarianceTable";
import AuditActivityTimeline from "./AuditActivityTimeline";
import AuditNotes from "./AuditNotes";
import AuditAttachment from "./AuditAttachment";
import AuditBottomActions from "./AuditBottomActions";

import "./AuditDrawer.css";

const AuditDrawer = ({

    open,

    data,

    onClose,

}) => {

    if (!data) return null;

    return (

        <Drawer

            anchor="right"

            open={open}

            onClose={onClose}

            PaperProps={{

                sx: {

                    width: 650,

                    maxWidth: "100%",

                },

            }}

        >

            <div className="audit-drawer">

                {/* ==========================================
                    Header
                ========================================== */}

                <div className="audit-drawer-header">

                    <div>

                        <h2>

                            Audit Details

                        </h2>

                        <span>

                            {data.auditNo}

                        </span>

                    </div>

                    <button

                        className="audit-close-btn"

                        onClick={onClose}

                    >

                        <CloseOutlinedIcon />

                    </button>

                </div>

                {/* ==========================================
                    Body
                ========================================== */}

                <div className="audit-drawer-body">


                    <AuditOverview

                        data={data}

                    />

                    <AuditSummaryCard

                        data={data}

                    />

                    <AuditVarianceSummary

                        data={data}

                    />

                    {/* <AuditItemDetails

                        data={data}

                    /> */}

                    <AuditVarianceTable

                        data={data}

                    />

                    <AuditActivityTimeline

                        data={data}

                    />

                    <AuditNotes

                        data={data}

                    />

                    <AuditAttachment

                        data={data}

                    />

                    {/* <AuditBottomActions

                        data={data}

                    /> */}

                    <AuditBottomActions

                        data={data}

                        onClose={onClose}

                    />

                </div>

            </div>

        </Drawer>

    );

};

export default AuditDrawer;