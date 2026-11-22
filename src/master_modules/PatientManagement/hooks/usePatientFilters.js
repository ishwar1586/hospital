import { useEffect, useMemo, useState } from "react";

import filterPatients from "../utils/filterPatients";

const DEFAULT_FILTERS = {
  search: "",
  department: "all",
  patientType: "all",
  gender: "all",
  ageGroup: "all",
  status: "all",
  date: "",
};

const usePatientFilters = (patients = [], activeTab = "all") => {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);


  /* =========================================
     Filter Patients
  ========================================= */

  const filteredPatients = useMemo(() => {
    return filterPatients(
      patients,
      filters,
      activeTab
    );
  }, [patients, filters, activeTab]);


  /* =========================================
     Update Filter
  ========================================= */

  const handleFilterChange = (updatedFilters) => {
    setFilters((previousFilters) => ({
      ...previousFilters,
      ...updatedFilters,
    }));
  };


  /* =========================================
     Reset Filters
  ========================================= */

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };


  /* =========================================
     Reset Pagination When Filter Changes
  ========================================= */

  useEffect(() => {
    // Pagination reset ko parent pagination hook
    // ke through handle karenge.
  }, [filters, activeTab]);


  return {
    filters,
    filteredPatients,

    handleFilterChange,
    resetFilters,
  };
};

export default usePatientFilters;