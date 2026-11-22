import { useState } from "react";

import "@/master_modules/IPD/bedManagement/pages/bedManagement.css";

import BedStats from "@/master_modules/IPD/bedManagement/components/bedStats/BedStats";
import BedFilters from "@/master_modules/IPD/bedManagement/components/bedFilters/BedFilters";
import WardOverview from "@/master_modules/IPD/bedManagement/components/wardOverview/WardOverview";
import BedGrid from "@/master_modules/IPD/bedManagement/components/bedGrid/BedGrid";
import BedDetailsDrawer from "@/master_modules/IPD/bedManagement/components/bedDetailsDrawer/BedDetailsDrawer";

import bedManagement from "@/master_modules/IPD/bedManagement/mock/bedManagement.mock";

function BedManagement() {

  const [selectedBed, setSelectedBed] =
    useState(null);

  const [openDrawer, setOpenDrawer] =
    useState(false);

  const [filters, setFilters] =
    useState({
      ward: "",
      room: "",
      status: "",
      search: "",
    });

  const handleFilterChange = (
    e
  ) => {
    setFilters({
      ...filters,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleBedClick = (
    bed
  ) => {
    setSelectedBed(bed);
    setOpenDrawer(true);
  };

  const handleCloseDrawer =
    () => {
      setOpenDrawer(false);
      setSelectedBed(null);
    };

  return (
    <div className="bed-management-page">

      {/* Header */}

      <div className="bed-page-header">

        <div>
          <h1>
            Bed Management
          </h1>

          <p>
            Monitor and manage
            bed occupancy across
            all wards and rooms.
          </p>
        </div>

      </div>

      {/* Stats */}

      <BedStats
        beds={bedManagement}
      />

      {/* Filters */}

      <BedFilters
        filters={filters}
        onChange={
          handleFilterChange
        }
      />

      {/* Content */}

      <div className="bed-content">

         <div className="ward-panel">

          <WardOverview
            beds={bedManagement}
          />

        </div> 

        <div className="grid-panel">

          <BedGrid
            beds={bedManagement}
            onBedClick={
              handleBedClick
            }
          />

        </div>

      </div>

      {/* Drawer */}

      <BedDetailsDrawer
        open={openDrawer}
        bed={selectedBed}
        onClose={
          handleCloseDrawer
        }
      /> 

    </div>
  );
}

export default BedManagement;