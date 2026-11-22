
// src/master_modules/RadiologyManagement/pages/RadiologyManagement.jsx

import React, { useState, useCallback, useMemo } from "react";

import "@/master_modules/RadiologyManagement/styles/RadiologyManagement.css";

import RadiologyHeader from "../components/RadiologyHeader/RadiologyHeader";
import RadiologyStats from "../components/RadiologyStats/RadiologyStats";
import RadiologyFilters from "../components/RadiologyFilters/RadiologyFilters";
import RadiologyTabs from "../components/RadiologyTabs/RadiologyTabs";
import RadiologyTable from "../components/RadiologyTable/RadiologyTable";
import NewRadiologyOrder from "../components/NewRadiologyOrder/NewRadiologyOrder";

const INITIAL_FILTERS = {
  search: "",
  modality: "all",
  status: "all",
  date: "",
};

const RadiologyManagement = ({
  onNewOrder,
  stats,
  onCreateOrder,
  onSaveDraft,
}) => {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [activeTab, setActiveTab] = useState("all");
  const [currentView, setCurrentView] = useState("dashboard");

  // Open the New Radiology Order form.
  const handleNewOrder = useCallback(() => {
    setCurrentView("new-order");

    // Preserve compatibility with an existing parent callback.
    if (typeof onNewOrder === "function") {
      onNewOrder();
    }
  }, [onNewOrder]);

  // Return to the existing dashboard without resetting filters or tabs.
  const handleCancelNewOrder = useCallback(() => {
    setCurrentView("dashboard");
  }, []);

  const handleFilterChange = useCallback((field, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [field]: value,
    }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({ ...INITIAL_FILTERS });
  }, []);

  const activeFilterCount = useMemo(() => {
    return Object.entries(filters).filter(([key, value]) => {
      if (key === "search") {
        return value.trim().length > 0;
      }

      if (key === "modality" || key === "status") {
        return value !== "all";
      }

      return value !== "";
    }).length;
  }, [filters]);

  // Submit an order and return to the dashboard after success.
  const handleCreateOrder = useCallback(
    async (payload) => {
      if (typeof onCreateOrder !== "function") {
        throw new Error(
          "Order creation service is not connected. Please connect onCreateOrder."
        );
      }

      const result = await onCreateOrder(payload);

      setCurrentView("dashboard");

      return result;
    },
    [onCreateOrder]
  );

  // Save a draft and return to the dashboard after success.
  const handleSaveOrderDraft = useCallback(
    async (payload) => {
      if (typeof onSaveDraft !== "function") {
        throw new Error(
          "Draft saving service is not connected. Please connect onSaveDraft."
        );
      }

      const result = await onSaveDraft(payload);

      setCurrentView("dashboard");

      return result;
    },
    [onSaveDraft]
  );

  // Display the order form instead of the dashboard.
  if (currentView === "new-order") {
    return (
      <NewRadiologyOrder
        onCancel={handleCancelNewOrder}
        onSubmitOrder={
          typeof onCreateOrder === "function"
            ? handleCreateOrder
            : undefined
        }
        onSaveDraft={
          typeof onSaveDraft === "function"
            ? handleSaveOrderDraft
            : undefined
        }
      />
    );
  }

  // Existing Radiology dashboard.
  return (
    <main className="radiology-management">
      <div className="radiology-management__container">
        <RadiologyHeader onNewOrder={handleNewOrder} />

        <RadiologyStats stats={stats} />

        <RadiologyFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleResetFilters}
          activeFilterCount={activeFilterCount}
        />

        <RadiologyTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <RadiologyTable
          filters={filters}
          activeTab={activeTab}
        />
      </div>
    </main>
  );
};

export default RadiologyManagement;
