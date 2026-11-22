import HourglassEmptyOutlinedIcon
    from "@mui/icons-material/HourglassEmptyOutlined";

import RateReviewOutlinedIcon
    from "@mui/icons-material/RateReviewOutlined";

import PriorityHighOutlinedIcon
    from "@mui/icons-material/PriorityHighOutlined";

import VerifiedOutlinedIcon
    from "@mui/icons-material/VerifiedOutlined";


// =========================================
// RESULT VERIFICATION STATS
// =========================================

const statsCards = [

    // =========================================
    // PENDING VERIFICATION
    // =========================================

    {
        id:
            "pendingVerification",

        title:
            "Pending Verification",

        value:
            0,

        subtitle:
            "Awaiting review",

        icon:
            HourglassEmptyOutlinedIcon,

        variant:
            "pending",

        filterId:
            "pending",

    },


    // =========================================
    // UNDER REVIEW
    // =========================================

    {
        id:
            "underReview",

        title:
            "Under Review",

        value:
            0,

        subtitle:
            "Currently being reviewed",

        icon:
            RateReviewOutlinedIcon,

        variant:
            "review",

        filterId:
            "underReview",

    },


    // =========================================
    // CRITICAL RESULTS
    // =========================================

    {
        id:
            "criticalResults",

        title:
            "Critical Results",

        value:
            0,

        subtitle:
            "Require immediate attention",

        icon:
            PriorityHighOutlinedIcon,

        variant:
            "critical",

        filterId:
            "critical",

    },


    // =========================================
    // VERIFIED TODAY
    // =========================================

    {
        id:
            "verifiedToday",

        title:
            "Verified Today",

        value:
            0,

        subtitle:
            "Successfully verified",

        icon:
            VerifiedOutlinedIcon,

        variant:
            "verified",

        filterId:
            "verified",

    },

];


export default statsCards;