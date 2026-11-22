// src/features/IPDManagement/pages/IPDManagement.jsx

import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import IPDManagementHeader
  from "../components/Header/IPDManagementHeader";

import IPDStatsCards
  from "../components/StatsCards/IPDStatsCards";

import IPDFilters
  from "../components/Filters/IPDFilters";

import IPDTabs
  from "../components/Tabs/IPDTabs";

import IPDTable
  from "../components/Table/IPDTable";


/* ============================================================
   TRANSFER PATIENT
   ============================================================ */

import TransferPatientModal
  from "../components/TransferPatient/TransferPatientModal";


/* ============================================================
   DISCHARGE PATIENT
   ============================================================ */

import DischargePatientModal
  from "../components/DischargePatient/DischargePatientModal";


import useIPDActions
  from "../hooks/useIPDActions";

import {
  IPD_TABS_CONFIG,
} from "../config/ipdConfig";


import BedView
  from "@/master_modules/IPDManagement/components/BedView/BedView.jsx";


import "../styles/ipd-management.css";


/* ============================================================
   IPD MANAGEMENT PAGE
   ============================================================

   Main orchestration page for IPD Management.

   Responsibilities:
   - Connect page-level hooks
   - Connect header actions
   - Render Stats Cards
   - Render Filters
   - Manage active IPD tab
   - Connect IPD table
   - Connect table action handlers
   - Manage Transfer Patient modal
   - Manage Discharge Patient modal
   - Prepare future tab-wise modules

   Dynamic data / UI configuration remains inside:
   - config
   - mock
   - services
   - hooks
   - components

   ============================================================ */

