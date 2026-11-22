import React from "react";

import "./AppointmentDetailsForm.css";

const departmentOptions = [
    {
        value: "",
        label: "Select Department",
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
];

const doctorOptions = [
    {
        value: "",
        label: "Select Doctor",
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
];

const appointmentTypeOptions = [
    {
        value: "",
        label: "Select Appointment Type",
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
];

const visitTypeOptions = [
    {
        value: "",
        label: "Select Visit Type",
    },
    {
        value: "New Visit",
        label: "New Visit",
    },
    {
        value: "Follow-up Visit",
        label: "Follow-up Visit",
    },
    {
        value: "Emergency Visit",
        label: "Emergency Visit",
    },
];

const AppointmentDetailsForm = ({
    formData = {},
    onFormChange,
}) => {
    const handleChange = (field, value) => {
        if (typeof onFormChange === "function") {
            onFormChange({
                ...formData,
                [field]: value,
            });
        }
    };

    return (
        <div className="appointment-details-form">
            <div className="appointment-details-form__grid">
                {/* Department */}
                <div className="appointment-details-form__field">
                    <label
                        htmlFor="appointment-department"
                        className="appointment-details-form__label"
                    >
                        Department
                        <span className="appointment-details-form__required">
                            *
                        </span>
                    </label>

                    <select
                        id="appointment-department"
                        className="appointment-details-form__select"
                        value={formData.department || ""}
                        onChange={(event) =>
                            handleChange(
                                "department",
                                event.target.value
                            )
                        }
                    >
                        {departmentOptions.map((option) => (
                            <option
                                key={option.value || "department-placeholder"}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Doctor */}
                <div className="appointment-details-form__field">
                    <label
                        htmlFor="appointment-doctor"
                        className="appointment-details-form__label"
                    >
                        Doctor
                        <span className="appointment-details-form__required">
                            *
                        </span>
                    </label>

                    <select
                        id="appointment-doctor"
                        className="appointment-details-form__select"
                        value={formData.doctor || ""}
                        onChange={(event) =>
                            handleChange(
                                "doctor",
                                event.target.value
                            )
                        }
                    >
                        {doctorOptions.map((option) => (
                            <option
                                key={option.value || "doctor-placeholder"}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Appointment Date */}
                <div className="appointment-details-form__field">
                    <label
                        htmlFor="appointment-date"
                        className="appointment-details-form__label"
                    >
                        Appointment Date
                        <span className="appointment-details-form__required">
                            *
                        </span>
                    </label>

                    <input
                        id="appointment-date"
                        type="date"
                        className="appointment-details-form__input"
                        value={formData.date || ""}
                        onChange={(event) =>
                            handleChange(
                                "date",
                                event.target.value
                            )
                        }
                    />
                </div>

                {/* Appointment Type */}
                <div className="appointment-details-form__field">
                    <label
                        htmlFor="appointment-type"
                        className="appointment-details-form__label"
                    >
                        Appointment Type
                        <span className="appointment-details-form__required">
                            *
                        </span>
                    </label>

                    <select
                        id="appointment-type"
                        className="appointment-details-form__select"
                        value={formData.appointmentType || ""}
                        onChange={(event) =>
                            handleChange(
                                "appointmentType",
                                event.target.value
                            )
                        }
                    >
                        {appointmentTypeOptions.map((option) => (
                            <option
                                key={
                                    option.value ||
                                    "appointment-type-placeholder"
                                }
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Visit Type */}
                <div className="appointment-details-form__field">
                    <label
                        htmlFor="appointment-visit-type"
                        className="appointment-details-form__label"
                    >
                        Visit Type
                    </label>

                    <select
                        id="appointment-visit-type"
                        className="appointment-details-form__select"
                        value={formData.visitType || ""}
                        onChange={(event) =>
                            handleChange(
                                "visitType",
                                event.target.value
                            )
                        }
                    >
                        {visitTypeOptions.map((option) => (
                            <option
                                key={
                                    option.value ||
                                    "visit-type-placeholder"
                                }
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Reason */}
                <div className="appointment-details-form__field appointment-details-form__field--full">
                    <label
                        htmlFor="appointment-reason"
                        className="appointment-details-form__label"
                    >
                        Reason for Visit
                    </label>

                    <textarea
                        id="appointment-reason"
                        className="appointment-details-form__textarea"
                        value={formData.reason || ""}
                        onChange={(event) =>
                            handleChange(
                                "reason",
                                event.target.value
                            )
                        }
                        placeholder="Enter reason for visit"
                        rows={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentDetailsForm;