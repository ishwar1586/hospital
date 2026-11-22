// src/master_modules/AppointmentManagement/config/StatsCards.config.js

export const appointmentStatsCards = [
    {
        id: "todays-appointments",
        title: "Today's Appointments",
        value: "128",
        subtitle: "Confirmed: 98",
        secondarySubtitle: "Walk-in: 30",
        icon: "calendar",
        variant: "primary",
    },

    {
        id: "upcoming-appointments",
        title: "Upcoming Appointments",
        value: "356",
        subtitle: "Next 7 Days",
        icon: "upcoming",
        variant: "success",
    },

    {
        id: "pending-requests",
        title: "Pending Requests",
        value: "24",
        subtitle: "Awaiting Confirmation",
        icon: "pending",
        variant: "purple",
    },

    {
        id: "cancelled-today",
        title: "Cancelled (Today)",
        value: "06",
        subtitle: "6.25% Cancellation Rate",
        icon: "cancelled",
        variant: "danger",
    },

    {
        id: "no-show-today",
        title: "No Show (Today)",
        value: "04",
        subtitle: "4.17% No Show Rate",
        icon: "no-show",
        variant: "warning",
    },
];

export default appointmentStatsCards;