const IPDManagement = () => {

  /* ==========================================================
     IPD ACTIONS
     ========================================================== */

  const {
    handleAdmitPatient,
    handleHeaderTransferPatient,
    handleHeaderDischargePatient,
    handleViewProfile,
    handleEditAdmission,
    handleTransferPatient,
    handleDischargePatient,
    handleCancelAdmission,
  } = useIPDActions();


  /* ==========================================================
     BED VIEW
     ========================================================== */

  const [
    showBedView,
    setShowBedView,
  ] = useState(false);


  /* ==========================================================
     TRANSFER PATIENT MODAL
     ========================================================== */

  const [
    showTransferPatientModal,
    setShowTransferPatientModal,
  ] = useState(false);


  const [
    selectedTransferPatient,
    setSelectedTransferPatient,
  ] = useState(null);


  /* ==========================================================
     DISCHARGE PATIENT MODAL
     ========================================================== */

  const [
    showDischargePatientModal,
    setShowDischargePatientModal,
  ] = useState(false);


  const [
    selectedDischargePatient,
    setSelectedDischargePatient,
  ] = useState(null);


  /* ==========================================================
     TAB CONFIGURATION
     ========================================================== */

  const tabs = useMemo(() => {

    if (!Array.isArray(IPD_TABS_CONFIG)) {
      return [];
    }

    return IPD_TABS_CONFIG;

  }, []);


  /* ==========================================================
     DEFAULT TAB
     ========================================================== */

  const defaultTab = useMemo(() => {

    return tabs[0]?.value ?? "";

  }, [tabs]);


  /* ==========================================================
     ACTIVE TAB
     ========================================================== */

  const [
    activeTab,
    setActiveTab,
  ] = useState(defaultTab);


  /* ==========================================================
     HEADER ACTION HANDLERS
     ========================================================== */

  const handleAdmit = useCallback(() => {

    handleAdmitPatient();

  }, [handleAdmitPatient]);


  const handleTransfer = useCallback(() => {

    handleHeaderTransferPatient();

  }, [handleHeaderTransferPatient]);


  const handleDischarge = useCallback(() => {

    handleHeaderDischargePatient();

  }, [handleHeaderDischargePatient]);


  /* ==========================================================
     BED VIEW HANDLER
     ========================================================== */

  const handleBedManagement = useCallback(() => {

    setShowBedView(true);

  }, []);


  /* ==========================================================
     BED VIEW BACK HANDLER
     ========================================================== */

  const handleBedViewBack = useCallback(() => {

    setShowBedView(false);

  }, []);


  /* ==========================================================
     TAB CHANGE
     ========================================================== */

  const handleTabChange = useCallback(
    (tabValue) => {

      if (!tabValue) {
        return;
      }

      setActiveTab(tabValue);

    },
    []
  );


  /* ==========================================================
     FILTER APPLIED
     ========================================================== */

  const handleFilterApplied = useCallback(
    (filteredData) => {

      /*
       * IPDFilters currently manages its own filter state.
       *
       * This callback is intentionally kept ready for
       * future table/data integration.
       */

      return filteredData;

    },
    []
  );


  /* ==========================================================
     TABLE ACTIONS
     ========================================================== */

  const handleViewPatientProfile = useCallback(
    (patient) => {

      handleViewProfile(patient);

    },
    [handleViewProfile]
  );


  const handleEditPatientAdmission = useCallback(
    (patient) => {

      handleEditAdmission(patient);

    },
    [handleEditAdmission]
  );


  /* ==========================================================
     TRANSFER PATIENT
     ==========================================================

     Current flow:

     Action Menu
          ↓
     Transfer Patient
          ↓
     Selected Patient
          ↓
     Transfer Patient Modal
          ↓
     Transfer workflow

     ========================================================== */

  const handleTransferPatientAction = useCallback(
    (patient) => {

      if (!patient) {
        return;
      }

      setSelectedTransferPatient(patient);

      setShowTransferPatientModal(true);

    },
    []
  );


  /* ==========================================================
     CLOSE TRANSFER PATIENT MODAL
     ========================================================== */

  const handleCloseTransferPatientModal =
    useCallback(() => {

      setShowTransferPatientModal(false);

      setSelectedTransferPatient(null);

    }, []);


  /* ==========================================================
     DISCHARGE PATIENT
     ==========================================================

     Current flow:

     Action Menu
          ↓
     Discharge Patient
          ↓
     Selected Patient
          ↓
     Discharge Patient Modal
          ↓
     Discharge workflow

     Patient is passed dynamically from the selected
     table row.

     ========================================================== */

  const handleDischargePatientAction =
    useCallback(
      (patient) => {

        if (!patient) {
          return;
        }


        /*
         * Keep existing IPD action behaviour.
         *
         * This can later be connected to the actual
         * discharge business logic / API workflow.
         */

        handleDischargePatient(patient);


        /*
         * Open discharge modal with the selected
         * patient.
         */

        setSelectedDischargePatient(patient);

        setShowDischargePatientModal(true);

      },
      [handleDischargePatient]
    );


  /* ==========================================================
     CLOSE DISCHARGE PATIENT MODAL
     ========================================================== */

  const handleCloseDischargePatientModal =
    useCallback(() => {

      setShowDischargePatientModal(false);

      setSelectedDischargePatient(null);

    }, []);


  /* ==========================================================
     CANCEL PATIENT ADMISSION
     ========================================================== */

  const handleCancelPatientAdmission =
    useCallback(
      (patient) => {

        handleCancelAdmission(patient);

      },
      [handleCancelAdmission]
    );


  /* ==========================================================
     EXPORT
     ========================================================== */

  const handleExport = useCallback(() => {

    /*
     * Export functionality will be connected with
     * the table/data layer.
     */

  }, []);


  /* ==========================================================
     ACTIVE TAB CONFIG
     ========================================================== */

  const activeTabConfig = useMemo(() => {

    return tabs.find(
      (tab) => tab?.value === activeTab
    );

  }, [tabs, activeTab]);


  /* ==========================================================
     TABLE VISIBILITY
     ========================================================== */

  const shouldShowTable = useMemo(() => {

    if (!activeTab) {
      return false;
    }

    return activeTab === defaultTab;

  }, [activeTab, defaultTab]);


  /* ==========================================================
     BED VIEW
     ========================================================== */

  if (showBedView) {

    return (
      <BedView
        onBack={handleBedViewBack}
      />
    );

  }


  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <main className="ipd-management-page">

      {/* ======================================================
          HEADER
          ====================================================== */}

      <IPDManagementHeader
        onAdmitPatient={handleAdmit}
        onTransferPatient={handleTransfer}
        onDischargePatient={handleDischarge}
        onBedManagement={handleBedManagement}
        onExport={handleExport}
      />


      {/* ======================================================
          PAGE CONTENT
          ====================================================== */}

      <div className="ipd-management-page__content">

        {/* ====================================================
            STATS CARDS
            ==================================================== */}

        <IPDStatsCards />


        {/* ====================================================
            FILTERS
            ==================================================== */}

        <IPDFilters
          onFilterApplied={handleFilterApplied}
        />


        {/* ====================================================
            TABS
            ==================================================== */}

        <IPDTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />


        {/* ====================================================
            ACTIVE TAB CONTENT
            ==================================================== */}

        <div className="ipd-management-page__tab-content">

          {/* ==================================================
              ADMITTED PATIENTS TABLE
              ================================================== */}

          {shouldShowTable && (

            <IPDTable
              onViewProfile={
                handleViewPatientProfile
              }

              onEditAdmission={
                handleEditPatientAdmission
              }

              onTransferPatient={
                handleTransferPatientAction
              }

              onDischargePatient={
                handleDischargePatientAction
              }

              onCancelAdmission={
                handleCancelPatientAdmission
              }
            />

          )}


          {/* ==================================================
              FUTURE TAB CONTENT
              ================================================== */}

          {!shouldShowTable &&
            activeTabConfig && (

              <div className="ipd-management-page__tab-placeholder">

                <span>
                  {activeTabConfig.label}
                </span>

              </div>

            )}

        </div>

      </div>


      {/* ======================================================
          TRANSFER PATIENT MODAL
          ====================================================== */}

      <TransferPatientModal
        open={showTransferPatientModal}
        patient={selectedTransferPatient}
        onClose={
          handleCloseTransferPatientModal
        }
      />


      {/* ======================================================
          DISCHARGE PATIENT MODAL
          ====================================================== */}

      <DischargePatientModal
        open={showDischargePatientModal}
        patient={selectedDischargePatient}
        onClose={
          handleCloseDischargePatientModal
        }
      />

    </main>
  );
};


export default IPDManagement;