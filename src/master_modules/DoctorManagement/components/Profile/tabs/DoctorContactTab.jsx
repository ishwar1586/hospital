import React from "react";

import PhoneOutlinedIcon
    from "@mui/icons-material/PhoneOutlined";

import EmailOutlinedIcon
    from "@mui/icons-material/EmailOutlined";

import LocationOnOutlinedIcon
    from "@mui/icons-material/LocationOnOutlined";

import CalendarMonthOutlinedIcon
    from "@mui/icons-material/CalendarMonthOutlined";

import "./DoctorContactTab.css";


// =========================================================
// INFO ITEM
// =========================================================

const ContactInfoItem = ({
    icon: Icon,
    label,
    value,
    href,
}) => {

    const content = (
        <div className="doctor-contact-tab__item-content">

            <span className="doctor-contact-tab__item-label">
                {label}
            </span>

            <span className="doctor-contact-tab__item-value">
                {value || "—"}
            </span>

        </div>
    );


    return (
        <div className="doctor-contact-tab__item">

            <div className="doctor-contact-tab__icon">

                <Icon fontSize="small" />

            </div>

            {href && value !== "—" ? (
                <a
                    href={href}
                    className="doctor-contact-tab__link"
                    onClick={(event) =>
                        event.stopPropagation()
                    }
                >
                    {content}
                </a>
            ) : (
                content
            )}

        </div>
    );
};


// =========================================================
// COMPONENT
// =========================================================

const DoctorContactTab = ({
    doctor,
}) => {

    if (!doctor) {
        return (
            <section className="doctor-contact-tab">

                <div className="doctor-contact-tab__state">
                    Doctor information is unavailable.
                </div>

            </section>
        );
    }


    // =====================================================
    // DATA
    // =====================================================

    const phone =
        doctor?.phone || "—";

    const email =
        doctor?.email || "—";

    const address =
        doctor?.address || "—";


    const joiningDate =
        doctor?.joiningDate
            ? new Date(
                doctor.joiningDate
            ).toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }
            )
            : "—";


    return (
        <section className="doctor-contact-tab">

            {/* =========================================
                HEADER
            ========================================= */}

            <div className="doctor-contact-tab__header">

                <h3 className="doctor-contact-tab__title">
                    Contact Information
                </h3>

                <p className="doctor-contact-tab__subtitle">
                    Doctor's contact and professional details
                </p>

            </div>


            {/* =========================================
                CONTACT LIST
            ========================================= */}

            <div className="doctor-contact-tab__card">

                <ContactInfoItem
                    icon={PhoneOutlinedIcon}
                    label="Phone"
                    value={phone}
                    href={
                        phone !== "—"
                            ? `tel:${phone}`
                            : undefined
                    }
                />


                <ContactInfoItem
                    icon={EmailOutlinedIcon}
                    label="Email"
                    value={email}
                    href={
                        email !== "—"
                            ? `mailto:${email}`
                            : undefined
                    }
                />


                <ContactInfoItem
                    icon={LocationOnOutlinedIcon}
                    label="Address"
                    value={address}
                />


                <ContactInfoItem
                    icon={CalendarMonthOutlinedIcon}
                    label="Joining Date"
                    value={joiningDate}
                />

            </div>


            {/* =========================================
                REGISTRATION
            ========================================= */}

            <div className="doctor-contact-tab__professional-card">

                <div className="doctor-contact-tab__professional-header">
                    Professional Registration
                </div>


                <div className="doctor-contact-tab__registration">

                    <span className="doctor-contact-tab__registration-label">
                        Registration No.
                    </span>

                    <span className="doctor-contact-tab__registration-value">
                        {doctor?.registrationNumber || "—"}
                    </span>

                </div>

            </div>

        </section>
    );
};


export default DoctorContactTab;