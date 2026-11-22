// =========================================
// REPORT GENERATION TAB CONFIG
// =========================================

const tabs = [

    // =========================================
    // TO GENERATE
    // =========================================

    {
        id:
            "toGenerate",

        label:
            "To Generate",

        countKey:
            "reportsToGenerate",

        panelId:
            "report-generation-panel-to-generate",
    },


    // =========================================
    // GENERATED
    // =========================================

    {
        id:
            "generated",

        label:
            "Generated",

        countKey:
            "generatedToday",

        panelId:
            "report-generation-panel-generated",
    },


    // =========================================
    // PRINTED
    // =========================================

    {
        id:
            "printed",

        label:
            "Printed",

        countKey:
            "reportsPrinted",

        panelId:
            "report-generation-panel-printed",
    },


    // =========================================
    // EMAILED
    // =========================================

    {
        id:
            "emailed",

        label:
            "Emailed",

        countKey:
            "reportsEmailed",

        panelId:
            "report-generation-panel-emailed",
    },

];


export default tabs;