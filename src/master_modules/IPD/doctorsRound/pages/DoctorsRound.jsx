import { useState } from "react";

import "@/master_modules/IPD/doctorsRound/pages/doctorsrounds.css";

import RoundStats from "@/master_modules/IPD/doctorsRound/components/roundStats/RoundsStats";
import RoundFilters from "@/master_modules/IPD/doctorsRound/components/roundFilters/RoundFilters";
import RoundTable from "@/master_modules/IPD/doctorsRound/components/roundTable/RoundTable";
import AddRoundModal from "@/master_modules/IPD/doctorsRound/components/addRoundModal/AddRoundModal";
import RoundDetailsDrawer from "@/master_modules/IPD/doctorsRound/components/roundDetailsDrawer/RoundDetailsDrawer";
import AddNotesModal from "@/master_modules/IPD/doctorsRound/components/addNotesModal/AddNotesModal";
import EditRoundModal from "@/master_modules/IPD/doctorsRound/components/editRoundModal/EditRoundModal";
import PrescriptionModal from "@/master_modules/IPD/doctorsRound/components/prescriptionModal/PrescriptionModal";
import InvestigationModal from "@/master_modules/IPD/doctorsRound/components/investigationModal/InvestigationModal";
import PrintRoundReportModal from "@/master_modules/IPD/doctorsRound/components/printRoundModal/PrintRoundModal";
import doctorRounds from "@/master_modules/IPD/doctorsRound/mock/doctorsRounds.mock";

function DoctorRounds() {

  const [rounds] =
    useState(doctorRounds);

  const [selectedRound,
    setSelectedRound] =
    useState(null);

const [openNotesModal,
  setOpenNotesModal] =
  useState(false);

const [openEditModal,
  setOpenEditModal] =
  useState(false);

const [openPrescriptionModal,
  setOpenPrescriptionModal] =
  useState(false);

const [openInvestigationModal,
  setOpenInvestigationModal] =
  useState(false);

 const [openPrintModal,
  setOpenPrintModal] =
  useState(false); 

  const [openDrawer,
    setOpenDrawer] =
    useState(false);

  const [openAddModal,
    setOpenAddModal] =
    useState(false);

  const [filters,
    setFilters] =
    useState({
      ipdNo: "",
      patientName: "",
      doctor: "",
      status: "",
    });

  const handleChange = (e) => {

    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleViewRound =
    (round) => {

      setSelectedRound(round);

      setOpenDrawer(true);

    };

  const handleCloseDrawer =
    () => {

      setOpenDrawer(false);

      setSelectedRound(null);

    };

    const handleAddNotes = (
  round
) => {

  setSelectedRound(round);

  setOpenNotesModal(true);

};


const handleEditRound =
  (round) => {

    setSelectedRound(round);

    setOpenEditModal(true);

  };


const handlePrescription =
  (round) => {

    setSelectedRound(round);

    setOpenPrescriptionModal(
      true
    );

  };  


const handleInvestigation =
  (round) => {

    setSelectedRound(round);

    setOpenInvestigationModal(
      true
    );

  };  


const handlePrintRound =
  (round) => {

    setSelectedRound(round);

    setOpenPrintModal(true);

  };  

  return (
    <div className="doctor-rounds-page">

      <div className="doctor-rounds-header">

        <div>

          <h1>
            Doctor Rounds
          </h1>

          <p>
            Manage doctor rounds,
            patient notes and
            daily assessments.
          </p>

        </div>

        <button
          className="add-round-btn"
          onClick={() =>
            setOpenAddModal(true)
          }
        >
          + Add Round
        </button>

      </div>

      <RoundStats
        rounds={rounds}
      />

      <RoundFilters
        filters={filters}
        onChange={handleChange}
      />

      {/* <RoundTable
        rounds={rounds}
        onViewRound={
          handleViewRound
        }
      /> */}

      <RoundTable
  rounds={rounds}
  onViewRound={handleViewRound}
  onAddNotes={handleAddNotes}
   onEditRound={handleEditRound}
    onPrescription={
    handlePrescription
  }
   onInvestigation={
    handleInvestigation
  }
   onPrintRound={handlePrintRound}
/>

      <AddRoundModal
        open={openAddModal}
        onClose={() =>
          setOpenAddModal(false)
        }
      />

      <AddNotesModal
  open={openNotesModal}
  round={selectedRound}
  onClose={() =>
    setOpenNotesModal(false)
  }
/>

<EditRoundModal
  open={openEditModal}
  round={selectedRound}
  onClose={() =>
    setOpenEditModal(false)
  }
/>


<PrescriptionModal
  open={
    openPrescriptionModal
  }
  round={selectedRound}
  onClose={() =>
    setOpenPrescriptionModal(
      false
    )
  }
/>


<InvestigationModal
  open={
    openInvestigationModal
  }
  round={selectedRound}
  onClose={() =>
    setOpenInvestigationModal(
      false
    )
  }
/>

<PrintRoundReportModal
  open={openPrintModal}
  round={selectedRound}
  onClose={() =>
    setOpenPrintModal(false)
  }
/>

      <RoundDetailsDrawer
        open={openDrawer}
        round={selectedRound}
        onClose={
          handleCloseDrawer
        }
      />

    </div>
  );
}

export default DoctorRounds;