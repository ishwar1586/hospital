// =========================================================
// Appointment Management Configuration
// =========================================================


// =========================================================
// PAGE HEADER
// =========================================================

export const appointmentHeaderConfig = {
    title: "Appointments",

    subtitle:
        "Manage patient appointments, schedules and bookings",

    actions: [
        {
            id: "appointment-settings",
            label: "Appointment Settings",
            type: "secondary",
            icon: "settings",
        },

        {
            id: "export-appointments",
            label: "Export",
            type: "secondary",
            icon: "download",
        },

        {
            id: "new-appointment",
            label: "New Appointment",
            type: "primary",
            icon: "add",
        },
    ],
};


// =========================================================
// APPOINTMENT TABS
// =========================================================

export const appointmentTabs = [
    {
        id: "appointment-list",
        label: "Appointment List",
        value: "appointment-list",
    },

    {
        id: "todays-schedule",
        label: "Today's Schedule",
        value: "todays-schedule",
    },

    {
        id: "upcoming",
        label: "Upcoming",
        value: "upcoming",
    },

    {
        id: "requests",
        label: "Requests",
        value: "requests",
    },
];


export const appointmentTabsInitialValue =
    "appointment-list";


// =========================================================
// APPOINTMENT DETAILS TABS
// =========================================================
// These tabs are used inside the Appointment Details
// profile/drawer.
//
// Patient Info
// Visit Info
// History
// Notes
// Payment
// =========================================================

export const appointmentDetailsTabs = [
    {
        id: "patient-info",
        label: "Patient Info",
        value: "patient-info",
    },

    {
        id: "visit-info",
        label: "Visit Info",
        value: "visit-info",
    },

    {
        id: "history",
        label: "History",
        value: "history",
    },

    {
        id: "notes",
        label: "Notes",
        value: "notes",
    },

    {
        id: "payment",
        label: "Payment",
        value: "payment",
    },
];


export const appointmentDetailsTabsInitialValue =
    "patient-info";