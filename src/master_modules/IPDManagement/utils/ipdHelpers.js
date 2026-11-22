// src/features/IPDManagement/utils/ipdHelpers.js


/* ============================================================
 * BASIC VALUE HELPERS
 * ============================================================
 */

/**
 * Safely converts a value into a string.
 */
export const toSafeString = (value) => {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  return String(value);
};


/**
 * Returns true when value is empty.
 */
export const isEmptyValue = (value) => {
  return (
    value === null ||
    value === undefined ||
    value === ""
  );
};


/**
 * Safely gets nested object values.
 */
export const getNestedValue = (
  object,
  path,
  fallback = ""
) => {
  if (!object || !path) {
    return fallback;
  }

  const pathParts = Array.isArray(path)
    ? path
    : String(path).split(".");

  let currentValue = object;

  for (const key of pathParts) {
    if (
      currentValue === null ||
      currentValue === undefined
    ) {
      return fallback;
    }

    currentValue = currentValue[key];
  }

  return currentValue ??
    fallback;
};


/* ============================================================
 * PATIENT HELPERS
 * ============================================================
 */

/**
 * Gets patient name safely.
 */
export const getPatientName = (patient) => {
  return (
    patient?.patient?.name ||
    patient?.name ||
    ""
  );
};


/**
 * Gets patient UHID safely.
 */
export const getPatientUHID = (patient) => {
  return (
    patient?.patient?.uhid ||
    patient?.uhid ||
    ""
  );
};


/**
 * Gets patient age safely.
 */
export const getPatientAge = (patient) => {
  return (
    patient?.patient?.age ??
    patient?.age ??
    ""
  );
};


/**
 * Gets patient gender safely.
 */
export const getPatientGender = (
  patient
) => {
  return (
    patient?.patient?.gender ||
    patient?.gender ||
    ""
  );
};


/**
 * Gets patient initials.
 *
 * Uses existing initials from data first.
 * Otherwise generates initials from patient name.
 */
export const getPatientInitials = (
  patient
) => {
  const existingInitials =
    patient?.patient?.initials ||
    patient?.initials;

  if (existingInitials) {
    return existingInitials;
  }

  const name = getPatientName(
    patient
  );

  if (!name) {
    return "";
  }

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(
      (part) =>
        part.charAt(0).toUpperCase()
    )
    .join("");
};


/**
 * Gets patient ID.
 */
export const getPatientId = (
  patient
) => {
  return (
    patient?.patient?.id ||
    patient?.patientId ||
    patient?.id ||
    ""
  );
};


/* ============================================================
 * IPD HELPERS
 * ============================================================
 */

/**
 * Gets IPD number.
 */
export const getIPDNumber = (
  record
) => {
  return (
    record?.ipdNumber ||
    record?.ipdNo ||
    record?.ipdId ||
    ""
  );
};


/**
 * Gets ward ID.
 */
export const getWardId = (
  record
) => {
  return (
    record?.bedAllocation?.wardId ||
    record?.wardId ||
    ""
  );
};


/**
 * Gets ward name.
 */
export const getWardName = (
  record
) => {
  return (
    record?.bedAllocation?.wardName ||
    record?.wardName ||
    record?.ward ||
    ""
  );
};


/**
 * Gets room ID.
 */
export const getRoomId = (
  record
) => {
  return (
    record?.bedAllocation?.roomId ||
    record?.roomId ||
    ""
  );
};


/**
 * Gets room number.
 */
export const getRoomNumber = (
  record
) => {
  return (
    record?.bedAllocation?.roomNumber ||
    record?.roomNumber ||
    record?.room ||
    ""
  );
};


/**
 * Gets bed ID.
 */
export const getBedId = (
  record
) => {
  return (
    record?.bedAllocation?.bedId ||
    record?.bedId ||
    ""
  );
};


/**
 * Gets bed number.
 */
export const getBedNumber = (
  record
) => {
  return (
    record?.bedAllocation?.bedNumber ||
    record?.bedNumber ||
    record?.bed ||
    ""
  );
};


/* ============================================================
 * DOCTOR HELPERS
 * ============================================================
 */

/**
 * Gets doctor ID.
 */
export const getDoctorId = (
  record
) => {
  return (
    record?.doctor?.id ||
    record?.doctorId ||
    ""
  );
};


/**
 * Gets doctor name.
 */
export const getDoctorName = (
  record
) => {
  return (
    record?.doctor?.name ||
    record?.doctorName ||
    record?.doctor ||
    ""
  );
};


/**
 * Gets doctor department.
 */
export const getDoctorDepartment = (
  record
) => {
  return (
    record?.doctor?.department ||
    record?.department ||
    ""
  );
};


/* ============================================================
 * ADMISSION HELPERS
 * ============================================================
 */

/**
 * Gets admission date.
 */
export const getAdmissionDate = (
  record
) => {
  return (
    record?.admissionDate ||
    ""
  );
};


/**
 * Gets admission time.
 */
export const getAdmissionTime = (
  record
) => {
  return (
    record?.admissionTime ||
    ""
  );
};


