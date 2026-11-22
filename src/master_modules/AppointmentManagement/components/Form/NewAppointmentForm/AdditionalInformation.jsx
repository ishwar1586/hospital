import React from "react";

import "./AdditionalInformation.css";

const priorityOptions = [
    {
        value: "normal",
        label: "Normal",
    },
    {
        value: "urgent",
        label: "Urgent",
    },
    {
        value: "high",
        label: "High Priority",
    },
];

const reminderOptions = [
    {
        value: "none",
        label: "No Reminder",
    },
    {
        value: "sms",
        label: "SMS",
    },
    {
        value: "whatsapp",
        label: "WhatsApp",
    },
    {
        value: "both",
        label: "SMS + WhatsApp",
    },
];

const referralOptions = [
    {
        value: "",
        label: "Select Source",
    },
    {
        value: "self",
        label: "Self",
    },
    {
        value: "doctor-referral",
        label: "Doctor Referral",
    },
    {
        value: "hospital-referral",
        label: "Hospital Referral",
    },
    {
        value: "insurance",
        label: "Insurance",
    },
    {
        value: "other",
        label: "Other",
    },
];

const AdditionalInformation = ({
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
        <div className="additional-information">
            <div className="additional-information__grid">
                <div className="additional-information__field">
                    <label
                        htmlFor="additional-priority"
                        className="additional-information__label"
                    >
                        Priority
                    </label>

                    <select
                        id="additional-priority"
                        className="additional-information__select"
                        value={formData.priority || "normal"}
                        onChange={(event) =>
                            handleChange(
                                "priority",
                                event.target.value
                            )
                        }
                    >
                        {priorityOptions.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="additional-information__field">
                    <label
                        htmlFor="additional-referral"
                        className="additional-information__label"
                    >
                        Appointment Source
                    </label>

                    <select
                        id="additional-referral"
                        className="additional-information__select"
                        value={formData.referralSource || ""}
                        onChange={(event) =>
                            handleChange(
                                "referralSource",
                                event.target.value
                            )
                        }
                    >
                        {referralOptions.map((option) => (
                            <option
                                key={
                                    option.value ||
                                    "referral-placeholder"
                                }
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="additional-information__field additional-information__field--full">
                    <label
                        htmlFor="additional-symptoms"
                        className="additional-information__label"
                    >
                        Chief Complaint / Symptoms
                    </label>

                    <textarea
                        id="additional-symptoms"
                        className="additional-information__textarea"
                        value={formData.symptoms || ""}
                        onChange={(event) =>
                            handleChange(
                                "symptoms",
                                event.target.value
                            )
                        }
                        placeholder="Enter patient's chief complaint or symptoms"
                        rows={3}
                    />
                </div>

                <div className="additional-information__field additional-information__field--full">
                    <label
                        htmlFor="additional-instructions"
                        className="additional-information__label"
                    >
                        Special Instructions
                    </label>

                    <textarea
                        id="additional-instructions"
                        className="additional-information__textarea"
                        value={formData.instructions || ""}
                        onChange={(event) =>
                            handleChange(
                                "instructions",
                                event.target.value
                            )
                        }
                        placeholder="Enter any special instructions or notes"
                        rows={3}
                    />
                </div>

                <div className="additional-information__field additional-information__field--full">
                    <span className="additional-information__label">
                        Appointment Reminder
                    </span>

                    <div className="additional-information__reminder-group">
                        {reminderOptions.map((option) => (
                            <label
                                key={option.value}
                                className="additional-information__radio-label"
                            >
                                <input
                                    type="radio"
                                    name="appointment-reminder"
                                    value={option.value}
                                    checked={
                                        (formData.reminder || "none") ===
                                        option.value
                                    }
                                    onChange={(event) =>
                                        handleChange(
                                            "reminder",
                                            event.target.value
                                        )
                                    }
                                />

                                <span>
                                    {option.label}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionalInformation;