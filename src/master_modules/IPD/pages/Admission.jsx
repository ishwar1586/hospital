import { useState } from "react";

import "@/master_modules/IPD/pages/admission.css";

import AdmissionStats from "@/master_modules/IPD/components/admissionStats/AdmissionStats";
import AdmissionFilter from "@/master_modules/IPD/components/admissionFilter/AdmissionFilter";
import AdmissionTable from "@/master_modules/IPD/components/admissionTable/AdmissionTable";
import AdmissionDrawer from "@/master_modules/IPD/components/admissionDrawer/AdmissionDrawer";
import TransferBedModal from "@/master_modules/IPD/components/transferBed/TransferBedModal";
import DischargePatientModal from "@/master_modules/IPD/components/dischargePatientModal/DischargeModal";
import BillingModal from "@/master_modules/IPD/components/billingModal/BillingModal";
import EditAdmissionModal from "@/master_modules/IPD/components/editAdmission/EditAdmissionModal";
import AddAdmissionModal from "@/master_modules/IPD/components/addAdmission/AddAdmissionModal";
import AdmissionSlipModal from "@/master_modules/IPD/components/admissionSlip/AdmissionSlipModal";
import admissions from "@/master_modules/IPD/mock/admission.mock";

function Admission() {
  const [filters, setFilters] = useState({
    ipdNo: "",
    uhid: "",
    patientName: "",
    doctor: "",
    ward: "",
    status: "",
  });

  const [filteredAdmissions,
    setFilteredAdmissions] =
    useState(admissions);

  const [openAdmissionSlip,
    setOpenAdmissionSlip] =
    useState(false);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [openTransferBed, setOpenTransferBed] =
    useState(false);

  const [openDischargeModal, setOpenDischargeModal] =
    useState(false);

  const [openEditModal, setOpenEditModal] =
    useState(false);

  const [openAddAdmission, setOpenAddAdmission] =
    useState(false);

  const [openBilling, setOpenBilling] =
    useState(false);


  const [selectedPatient, setSelectedPatient] =
    useState(null);

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {

    const result =
      admissions.filter(
        (patient) => {

          return (

            patient.ipdNo
              .toLowerCase()
              .includes(
                filters.ipdNo.toLowerCase()
              )

            &&

            patient.uhid
              .toLowerCase()
              .includes(
                filters.uhid.toLowerCase()
              )

            &&

            patient.patientName
              .toLowerCase()
              .includes(
                filters.patientName.toLowerCase()
              )

            &&

            patient.doctor
              .toLowerCase()
              .includes(
                filters.doctor.toLowerCase()
              )

            &&

            (
              filters.ward === ""
              ||
              patient.ward ===
              filters.ward
            )

            &&

            (
              filters.status === ""
              ||
              patient.status ===
              filters.status
            )

          );
        }
      );

    setFilteredAdmissions(
      result
    );
  };



  const handleReset = () => {

    setFilters({
      ipdNo: "",
      uhid: "",
      patientName: "",
      doctor: "",
      ward: "",
      status: "",
    });

    setFilteredAdmissions(
      admissions
    );
  };

  const handleExport = () => {
    console.log("Export Clicked");
  };


  const handleAddAdmission = () => {
    setOpenAddAdmission(true);
  };

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    setSelectedPatient(null);
  };

  const handleDischargePatient = (patient) => {
    setSelectedPatient(patient);
    setOpenDischargeModal(true);
  };

  const handleCloseDischargeModal = () => {
    setOpenDischargeModal(false);
    setSelectedPatient(null);
  };

  const handleBilling = (patient) => {
    setSelectedPatient(patient);
    setOpenBilling(true);
  };

  const handleCloseBilling = () => {
    setOpenBilling(false);
    setSelectedPatient(null);
  };

  const handleTransferBed = (patient) => {
    setSelectedPatient(patient);
    setOpenTransferBed(true);
  };


  const handleEditAdmission = (patient) => {
    setSelectedPatient(patient);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedPatient(null);
  };

  const handlePrintSlip = (
    patient
  ) => {
    setSelectedPatient(patient);
    setOpenAdmissionSlip(true);
  };

  const handleCloseSlip = () => {
    setOpenAdmissionSlip(false);
    setSelectedPatient(null);
  };

  return (
    <div className="admission-page">
      <div className="admission-page-header">
        <div>
          <h1>IPD Admissions</h1>

          <p>
            Manage all inpatient admissions
            and admission related activities.
          </p>
        </div>
      </div>

      <AdmissionStats />

      <AdmissionFilter
        filters={filters}
        onChange={handleChange}
        onSearch={handleSearch}
        onReset={handleReset}
        onExport={handleExport}
        onAddAdmission={
          handleAddAdmission
        }
      />



      <AdmissionTable
        admissions={
          filteredAdmissions
        }
        onViewPatient={
          handleViewPatient
        }
        onTransferBed={
          handleTransferBed
        }
        onDischargePatient={
          handleDischargePatient
        }
        onBilling={
          handleBilling
        }
        onEditAdmission={
          handleEditAdmission
        }

        onPrintSlip={
          handlePrintSlip
        }
      />

      <AdmissionDrawer
        open={openDrawer}
        patient={selectedPatient}
        onClose={
          handleCloseDrawer
        }
      />

      <TransferBedModal
        open={openTransferBed}
        patient={selectedPatient}
        onClose={() =>
          setOpenTransferBed(false)
        }
      />

      <DischargePatientModal
        open={openDischargeModal}
        patient={selectedPatient}
        onClose={
          handleCloseDischargeModal
        }
      />

      <EditAdmissionModal
        open={openEditModal}
        patient={selectedPatient}
        onClose={
          handleCloseEditModal
        }
      />

      <BillingModal
        open={openBilling}
        patient={selectedPatient}
        onClose={handleCloseBilling}
      />

      <AddAdmissionModal
        open={openAddAdmission}
        onClose={() =>
          setOpenAddAdmission(false)
        }
      />

      <AdmissionSlipModal
        open={openAdmissionSlip}
        patient={selectedPatient}
        onClose={
          handleCloseSlip
        }
      />

    </div>
  );
}

export default Admission;