/**
 * Gets admission date-time.
 */
export const getAdmissionDateTime = (
  record
) => {
  const date =
    getAdmissionDate(record);

  const time =
    getAdmissionTime(record);

  if (!date) {
    return "";
  }

  return time
    ? `${date} ${time}`
    : date;
};


/* ============================================================
 * DISCHARGE HELPERS
 * ============================================================
 */

/**
 * Gets discharge date.
 */
export const getDischargeDate = (
  record
) => {
  return (
    record?.dischargeDate ||
    ""
  );
};


/**
 * Gets discharge type.
 */
export const getDischargeType = (
  record
) => {
  return (
    record?.dischargeType ||
    ""
  );
};


/**
 * Gets discharge status.
 */
export const getDischargeStatus = (
  record
) => {
  return (
    record?.dischargeStatus ||
    ""
  );
};


/* ============================================================
 * STATUS HELPERS
 * ============================================================
 */

/**
 * Gets generic record status.
 */
export const getRecordStatus = (
  record
) => {
  return (
    record?.status ||
    ""
  );
};


/**
 * Compares two statuses safely.
 */
export const isStatus = (
  record,
  status
) => {
  if (!status) {
    return false;
  }

  return (
    toSafeString(
      getRecordStatus(record)
    ).toLowerCase() ===
    toSafeString(status).toLowerCase()
  );
};


/* ============================================================
 * BED HELPERS
 * ============================================================
 */

/**
 * Gets bed status.
 */
export const getBedStatus = (
  bed
) => {
  return (
    bed?.status ||
    ""
  );
};


/**
 * Checks whether bed is occupied.
 */
export const isBedOccupied = (
  bed
) => {
  return (
    toSafeString(
      getBedStatus(bed)
    ).toLowerCase() ===
    "occupied"
  );
};


/**
 * Checks whether bed is available.
 */
export const isBedAvailable = (
  bed
) => {
  return (
    toSafeString(
      getBedStatus(bed)
    ).toLowerCase() ===
    "available"
  );
};


/**
 * Checks whether bed is reserved.
 */
export const isBedReserved = (
  bed
) => {
  return (
    toSafeString(
      getBedStatus(bed)
    ).toLowerCase() ===
    "reserved"
  );
};


/**
 * Checks whether bed is under maintenance.
 */
export const isBedUnderMaintenance = (
  bed
) => {
  const status =
    toSafeString(
      getBedStatus(bed)
    ).toLowerCase();

  return (
    status === "maintenance" ||
    status === "under maintenance"
  );
};


/* ============================================================
 * ARRAY HELPERS
 * ============================================================
 */

/**
 * Safely returns an array.
 */
export const ensureArray = (
  value
) => {
  return Array.isArray(value)
    ? value
    : [];
};


/**
 * Finds a record by ID.
 */
export const findById = (
  records,
  id
) => {
  if (
    !Array.isArray(records) ||
    !id
  ) {
    return null;
  }

  return (
    records.find(
      (record) =>
        record?.id === id
    ) || null
  );
};


/**
 * Finds a record by IPD number.
 */
export const findByIPDNumber = (
  records,
  ipdNumber
) => {
  if (
    !Array.isArray(records) ||
    !ipdNumber
  ) {
    return null;
  }

  return (
    records.find(
      (record) =>
        getIPDNumber(record) ===
        ipdNumber
    ) || null
  );
};


/**
 * Filters records by a property.
 */
export const filterByValue = (
  records,
  property,
  value
) => {
  if (
    !Array.isArray(records)
  ) {
    return [];
  }

  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return records;
  }

  return records.filter(
    (record) =>
      record?.[property] === value
  );
};


/* ============================================================
 * COUNT HELPERS
 * ============================================================
 */

/**
 * Creates count map based on a property.
 */
export const countByProperty = (
  records,
  property
) => {
  if (
    !Array.isArray(records)
  ) {
    return {};
  }

  return records.reduce(
    (counts, record) => {
      const value =
        record?.[property];

      if (
        value === null ||
        value === undefined ||
        value === ""
      ) {
        return counts;
      }

      counts[value] =
        (counts[value] || 0) + 1;

      return counts;
    },
    {}
  );
};


/**
 * Counts records matching a callback.
 */
export const countByCondition = (
  records,
  condition
) => {
  if (
    !Array.isArray(records) ||
    typeof condition !== "function"
  ) {
    return 0;
  }

  return records.filter(condition)
    .length;
};


/* ============================================================
 * SEARCH HELPERS
 * ============================================================
 */

/**
 * Normalizes search text.
 */
export const normalizeSearchValue = (
  value
) => {
  return toSafeString(value)
    .trim()
    .toLowerCase();
};


/**
 * Checks whether record contains search value.
 */
export const matchesSearch = (
  record,
  searchValue,
  fields = []
) => {
  const normalizedSearch =
    normalizeSearchValue(
      searchValue
    );

  if (!normalizedSearch) {
    return true;
  }

  if (!record) {
    return false;
  }

  return fields.some(
    (field) => {
      const value =
        getNestedValue(
          record,
          field
        );

      return normalizeSearchValue(
        value
      ).includes(
        normalizedSearch
      );
    }
  );
};


