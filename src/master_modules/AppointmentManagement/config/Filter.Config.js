// =========================================
// Appointment Filter Configuration
// =========================================

export const appointmentFilterFields = [

    // =========================================
    // Department
    // =========================================
    {
        name: "department",
        label: "Select Department",
        type: "select",
        placeholder: "All Departments",

        options: [
            {
                value: "all",
                label: "All Departments",
            },
            {
                value: "General Medicine",
                label: "General Medicine",
            },
            {
                value: "Cardiology",
                label: "Cardiology",
            },
            {
                value: "Gynecology",
                label: "Gynecology",
            },
            {
                value: "Neurology",
                label: "Neurology",
            },
            {
                value: "Orthopedics",
                label: "Orthopedics",
            },
            {
                value: "Emergency",
                label: "Emergency",
            },
            {
                value: "Pediatrics",
                label: "Pediatrics",
            },
        ],
    },

    // =========================================
    // Doctor
    // =========================================
    {
        name: "doctor",
        label: "Select Doctor",
        type: "select",
        placeholder: "All Doctors",

        options: [
            {
                value: "all",
                label: "All Doctors",
            },
            {
                value: "Dr. Ankit Verma",
                label: "Dr. Ankit Verma",
            },
            {
                value: "Dr. Neha Kapoor",
                label: "Dr. Neha Kapoor",
            },
            {
                value: "Dr. Rajiv Mehta",
                label: "Dr. Rajiv Mehta",
            },
            {
                value: "Dr. Vikram Singh",
                label: "Dr. Vikram Singh",
            },
            {
                value: "Dr. Pooja Sharma",
                label: "Dr. Pooja Sharma",
            },
        ],
    },

    // =========================================
    // Appointment Type
    // =========================================
    {
        name: "appointmentType",
        label: "Appointment Type",
        type: "select",
        placeholder: "All Types",

        options: [
            {
                value: "all",
                label: "All Types",
            },
            {
                value: "Consultation",
                label: "Consultation",
            },
            {
                value: "Follow-up",
                label: "Follow-up",
            },
            {
                value: "Emergency",
                label: "Emergency",
            },
        ],
    },

    // =========================================
    // Status
    // =========================================
    {
        name: "status",
        label: "Status",
        type: "select",
        placeholder: "All Status",

        options: [
            {
                value: "all",
                label: "All Status",
            },
            {
                value: "Scheduled",
                label: "Scheduled",
            },
            {
                value: "Confirmed",
                label: "Confirmed",
            },
            {
                value: "Checked In",
                label: "Checked In",
            },
            {
                value: "Completed",
                label: "Completed",
            },
            {
                value: "Cancelled",
                label: "Cancelled",
            },
            {
                value: "No Show",
                label: "No Show",
            },
        ],
    },

    // =========================================
    // Date
    // =========================================
    {
        name: "date",
        label: "Date",
        type: "date",
    },
];


// =========================================
// Initial Filter Values
// =========================================

export const appointmentFilterInitialValues = {

    department: "all",

    doctor: "all",

    appointmentType: "all",

    status: "all",

    date: "2026-09-01",
};


// =========================================
// Default Export
// =========================================

export default appointmentFilterFields;