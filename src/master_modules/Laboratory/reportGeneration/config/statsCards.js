import DescriptionOutlinedIcon
    from "@mui/icons-material/DescriptionOutlined";

import CheckCircleOutlineOutlinedIcon
    from "@mui/icons-material/CheckCircleOutlineOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import DownloadOutlinedIcon
    from "@mui/icons-material/DownloadOutlined";


// =========================================
// REPORT GENERATION STATS CONFIG
// =========================================

const statsCards = [

    // =========================================
    // REPORTS TO GENERATE
    // =========================================

    {
        id:
            "reportsToGenerate",

        title:
            "Reports to Generate",

        valueKey:
            "reportsToGenerate",

        subtitle:
            "Verified & ready",

        icon:
            DescriptionOutlinedIcon,

        variant:
            "ready",

        filterId:
            "toGenerate",
    },


    // =========================================
    // GENERATED TODAY
    // =========================================

    {
        id:
            "generatedToday",

        title:
            "Generated Today",

        valueKey:
            "generatedToday",

        subtitle:
            "Reports",

        icon:
            CheckCircleOutlineOutlinedIcon,

        variant:
            "generated",

        filterId:
            "generated",
    },


    // =========================================
    // REPORTS PRINTED
    // =========================================

    {
        id:
            "reportsPrinted",

        title:
            "Reports Printed",

        valueKey:
            "reportsPrinted",

        subtitle:
            "Today",

        icon:
            PrintOutlinedIcon,

        variant:
            "printed",

        filterId:
            "printed",
    },


    // =========================================
    // REPORTS EMAILED
    // =========================================

    {
        id:
            "reportsEmailed",

        title:
            "Reports Emailed",

        valueKey:
            "reportsEmailed",

        subtitle:
            "Today",

        icon:
            EmailOutlinedIcon,

        variant:
            "emailed",

        filterId:
            "emailed",
    },


    // =========================================
    // REPORTS DOWNLOADED
    // =========================================

    {
        id:
            "reportsDownloaded",

        title:
            "Reports Downloaded",

        valueKey:
            "reportsDownloaded",

        subtitle:
            "Today",

        icon:
            DownloadOutlinedIcon,

        variant:
            "downloaded",

        filterId:
            "downloaded",
    },

];


export default statsCards;