/* ============================================================
 * FILTER HELPERS
 * ============================================================
 */

/**
 * Checks whether any filter has a value.
 */
export const hasActiveFilters = (
  filters = {}
) => {
  return Object.values(
    filters
  ).some(
    (value) =>
      value !== null &&
      value !== undefined &&
      value !== ""
  );
};


/**
 * Counts active filters.
 */
export const getActiveFilterCount = (
  filters = {}
) => {
  return Object.values(
    filters
  ).filter(
    (value) =>
      value !== null &&
      value !== undefined &&
      value !== ""
  ).length;
};


/**
 * Compares two filter objects.
 */
export const areFiltersEqual = (
  firstFilters = {},
  secondFilters = {}
) => {
  return (
    JSON.stringify(
      firstFilters
    ) ===
    JSON.stringify(
      secondFilters
    )
  );
};


/* ============================================================
 * DATE HELPERS
 * ============================================================
 */

/**
 * Converts date to YYYY-MM-DD.
 */
export const toISODate = (
  value
) => {
  if (!value) {
    return "";
  }

  const date =
    value instanceof Date
      ? value
      : new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return "";
  }

  const year =
    date.getFullYear();

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};


/**
 * Checks whether date is inside range.
 */
export const isDateInRange = (
  value,
  dateFrom,
  dateTo
) => {
  const recordDate =
    normalizeSearchValue(
      value
    );

  if (!recordDate) {
    return false;
  }

  if (
    dateFrom &&
    recordDate < dateFrom
  ) {
    return false;
  }

  if (
    dateTo &&
    recordDate > dateTo
  ) {
    return false;
  }

  return true;
};


/* ============================================================
 * OBJECT HELPERS
 * ============================================================
 */

/**
 * Removes undefined values from object.
 */
export const removeUndefinedValues = (
  object = {}
) => {
  return Object.entries(object)
    .reduce(
      (result, [key, value]) => {
        if (
          value !== undefined
        ) {
          result[key] = value;
        }

        return result;
      },
      {}
    );
};


/**
 * Creates a shallow copy safely.
 */
export const cloneObject = (
  object
) => {
  if (
    !object ||
    typeof object !== "object"
  ) {
    return {};
  }

  return {
    ...object,
  };
};


/* ============================================================
 * IPD TABLE HELPERS
 * ============================================================
 */

/**
 * Creates complete bed location label.
 *
 * Example:
 * Ward A / Room 101 / Bed 01
 */
export const getBedLocationLabel = (
  record
) => {
  const ward =
    getWardName(record);

  const room =
    getRoomNumber(record);

  const bed =
    getBedNumber(record);

  return [
    ward,
    room,
    bed,
  ]
    .filter(Boolean)
    .join(" / ");
};


/**
 * Creates doctor display information.
 */
export const getDoctorDisplayInfo = (
  record
) => {
  const name =
    getDoctorName(record);

  const department =
    getDoctorDepartment(record);

  return {
    name,
    department,
    label: [
      name,
      department,
    ]
      .filter(Boolean)
      .join(" • "),
  };
};


/**
 * Creates patient display information.
 */
export const getPatientDisplayInfo = (
  record
) => {
  const name =
    getPatientName(record);

  const age =
    getPatientAge(record);

  const gender =
    getPatientGender(record);

  const uhid =
    getPatientUHID(record);

  return {
    name,
    age,
    gender,
    uhid,
    initials:
      getPatientInitials(record),
  };
};


/* ============================================================
 * EXPORT DEFAULT
 * ============================================================
 */

const ipdHelpers = {
  toSafeString,
  isEmptyValue,
  getNestedValue,

  getPatientName,
  getPatientUHID,
  getPatientAge,
  getPatientGender,
  getPatientInitials,
  getPatientId,

  getIPDNumber,
  getWardId,
  getWardName,
  getRoomId,
  getRoomNumber,
  getBedId,
  getBedNumber,

  getDoctorId,
  getDoctorName,
  getDoctorDepartment,

  getAdmissionDate,
  getAdmissionTime,
  getAdmissionDateTime,

  getDischargeDate,
  getDischargeType,
  getDischargeStatus,

  getRecordStatus,
  isStatus,

  getBedStatus,
  isBedOccupied,
  isBedAvailable,
  isBedReserved,
  isBedUnderMaintenance,

  ensureArray,
  findById,
  findByIPDNumber,
  filterByValue,

  countByProperty,
  countByCondition,

  normalizeSearchValue,
  matchesSearch,

  hasActiveFilters,
  getActiveFilterCount,
  areFiltersEqual,

  toISODate,
  isDateInRange,

  removeUndefinedValues,
  cloneObject,

  getBedLocationLabel,
  getDoctorDisplayInfo,
  getPatientDisplayInfo,
};

export default ipdHelpers;