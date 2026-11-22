import { useEffect, useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    MenuItem,
    IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DischargeSummaryModal from "@/master_modules/IPD/components/dischargeSummaryModal/DischargeSummaryModal";
import "@/master_modules/IPD/styles/dischargemodal.css";

const getCurrentDate = () => {
    return new Date()
        .toISOString()
        .split("T")[0];
};

const getCurrentTime = () => {
    return new Date()
        .toTimeString()
        .slice(0, 5);
};



const dischargeTypes = [
    "Normal Discharge",
    "LAMA",
    "Referred",
    "Death",
    "Absconded",
];

const DischargePatientModal = ({
    open,
    onClose,
    patient,
}) => {

const [openSummary, setOpenSummary] =
    useState(false);

    const [formData, setFormData] =
        useState({
            dischargeDate: "",
            dischargeTime: "",
            dischargeType: "",
            finalDiagnosis: "",
            treatmentSummary: "",
            advice: "",
            remarks: "",
        });

    useEffect(() => {
        if (open) {
            setFormData({
                dischargeDate: getCurrentDate(),
                dischargeTime: getCurrentTime(),
                dischargeType: "",
                finalDiagnosis: "",
                treatmentSummary: "",
                advice: "",
                remarks: "",
            });
        }
    }, [open]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    // const handlePrintSummary = () => {
    //   const printWindow =
    //     window.open("", "_blank");

    //   printWindow.document.write(`
    //     <html>
    //       <head>
    //         <title>Discharge Summary</title>

    //         <style>
    //           body{
    //             font-family: Arial;
    //             padding:40px;
    //             color:#111827;
    //           }

    //           h1{
    //             text-align:center;
    //           }

    //           .section{
    //             margin-bottom:20px;
    //           }

    //           .label{
    //             font-weight:bold;
    //           }
    //         </style>
    //       </head>

    //       <body>

    //         <h1>DISCHARGE SUMMARY</h1>

    //         <hr/>

    //         <div class="section">
    //           <p><span class="label">Patient Name :</span> ${patient.patientName}</p>
    //           <p><span class="label">UHID :</span> ${patient.uhid}</p>
    //           <p><span class="label">IPD No :</span> ${patient.ipdNo}</p>
    //           <p><span class="label">Age / Gender :</span> ${patient.age} / ${patient.gender}</p>
    //         </div>

    //         <hr/>

    //         <div class="section">
    //           <p><span class="label">Doctor :</span> ${patient.doctor}</p>
    //           <p><span class="label">Department :</span> ${patient.department}</p>
    //           <p><span class="label">Ward :</span> ${patient.ward}</p>
    //           <p><span class="label">Room :</span> ${patient.room}</p>
    //           <p><span class="label">Bed :</span> ${patient.bed}</p>
    //         </div>

    //         <hr/>

    //         <div class="section">
    //           <p><span class="label">Discharge Date :</span> ${formData.dischargeDate}</p>
    //           <p><span class="label">Discharge Time :</span> ${formData.dischargeTime}</p>
    //           <p><span class="label">Discharge Type :</span> ${formData.dischargeType}</p>
    //         </div>

    //         <hr/>

    //         <div class="section">
    //           <h3>Final Diagnosis</h3>
    //           <p>${formData.finalDiagnosis}</p>
    //         </div>

    //         <div class="section">
    //           <h3>Treatment Summary</h3>
    //           <p>${formData.treatmentSummary}</p>
    //         </div>

    //         <div class="section">
    //           <h3>Advice On Discharge</h3>
    //           <p>${formData.advice}</p>
    //         </div>

    //         <div class="section">
    //           <h3>Remarks</h3>
    //           <p>${formData.remarks}</p>
    //         </div>

    //         <br/><br/>

    //         <p>
    //         ______________________
    //         </p>

    //         <p>Doctor Signature</p>

    //       </body>
    //     </html>
    //   `);

    //   printWindow.document.close();
    //   printWindow.print();
    // };


    const handlePrintSummary = () => {
        setOpenSummary(true);
    };

    const handleDischarge = () => {
        if (!formData.dischargeType) {
            alert(
                "Please select discharge type"
            );
            return;
        }

        console.log({
            patient,
            dischargeData: formData,
        });

        alert(
            "Patient discharged successfully"
        );

        onClose();
    };

    //   const handleDischarge = () => {
    //     console.log(
    //       "Discharge Data",
    //       formData
    //     );

    //     onClose();
    //   };


    if (!patient) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: "18px",
                    maxHeight: "90vh",
                },
            }}
        >
            <DialogTitle className="discharge-header">

                <div className="discharge-title">
                    <LogoutOutlinedIcon />
                    <span>
                        Discharge Patient
                    </span>
                </div>

                <IconButton
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>

            </DialogTitle>

            <DialogContent>

                <div className="patient-card">
                    <h2>
                        {patient.patientName}
                    </h2>

                    <div className="patient-tags">
                        <span>
                            {patient.ipdNo}
                        </span>

                        <span>
                            {patient.uhid}
                        </span>
                    </div>
                </div>

                <div className="section-card">
                    <h3>
                        Patient Information
                    </h3>

                    <div className="info-grid">

                        <div className="info-card">
                            <label>
                                Age / Gender
                            </label>

                            <h4>
                                {patient.age} /{" "}
                                {patient.gender}
                            </h4>
                        </div>

                        <div className="info-card">
                            <label>
                                Doctor
                            </label>

                            <h4>
                                {patient.doctor}
                            </h4>
                        </div>

                        <div className="info-card">
                            <label>
                                Department
                            </label>

                            <h4>
                                {
                                    patient.department
                                }
                            </h4>
                        </div>

                    </div>
                </div>

                <div className="section-card">
                    <h3>
                        Admission Information
                    </h3>

                    <div className="info-grid">

                        <div className="info-card">
                            <label>
                                Ward
                            </label>

                            <h4>
                                {patient.ward}
                            </h4>
                        </div>

                        <div className="info-card">
                            <label>
                                Room
                            </label>

                            <h4>
                                {patient.room}
                            </h4>
                        </div>

                        <div className="info-card">
                            <label>
                                Bed
                            </label>

                            <h4>
                                {patient.bed}
                            </h4>
                        </div>

                    </div>
                </div>

                <div className="section-card">
                    <h3>
                        Discharge Information
                    </h3>

                    <div className="form-grid">

                        <TextField
                            type="date"
                            label="Discharge Date"
                            name="dischargeDate"
                            value={
                                formData.dischargeDate
                            }
                            onChange={
                                handleChange
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            type="time"
                            label="Discharge Time"
                            name="dischargeTime"
                            value={
                                formData.dischargeTime
                            }
                            onChange={
                                handleChange
                            }
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            select
                            label="Discharge Type"
                            name="dischargeType"
                            value={
                                formData.dischargeType
                            }
                            onChange={
                                handleChange
                            }
                        >
                            {dischargeTypes.map(
                                (type) => (
                                    <MenuItem
                                        key={type}
                                        value={type}
                                    >
                                        {type}
                                    </MenuItem>
                                )
                            )}
                        </TextField>

                    </div>
                </div>

                <div className="section-card">
                    <h3>
                        Discharge Summary
                    </h3>

                    <div className="summary-grid">

                        <TextField
                            multiline
                            rows={1}
                            label="Final Diagnosis"
                            name="finalDiagnosis"
                            value={
                                formData.finalDiagnosis
                            }
                            onChange={
                                handleChange
                            }
                        />

                        <TextField
                            multiline
                            rows={1}
                            label="Treatment Summary"
                            name="treatmentSummary"
                            value={
                                formData.treatmentSummary
                            }
                            onChange={
                                handleChange
                            }
                        />

                        <TextField
                            multiline
                            rows={1}
                            label="Advice On Discharge"
                            name="advice"
                            value={
                                formData.advice
                            }
                            onChange={
                                handleChange
                            }
                        />

                        <TextField
                            multiline
                            rows={1}
                            label="Remarks"
                            name="remarks"
                            value={
                                formData.remarks
                            }
                            onChange={
                                handleChange
                            }
                        />

                    </div>
                </div>

            </DialogContent>

            <DialogActions className="discharge-footer">

                <Button
                    variant="outlined"
                    onClick={onClose}
                >
                    Cancel
                </Button>

                {/* <Button
          variant="outlined"
        >
          Print Summary
        </Button> */}

                <Button
                    variant="outlined"
                    onClick={handlePrintSummary}
                >
                    Print Summary
                </Button>

                <Button
                    variant="contained"
                    color="error"
                    onClick={
                        handleDischarge
                    }
                >
                    Discharge Patient
                </Button>

            </DialogActions>
            <DischargeSummaryModal
                open={openSummary}
                onClose={() =>
                    setOpenSummary(false)
                }
                patient={patient}
                dischargeData={formData}
            />

        </Dialog>
    );
};

export default DischargePatientModal;