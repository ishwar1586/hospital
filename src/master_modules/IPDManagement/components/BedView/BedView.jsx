import React, {
  useCallback,
  useMemo,
  useState,
} from "react";

import BedViewHeader
  from "@/master_modules/IPDManagement/components/BedView/BedViewHeader.jsx";

import BedViewStats
  from "@/master_modules/IPDManagement/components/BedView/BedViewStats.jsx";

import BedViewTabs
  from "@/master_modules/IPDManagement/components/BedView/BedViewTabs.jsx";

import BedViewFilters
  from "@/master_modules/IPDManagement/components/BedView/BedViewFilters.jsx";

import WardSection
  from "@/master_modules/IPDManagement/components/BedView/WardSection.jsx";

import useIPDBeds
  from "@/master_modules/IPDManagement/hooks/useIPDBeds.js";

import "@/master_modules/IPDManagement/components/BedView/BedView.css";


const BedView = ({ onBack }) => {

  /* ==========================================================
     BED VIEW DATA
     ========================================================== */

  const {
    wards,
    rooms,
    filters,

    filteredWardData,

    totalBeds,
    occupiedBeds,
    availableBeds,
    reservedBeds,
    maintenanceBeds,
    blockedBeds,

    statusOptions,

    updateSearch,
    selectWard,
    selectRoom,
    selectStatus,
    clearFilters,
  } = useIPDBeds();


  /* ==========================================================
     WARD EXPANSION STATE
     ========================================================== */

  const [expandedWards, setExpandedWards] =
    useState({});


  /* ==========================================================
     STATS DATA
     ========================================================== */

  const bedSummary = useMemo(
    () => ({
      totalBeds,
      occupiedBeds,
      availableBeds,
      reservedBeds,
      maintenanceBeds,
      blockedBeds,
    }),
    [
      totalBeds,
      occupiedBeds,
      availableBeds,
      reservedBeds,
      maintenanceBeds,
      blockedBeds,
    ]
  );


  /* ==========================================================
     BED VIEW TABS
     ========================================================== */

  const bedViewTabs = useMemo(() => {

    const allWardsTab = {
      id: "all-wards",
      label: "All Wards",
      value: "",
    };


    const wardTabs = (wards || [])
      .map((ward) => ({
        id: ward?.id,
        label: ward?.name,
        value: ward?.id,
      }))
      .filter(
        (tab) =>
          tab.id &&
          tab.label
      );


    return [
      allWardsTab,
      ...wardTabs,
    ];

  }, [wards]);


  /* ==========================================================
     ACTIVE TAB
     ========================================================== */

  const activeTab =
    filters?.wardId ||
    "all-wards";


  /* ==========================================================
     TAB CHANGE
     ========================================================== */

  const handleTabChange = useCallback(
    (tabId) => {

      if (tabId === "all-wards") {
        selectWard("");
        return;
      }

      selectWard(tabId);
    },
    [selectWard]
  );


  /* ==========================================================
     SEARCH
     ========================================================== */

  const handleSearchChange = useCallback(
    (value) => {
      updateSearch(value);
    },
    [updateSearch]
  );


  /* ==========================================================
     WARD FILTER
     ========================================================== */

  const handleWardChange = useCallback(
    (wardId) => {
      selectWard(wardId);
    },
    [selectWard]
  );


  /* ==========================================================
     ROOM FILTER
     ========================================================== */

  const handleRoomChange = useCallback(
    (roomId) => {
      selectRoom(roomId);
    },
    [selectRoom]
  );


  /* ==========================================================
     STATUS FILTER
     ========================================================== */

  const handleStatusChange = useCallback(
    (status) => {
      selectStatus(status);
    },
    [selectStatus]
  );


  /* ==========================================================
     CLEAR FILTERS
     ========================================================== */

  const handleClearFilters = useCallback(() => {
    clearFilters();
  }, [clearFilters]);


  /* ==========================================================
     WARD TOGGLE
     ========================================================== */

  const handleWardToggle = useCallback(
    (wardId) => {

      if (!wardId) {
        return;
      }


      setExpandedWards((previous) => ({
        ...previous,
        [wardId]:
          previous?.[wardId] === undefined
            ? false
            : !previous[wardId],
      }));

    },
    []
  );


  /* ==========================================================
     BED SELECT
     ========================================================== */

  const handleBedSelect = useCallback(
    (bedId) => {

      if (!bedId) {
        return;
      }

      /*
       * Bed selection hook / drawer / modal
       * can be connected here later.
       *
       * Current responsibility:
       * receive selected bed ID.
       */

      return bedId;
    },
    []
  );


  /* ==========================================================
     FILTERED WARD DATA
     ========================================================== */

  const visibleWardData = useMemo(() => {

    if (!Array.isArray(filteredWardData)) {
      return [];
    }

    return filteredWardData;

  }, [filteredWardData]);


  /* ==========================================================
     RENDER
     ========================================================== */

  return (
    <main
      className="ipd-bed-view-page"
      data-page="bed-view"
    >

      {/* ======================================================
          PAGE HEADER
          ====================================================== */}

      <BedViewHeader
        onBack={onBack}
      />


      {/* ======================================================
          BED VIEW STATS
          ====================================================== */}

      <BedViewStats
        summary={bedSummary}
      />


      {/* ======================================================
          WARD TABS
          ====================================================== */}

      <BedViewTabs
        tabs={bedViewTabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />


      {/* ======================================================
          BED VIEW FILTERS
          ====================================================== */}

      <BedViewFilters
        filters={filters}
        wards={wards}
        rooms={rooms}
        statusOptions={statusOptions}
        onSearchChange={handleSearchChange}
        onWardChange={handleWardChange}
        onRoomChange={handleRoomChange}
        onStatusChange={handleStatusChange}
        onClearFilters={handleClearFilters}
      />


      {/* ======================================================
          WARD / ROOM / BED CONTENT
          ====================================================== */}

      <section
        className="ipd-bed-view-page__ward-content"
        aria-label="Ward bed view"
      >

        {visibleWardData.length > 0 ? (

          visibleWardData.map((ward) => {

            const wardId = ward?.id || "";

            const isExpanded =
              expandedWards?.[wardId] ??
              true;


            return (
              <WardSection
                key={wardId}
                ward={ward}
                rooms={ward?.rooms || []}
                expanded={isExpanded}
                onToggle={handleWardToggle}
                onBedSelect={handleBedSelect}
              />
            );

          })

        ) : (

          <div
            className="ipd-bed-view-page__empty"
          >
            <span>
              No beds found for the selected filters.
            </span>
          </div>

        )}

      </section>

    </main>
  );
};


export default BedView;