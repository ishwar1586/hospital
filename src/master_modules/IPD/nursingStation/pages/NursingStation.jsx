import { useState } from "react";

import "@/master_modules/IPD/nursingStation/pages/nursingstation.css";

import NursingStats from "@/master_modules/IPD/nursingStation/components/nursingStats/NursingStats";
import AssignedPatients from "@/master_modules/IPD/nursingStation/components/assignedPatients/AssignedPatients";
import PendingTasks from "@/master_modules/IPD/nursingStation/components/pendingTask/PendingTask";
import QuickActions from "@/master_modules/IPD/nursingStation/components/quickActions/QuickActions";
import ShiftSchedule from "@/master_modules/IPD/nursingStation/components/shiftSchedule/ShiftSchedule";
import NursingNotes from "@/master_modules/IPD/nursingStation/components/nursingNotes/NursingNotes";
import VitalsSummary from "@/master_modules/IPD/nursingStation/components/vitalSummary/VitalsSummary";
// import AlertsPanel from "@/master_modules/IPD/nursingStation/components/alertsPanel/AlertsPanel";


import PatientDrawer from "@/master_modules/IPD/nursingStation/components/patientDrawer/PatientDrawer";
import VitalsModal from "@/master_modules/IPD/nursingStation/components/vitalsModal/VitalsModal";
import AddNursingNoteModal from "@/master_modules/IPD/nursingStation/components/addNursingNotesModal/AddNursingNotesModal";
import MedicationAdministrationModal from "@/master_modules/IPD/nursingStation/components/medicationAdministrationModal/MedicationAdministrationModal";
import PatientCareModal from "@/master_modules/IPD/nursingStation/components/patientCareModal/PatientCareModal";
import IncidentReportModal from "@/master_modules/IPD/nursingStation/components/incidentReportModal/IncidentReportModal";
import PatientHandoverModal from "@/master_modules/IPD/nursingStation/components/patientHandover/PatientHandoverModal";


function NursingStation() {


  const [selectedPatient,
    setSelectedPatient] =
    useState(null);

  const [openDrawer,
    setOpenDrawer] =
    useState(false);

  const [openVitalsModal,
    setOpenVitalsModal] =
    useState(false);

  const [openNursingNoteModal,
    setOpenNursingNoteModal] =
    useState(false);

  const [openMedicationModal,
    setOpenMedicationModal] =
    useState(false);


  const [openPatientCareModal,
    setOpenPatientCareModal] =
    useState(false);

  const [openIncidentModal,
    setOpenIncidentModal] =
    useState(false);


  const [openHandoverModal,
    setOpenHandoverModal] =
    useState(false);


  const handleRecordVitals =
    (patient) => {

      setSelectedPatient(
        patient
      );

      setOpenVitalsModal(true);

    };


  const handleAddNursingNote =
    (patient) => {

      setSelectedPatient(
        patient
      );

      setOpenNursingNoteModal(
        true
      );

    };

  const handleMedicationAdministration =
    (patient) => {

      setSelectedPatient(
        patient
      );

      setOpenMedicationModal(
        true
      );

    };




  const handleViewPatient =
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



  const handlePatientCare =
    (patient) => {

      setSelectedPatient(
        patient
      );

      setOpenPatientCareModal(
        true
      );

    };


  const handleIncidentReport =
    (patient) => {

      setSelectedPatient(
        patient
      );

      setOpenIncidentModal(
        true
      );

    };

  const handlePatientHandover =
    (patient) => {

      setSelectedPatient(
        patient
      );

      setOpenHandoverModal(
        true
      );

    };

  return (
    <div className="nursing-station-page">

      <div className="nursing-page-header">

        <div>

          <h1>
            Nursing Station
          </h1>

          <p>
            Centralized patient care and
            nursing management dashboard.
          </p>

        </div>

      </div>

      <NursingStats />

      <div className="nursing-top-section">

        <div className="assigned-patients-area">
          {/* <AssignedPatients /> */}

          <AssignedPatients
            onViewPatient={
              handleViewPatient
            }
            onRecordVitals={
              handleRecordVitals
            }
            onAddNursingNote={
              handleAddNursingNote
            }

            onMedicationAdministration={
              handleMedicationAdministration
            }
            onPatientCare={
              handlePatientCare
            }
            onIncidentReport={
              handleIncidentReport
            }
            onPatientHandover={
              handlePatientHandover
            }
          />
        </div>

        <div className="pending-tasks-area">
          <PendingTasks />
        </div>

        <div className="quick-actions-area">
          <QuickActions />
        </div>

      </div>

      <div className="nursing-bottom-section">

        <div className="schedule-area">
          <ShiftSchedule />
        </div>

        <div className="notes-area">
          <NursingNotes />
        </div>

        <div className="vitals-area">
          <VitalsSummary />
        </div>

      </div>

      {/* <AlertsPanel /> */}

      <PatientDrawer
        open={openDrawer}
        patient={selectedPatient}
        onClose={
          handleCloseDrawer
        }
      />


      <VitalsModal
        open={openVitalsModal}
        patient={selectedPatient}
        onClose={() =>
          setOpenVitalsModal(false)
        }
      />

      <AddNursingNoteModal
        open={openNursingNoteModal}
        patient={selectedPatient}
        onClose={() =>
          setOpenNursingNoteModal(
            false
          )
        }
      />
      <MedicationAdministrationModal
        open={openMedicationModal}
        patient={selectedPatient}
        onClose={() =>
          setOpenMedicationModal(
            false
          )
        }
      />

      <PatientCareModal
        open={openPatientCareModal}
        patient={selectedPatient}
        onClose={() =>
          setOpenPatientCareModal(
            false
          )
        }
      />

      <IncidentReportModal
        open={openIncidentModal}
        patient={selectedPatient}
        onClose={() =>
          setOpenIncidentModal(
            false
          )
        }
      />

      <PatientHandoverModal
        open={openHandoverModal}
        patient={selectedPatient}
        onClose={() =>
          setOpenHandoverModal(
            false
          )
        }
      />
    </div>

  );


}



export default NursingStation;