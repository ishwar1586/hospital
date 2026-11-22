
import React, { useCallback, useState } from "react";

import OPDHeader from "../components/OPDHeader/OPDHeader";
import OPDStats from "../components/OPDStats/OPDStats";
import OPDDepartmentTabs from "../components/OPDDepartmentTabs/OPDDepartmentTabs";
import OPDFilters from "../components/OPDFilters/OPDFilters";
import OPDTable from "../components/OPDTable/OPDTable";

import StartConsultation from "../components/StartConsultation/pages/StartConsultation";

import { opdDepartmentTabsConfig } from "../config/opdDepartmentTabs.config";
import { opdFiltersMock } from "../mock/opdFilters.mock";

import "@/master_modules/OPD/styles/OPDManagement.css";

const createInitialFilters = () => ({
  ...opdFiltersMock,
  appointmentDate: "",
  doctorId: "all",
  visitType: "all",
  status: "all",
  search: "",
});

const normalizeActionId = (actionId) => {
  if (typeof actionId !== "string") {
    return "";
  }

  return actionId
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-");
};

const OPDManagement = () => {
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(
    opdDepartmentTabsConfig.defaultDepartmentId || "all"
  );

  const [filters, setFilters] = useState(createInitialFilters);
  const [appliedFilters, setAppliedFilters] = useState(createInitialFilters);

  // Selected patient ko consultation page par bhejne ke liye.
  const [selectedConsultationPatient, setSelectedConsultationPatient] =
    useState(null);

  const handleDepartmentChange = useCallback((departmentId) => {
    setSelectedDepartmentId(departmentId || "all");
  }, []);

  const handleFilterChange = useCallback((field, value) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      [field]: value,
    }));
  }, []);

  const handleSearch = useCallback((nextFilters) => {
    setAppliedFilters({
      ...createInitialFilters(),
      ...nextFilters,
    });
  }, []);

  const handleClearFilters = useCallback(() => {
    const resetFilters = createInitialFilters();

    setFilters(resetFilters);
    setAppliedFilters(resetFilters);
  }, []);

  const handlePatientSelect = useCallback((patient) => {
    console.log("Selected OPD patient:", patient);
  }, []);

  // Table ke 3-dot menu se aane wale actions.
  const handlePatientAction = useCallback((actionId, patient) => {
    const normalizedActionId = normalizeActionId(actionId);

    console.log("OPD patient action:", actionId, patient);

    if (
      normalizedActionId === "start-consultation" ||
      normalizedActionId === "start-consult"
    ) {
      if (!patient) {
        console.error(
          "Start Consultation failed: selected patient data was not provided."
        );
        return;
      }

      setSelectedConsultationPatient(patient);
      return;
    }

    // Baaki actions filhaal existing workflow ke liye unchanged hain.
  }, []);

  const handleBackFromConsultation = useCallback(() => {
    setSelectedConsultationPatient(null);
  }, []);

  // Consultation page open hone par OPD listing ko temporarily hide karo.
  if (selectedConsultationPatient) {
    return (
      <StartConsultation
        patient={selectedConsultationPatient}
        onBack={handleBackFromConsultation}
      />
    );
  }

  return (
    <main className="opd-management">
      <OPDHeader />

      <OPDStats />

      <OPDDepartmentTabs
        selectedDepartmentId={selectedDepartmentId}
        onDepartmentChange={handleDepartmentChange}
      />

      <OPDFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        onClear={handleClearFilters}
      />

      <OPDTable
        selectedDepartmentId={selectedDepartmentId}
        filters={appliedFilters}
        onPatientSelect={handlePatientSelect}
        onPatientAction={handlePatientAction}
      />
    </main>
  );
};

export default OPDManagement;
