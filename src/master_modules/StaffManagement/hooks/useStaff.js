
// src/master_modules/StaffManagement/hooks/useStaff.js

import { useCallback, useEffect, useState } from "react";

import {
  getStaffList,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff,
  getStaffStats,
} from "../services/staff.Service";

const INITIAL_FILTERS = {
  search: "",
  departmentId: "",
  designation: "",
  employmentType: "",
  status: "",
  staffCategory: "",
};

const INITIAL_STATS = {
  totalStaff: 0,
  doctors: 0,
  nurses: 0,
  administrative: 0,
  supportStaff: 0,
  inactive: 0,
  onLeave: 0,
};

export const useStaff = () => {
  const [staff, setStaff] = useState([]);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [filters, setFilters] = useState({ ...INITIAL_FILTERS });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  // Refresh staff list and statistics after CRUD operations.
  const refresh = useCallback(() => {
    setRefreshKey((previous) => previous + 1);
  }, []);

  // Load filtered staff and dashboard statistics.
  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const [staffResult, statsResult] = await Promise.all([
          getStaffList(filters),
          getStaffStats(),
        ]);

        if (!cancelled) {
          setStaff(staffResult);
          setStats(statsResult);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err?.message || "Unable to load staff data."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [filters, refreshKey]);

  // Update one or multiple filter values.
  const updateFilters = useCallback((updates) => {
    setFilters((previous) => ({
      ...previous,
      ...updates,
    }));
  }, []);

  // Compatible with StaffFilters.jsx:
  // onFilterChange(name, value)
  const handleFilterChange = useCallback((name, value) => {
    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  }, []);

  // Reset all filters.
  const resetFilters = useCallback(() => {
    setFilters({ ...INITIAL_FILTERS });
  }, []);

  // Get one staff member.
  const getStaffDetails = useCallback(async (id) => {
    try {
      setError("");
      return await getStaffById(id);
    } catch (err) {
      setError(
        err?.message || "Unable to load staff details."
      );
      throw err;
    }
  }, []);

  // Add staff.
  const addStaff = useCallback(
    async (payload) => {
      try {
        setError("");

        const createdStaff = await createStaff(payload);
        refresh();

        return createdStaff;
      } catch (err) {
        setError(err?.message || "Unable to add staff.");
        throw err;
      }
    },
    [refresh]
  );

  // Update staff.
  const editStaff = useCallback(
    async (id, payload) => {
      try {
        setError("");

        const updatedStaff = await updateStaff(id, payload);
        refresh();

        return updatedStaff;
      } catch (err) {
        setError(err?.message || "Unable to update staff.");
        throw err;
      }
    },
    [refresh]
  );

  // Delete staff.
  const removeStaff = useCallback(
    async (id) => {
      try {
        setError("");

        await deleteStaff(id);
        refresh();
      } catch (err) {
        setError(err?.message || "Unable to delete staff.");
        throw err;
      }
    },
    [refresh]
  );

  return {
    staff,
    stats,
    filters,
    loading,
    error,

    updateFilters,
    handleFilterChange,
    resetFilters,
    refresh,

    getStaffDetails,
    addStaff,
    editStaff,
    removeStaff,
  };
};

export default useStaff;
