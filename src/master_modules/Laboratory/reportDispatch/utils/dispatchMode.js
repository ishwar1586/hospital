// =========================================
// REPORT DISPATCH MODE
// =========================================


// =========================================
// DISPATCH MODE VALUES
// =========================================

export const DISPATCH_MODE = {

    PRINT:
        "Print",

    EMAIL:
        "Email",

    SMS:
        "SMS",

    WHATSAPP:
        "WhatsApp",

    DOWNLOAD:
        "Download",

};


// =========================================
// DISPATCH MODE LIST
// =========================================

export const DISPATCH_MODE_LIST = [

    DISPATCH_MODE.PRINT,

    DISPATCH_MODE.EMAIL,

    DISPATCH_MODE.SMS,

    DISPATCH_MODE.WHATSAPP,

    DISPATCH_MODE.DOWNLOAD,

];


// =========================================
// DISPATCH MODE VALIDATION
// =========================================

export const isValidDispatchMode = (
    mode
) => {

    return DISPATCH_MODE_LIST.includes(
        mode
    );

};


// =========================================
// DISPATCH MODE LABEL
// =========================================

export const getDispatchModeLabel = (
    mode
) => {

    switch (
        mode
    ) {

        case DISPATCH_MODE.PRINT:

            return "Print";


        case DISPATCH_MODE.EMAIL:

            return "Email";


        case DISPATCH_MODE.SMS:

            return "SMS";


        case DISPATCH_MODE.WHATSAPP:

            return "WhatsApp";


        case DISPATCH_MODE.DOWNLOAD:

            return "Download";


        default:

            return "Unknown";

    }

};


// =========================================
// DEFAULT DISPATCH MODE
// =========================================

export const DEFAULT_DISPATCH_MODE =
    DISPATCH_MODE.EMAIL;