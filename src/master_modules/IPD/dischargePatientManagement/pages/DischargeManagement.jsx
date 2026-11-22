import { useState } from "react";

import "@/master_modules/IPD/dischargePatientManagement/pages/dischargemanagement.css";

import DischargeStats from "@/master_modules/IPD/dischargePatientManagement/components/dischargeStats/DischargeStats";
import DischargeFilters from "@/master_modules/IPD/dischargePatientManagement/components/dischargeFilters/DischargeFilters";
import DischargeTable from "@/master_modules/IPD/dischargePatientManagement/components/dischargeTable/DischargeTable";
import DischargeDetailsDrawer from "@/master_modules/IPD/dischargePatientManagement/components/dischargeDetailsDrawer/DischargeDetailsDrawer";
import dischargePatients from "@/master_modules/IPD/dischargePatientManagement/mock/dischargePatients.mock";

import DischargeSummaryModal from "@/master_modules/IPD/dischargePatientManagement/components/dischargeSummaryModal/DischargeSummaryModal";
import DoctorClearanceModal from "@/master_modules/IPD/dischargePatientManagement/components/doctorClearanceModal/DoctorClearanceModal";
import BillingClearanceModal from "@/master_modules/IPD/dischargePatientManagement/components/billingClearanceModal/BillingClearanceModal";
import PrintDischargeModal from "@/master_modules/IPD/dischargePatientManagement/components/printDischargeModal/PrintDischargeModal";
import FinalizeDischargeModal from "@/master_modules/IPD/dischargePatientManagement/components/finalizeDischargeModal/FinalizeDischargeModal";
import DischargeQuickActions from "@/master_modules/IPD/dischargePatientManagement/components/dischargeQuickActions/DischargeQuickActions";
import AddDischargeModal from "@/master_modules/IPD/dischargePatientManagement/components/addDischargeModal/AddDischargeModal";
function DischargeManagement() {

    const [openAddDischargeModal,
        setOpenAddDischargeModal] =
        useState(false);


    const [openFinalizeModal,
        setOpenFinalizeModal] =
        useState(false);

    const handleFinalizeDischarge =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenFinalizeModal(
                true
            );

        };

    const [openPrintModal,
        setOpenPrintModal] =
        useState(false);


    const handlePrintDischarge =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenPrintModal(
                true
            );

        };

    const [openBillingClearanceModal,
        setOpenBillingClearanceModal] =
        useState(false);


    const handleBillingClearance =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenBillingClearanceModal(
                true
            );

        };


    const [openDoctorClearanceModal,
        setOpenDoctorClearanceModal] =
        useState(false);


    const handleDoctorClearance =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenDoctorClearanceModal(
                true
            );

        };


    const [openSummaryModal,
        setOpenSummaryModal] =
        useState(false);


    const handleDischargeSummary =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenSummaryModal(
                true
            );

        };


    const [selectedPatient,
        setSelectedPatient] =
        useState(null);

    const [openDrawer,
        setOpenDrawer] =
        useState(false);


    const handleViewDetails =
        (patient) => {

            setSelectedPatient(
                patient
            );

            setOpenDrawer(true);

        };

    const handleCloseDrawer =
        () => {

            setOpenDrawer(false);

            setSelectedPatient(null);

        };






    const [filters, setFilters] = useState({
        date: "",
        status: "",
        doctor: "",
        department: "",
        search: "",
    });

    const handleChange = (
        e
    ) => {

        setFilters({
            ...filters,
            [e.target.name]:
                e.target.value,
        });

    };

    const filteredPatients =
        dischargePatients.filter(
            (patient) => {

                const dateMatch =
                    !filters.date ||
                    patient.dischargeDate ===
                    filters.date;

                const statusMatch =
                    !filters.status ||
                    patient.status ===
                    filters.status;

                const doctorMatch =
                    !filters.doctor ||
                    patient.doctor ===
                    filters.doctor;

                const departmentMatch =
                    !filters.department ||
                    patient.department ===
                    filters.department;

                const searchMatch =
                    !filters.search ||

                    patient.patientName
                        .toLowerCase()
                        .includes(
                            filters.search.toLowerCase()
                        ) ||

                    patient.ipdNo
                        .toLowerCase()
                        .includes(
                            filters.search.toLowerCase()
                        );

                return (
                    dateMatch &&
                    statusMatch &&
                    doctorMatch &&
                    departmentMatch &&
                    searchMatch
                );

            }
        );

    return (

        <div className="discharge-management-page">

            <div className="discharge-header">

                <div>

                    <h1>
                        Discharge Management
                    </h1>

                    <p>
                        Manage patient discharge
                        process and tracking.
                    </p>

                </div>

                <button
                    className="new-discharge-btn"
                    onClick={() =>
                        setOpenAddDischargeModal(true)
                    }
                >
                    + New Discharge
                </button>

            </div>

            <DischargeStats />

            <DischargeFilters
                filters={filters}
                onChange={handleChange}
            />

            <DischargeTable
                // patients={dischargePatients}
                patients={filteredPatients}
                onViewDetails={
                    handleViewDetails
                }
                onDischargeSummary={
                    handleDischargeSummary
                }
                onDoctorClearance={
                    handleDoctorClearance
                }
                onBillingClearance={
                    handleBillingClearance
                }
                onPrintDischarge={
                    handlePrintDischarge
                }
                onFinalizeDischarge={
                    handleFinalizeDischarge
                }
            />

            <DischargeDetailsDrawer
                open={openDrawer}
                patient={selectedPatient}
                onClose={
                    handleCloseDrawer
                }
            />

            <DischargeSummaryModal
                open={openSummaryModal}
                patient={selectedPatient}
                onClose={() =>
                    setOpenSummaryModal(
                        false
                    )
                }
            />

            <DoctorClearanceModal
                open={
                    openDoctorClearanceModal
                }
                patient={selectedPatient}
                onClose={() =>
                    setOpenDoctorClearanceModal(
                        false
                    )
                }
            />

            <BillingClearanceModal
                open={
                    openBillingClearanceModal
                }
                patient={selectedPatient}
                onClose={() =>
                    setOpenBillingClearanceModal(
                        false
                    )
                }
            />

            <PrintDischargeModal
                open={openPrintModal}
                patient={selectedPatient}
                onClose={() =>
                    setOpenPrintModal(false)
                }
            />

            <FinalizeDischargeModal
                open={openFinalizeModal}
                patient={selectedPatient}
                onClose={() =>
                    setOpenFinalizeModal(
                        false
                    )
                }
            />
            <AddDischargeModal
                open={openAddDischargeModal}
                onClose={() =>
                    setOpenAddDischargeModal(false)
                }
            />

            <DischargeQuickActions />
        </div>

    );

}

export default DischargeManagement;