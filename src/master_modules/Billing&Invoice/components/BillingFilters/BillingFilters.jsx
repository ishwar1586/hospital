import React, { useMemo, useState } from "react";

import BillingSearch from "./BillingSearch";
import BillingDateRange from "./BillingDateRange";
import BillingDepartmentFilter from "./BillingDepartmentFilter";
import BillingPatientTypeFilter from "./BillingPatientTypeFilter";
import BillingPaymentStatusFilter from "./BillingPaymentStatusFilter";

import "./BillingFilters.css";

const BillingFilters = ({
  config = {},
  options = {},
  value,
  onChange,
}) => {
  const initialState = useMemo(
    () => ({
      search: "",
      dateRange: {
        startDate: "",
        endDate: "",
      },
      department: "all",
      patientType: "all",
      paymentStatus: "all",
    }),
    []
  );

  const [internalFilters, setInternalFilters] =
    useState(initialState);

  const filters =
    value !== undefined
      ? value
      : internalFilters;

  const updateFilters = (key, newValue) => {
    const updatedFilters = {
      ...filters,
      [key]: newValue,
    };

    if (value === undefined) {
      setInternalFilters(updatedFilters);
    }

    onChange?.(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      ...initialState,
    };

    setInternalFilters(resetFilters);

    onChange?.(resetFilters);
  };

  const filterConfigs = config.filters || [];

  return (
    <section className="billing-filters">

      {/* Search */}
      {config.search && (
        <BillingSearch
          config={config.search}
          value={filters.search}
          onChange={(newValue) =>
            updateFilters("search", newValue)
          }
        />
      )}

      {/* Filter Fields */}
      <div className="billing-filters__row">

        {filterConfigs.map((filterConfig) => {
          switch (filterConfig.id) {
            case "date-range":
              return (
                <BillingDateRange
                  key={filterConfig.id}
                  config={filterConfig}
                  value={filters.dateRange}
                  onChange={(newValue) =>
                    updateFilters(
                      "dateRange",
                      newValue
                    )
                  }
                />
              );

            case "department":
              return (
                <BillingDepartmentFilter
                  key={filterConfig.id}
                  config={filterConfig}
                  options={options.departments || []}
                  value={filters.department}
                  onChange={(newValue) =>
                    updateFilters(
                      "department",
                      newValue
                    )
                  }
                />
              );

            case "patient-type":
              return (
                <BillingPatientTypeFilter
                  key={filterConfig.id}
                  config={filterConfig}
                  options={options.patientTypes || []}
                  value={filters.patientType}
                  onChange={(newValue) =>
                    updateFilters(
                      "patientType",
                      newValue
                    )
                  }
                />
              );

            case "payment-status":
              return (
                <BillingPaymentStatusFilter
                  key={filterConfig.id}
                  config={filterConfig}
                  options={
                    options.paymentStatuses || []
                  }
                  value={filters.paymentStatus}
                  onChange={(newValue) =>
                    updateFilters(
                      "paymentStatus",
                      newValue
                    )
                  }
                />
              );

            default:
              return null;
          }
        })}

        {config.actions?.showReset && (
          <button
            type="button"
            className="billing-filters__reset"
            onClick={handleReset}
          >
            Reset
          </button>
        )}
      </div>
    </section>
  );
};

export default BillingFilters;