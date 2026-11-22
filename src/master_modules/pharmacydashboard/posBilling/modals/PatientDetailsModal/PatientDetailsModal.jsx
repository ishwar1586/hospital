import "./PatientDetailsModal.css";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import {
    CloseOutlined,
    VerifiedOutlined,
    FingerprintOutlined,
    BadgeOutlined,
    BloodtypeOutlined,
    LocalHospitalOutlined,
    PersonOutlineOutlined,
    PhoneOutlined,
    CakeOutlined,
    MedicalServicesOutlined,
    WarningAmberRounded,
    ReceiptLongOutlined,
    HistoryOutlined,
    MedicationOutlined,
    PrintOutlined,
} from "@mui/icons-material";

const PatientDetailsModal = ({

    open,

    onClose,

    patient,

    onLoadPrescription,

    onViewHistory,

}) => {

    if (!patient) return null;

    const avatar =
        patient.patientName
            ?.charAt(0)
            ?.toUpperCase();

    /* ==========================================
       Summary Cards
    ========================================== */

    const summaryCards = [

        {

            icon:<FingerprintOutlined/>,

            label:"UHID",

            value:patient.uhid,

        },

        {

            icon:<LocalHospitalOutlined/>,

            label:"Patient Type",

            value:patient.patientType,

        },

        {

            icon:<BloodtypeOutlined/>,

            label:"Blood Group",

            value:patient.bloodGroup || "N/A",

        },

        {

            icon:<BadgeOutlined/>,

            label:"Insurance",

            value:patient.insurance || "Self",

        },

    ];

    /* ==========================================
       Patient Information
    ========================================== */

    const infoCards = [

        {

            icon:<PersonOutlineOutlined/>,

            label:"Gender",

            value:patient.gender,

        },

        {

            icon:<CakeOutlined/>,

            label:"Age",

            value:`${patient.age} Years`,

        },

        {

            icon:<PhoneOutlined/>,

            label:"Mobile",

            value:patient.mobile,

        },

        {

            icon:<MedicalServicesOutlined/>,

            label:"Doctor",

            value:patient.doctor,

        },

        {

            icon:<LocalHospitalOutlined/>,

            label:"Department",

            value:patient.department,

        },

    ];

    return (

        <Dialog

            open={open}

            onClose={onClose}

            fullWidth

            maxWidth="lg"

            PaperProps={{

                className:"patient-details-modal",

            }}

        >

            <DialogContent>
                {/* ====================================== */}
{/* Header */}
{/* ====================================== */}

<div className="patient-modal-header">

    <div className="patient-profile-section">

        <div className="patient-avatar">

            {avatar}

        </div>

        <div className="patient-profile-info">

            <h2>

                {patient.patientName}

            </h2>

            <div className="patient-profile-meta">

                <span>

                    {patient.patientType}

                </span>

                <span>

                    UHID : {patient.uhid}

                </span>

                <span>

                    {patient.gender}

                </span>

                <span>

                    {patient.age} Years

                </span>

            </div>

        </div>

    </div>

    <div className="patient-header-right">

        <div className="patient-active-chip">

            <VerifiedOutlined />

            {patient.status || "Active"}

        </div>

        <IconButton

            onClick={onClose}

        >

            <CloseOutlined />

        </IconButton>

    </div>

</div>

<Divider />

{/* ====================================== */}
{/* Summary Cards */}
{/* ====================================== */}

<div className="patient-summary-grid">

    {

        summaryCards.map((item) => (

            <div

                key={item.label}

                className="summary-card"

            >

                <div className="summary-icon">

                    {item.icon}

                </div>

                <div>

                    <span>

                        {item.label}

                    </span>

                    <strong>

                        {item.value}

                    </strong>

                </div>

            </div>

        ))

    }

</div>

{/* ====================================== */}
{/* Patient Information */}
{/* ====================================== */}

<div className="patient-info-section">

    <div className="section-header">

        <h3>

            Patient Information

        </h3>

    </div>

    <div className="patient-info-grid">

        {

            infoCards.map((item) => (

                <div

                    key={item.label}

                    className="info-card"

                >

                    <div className="info-icon">

                        {item.icon}

                    </div>

                    <div>

                        <span>

                            {item.label}

                        </span>

                        <strong>

                            {item.value}

                        </strong>

                    </div>

                </div>

            ))

        }

    </div>

</div>
{/* ====================================== */}
{/* Allergy Alert */}
{/* ====================================== */}

<div className="allergy-banner">

    <WarningAmberRounded />

    <div>

        <strong>

            Allergy Alert

        </strong>

        <p>

            {

                patient.allergies

                    ? patient.allergies

                    : "No Known Drug Allergy"

            }

        </p>

    </div>

</div>

{/* ====================================== */}
{/* Previous Visit */}
{/* ====================================== */}

<div className="visit-summary">

    <div className="section-header">

        <h3>

            Visit Summary

        </h3>

    </div>

    <div className="visit-grid">

        <div>

            <span>

                Last Visit

            </span>

            <strong>

                {

                    patient.lastVisit ||

                    "First Visit"

                }

            </strong>

        </div>

        <div>

            <span>

                Total Visits

            </span>

            <strong>

                {

                    patient.totalVisits ??

                    1

                }

            </strong>

        </div>

        <div>

            <span>

                Last Doctor

            </span>

            <strong>

                {

                    patient.lastDoctor ||

                    patient.doctor

                }

            </strong>

        </div>

    </div>

</div>

{/* ====================================== */}
{/* Footer */}
{/* ====================================== */}

<div className="patient-modal-footer">

    <Button

        variant="outlined"

        startIcon={

            <HistoryOutlined />

        }

        onClick={() =>

            onViewHistory?.(

                patient

            )

        }

    >

        View History

    </Button>

    <Button

        variant="outlined"

        startIcon={

            <PrintOutlined />

        }

        onClick={() =>

            window.print()

        }

    >

        Print Summary

    </Button>

    <Button

        variant="contained"

        startIcon={

            <MedicationOutlined />

        }

        onClick={() => {

            onLoadPrescription?.(

                patient

            );

            onClose?.();

        }}

    >

        Load Prescription

    </Button>

</div>

            </DialogContent>

        </Dialog>

    );

};

export default PatientDetailsModal;
        

            