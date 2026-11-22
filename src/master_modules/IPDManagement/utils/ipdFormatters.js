// src/features/IPDManagement/utils/ipdFormatters.js


/* ============================================================
 * CONSTANTS
 * ============================================================
 */

const DEFAULT_EMPTY_VALUE = "—";


/* ============================================================
 * BASIC FORMATTERS
 * ============================================================
 */

/**
 * Returns fallback value when the provided value is empty.
 */
export const formatValue = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  return value;
};


/**
 * Converts value to string safely.
 */
export const formatText = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  return String(value);
};


/* ============================================================
 * NAME FORMATTERS
 * ============================================================
 */

/**
 * Formats person's name.
 *
 * Example:
 * john doe -> John Doe
 */
export const formatName = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  return String(value)
    .trim()
    .split(/\s+/)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ");
};


/**
 * Formats initials.
 */
export const formatInitials = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  return String(value)
    .trim()
    .slice(0, 2)
    .toUpperCase();
};


/* ============================================================
 * PATIENT FORMATTERS
 * ============================================================
 */

/**
 * Formats age and gender together.
 *
 * Example:
 * 45 + Male -> 45 / Male
 */
export const formatAgeGender = (
  age,
  gender,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const values = [
    age !== null &&
    age !== undefined &&
    age !== ""
      ? age
      : null,

    gender || null,
  ].filter(Boolean);

  if (!values.length) {
    return fallback;
  }

  return values.join(" / ");
};


/**
 * Formats patient identity.
 *
 * Example:
 * John Doe (UHID001)
 */
export const formatPatientIdentity = (
  name,
  uhid,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const formattedName =
    formatName(name, "");

  const formattedUHID =
    formatText(uhid, "");

  if (
    formattedName &&
    formattedUHID
  ) {
    return `${formattedName} (${formattedUHID})`;
  }

  return (
    formattedName ||
    formattedUHID ||
    fallback
  );
};


/* ============================================================
 * DOCTOR FORMATTERS
 * ============================================================
 */

/**
 * Formats doctor display name.
 */
export const formatDoctorName = (
  name,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatName(
    name,
    fallback
  );
};


/**
 * Formats doctor information.
 *
 * Example:
 * Dr. Rahul Sharma • Cardiology
 */
export const formatDoctorInfo = (
  name,
  department,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const formattedName =
    formatDoctorName(name, "");

  const formattedDepartment =
    formatText(
      department,
      ""
    );

  if (
    formattedName &&
    formattedDepartment
  ) {
    return `${formattedName} • ${formattedDepartment}`;
  }

  return (
    formattedName ||
    formattedDepartment ||
    fallback
  );
};


/* ============================================================
 * IPD NUMBER FORMATTERS
 * ============================================================
 */

/**
 * Formats IPD number.
 */
export const formatIPDNumber = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatText(
    value,
    fallback
  );
};


/**
 * Formats UHID.
 */
export const formatUHID = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatText(
    value,
    fallback
  );
};


/* ============================================================
 * BED / LOCATION FORMATTERS
 * ============================================================
 */

/**
 * Formats ward name.
 */
export const formatWardName = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatText(
    value,
    fallback
  );
};


/**
 * Formats room number.
 */
export const formatRoomNumber = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatText(
    value,
    fallback
  );
};


/**
 * Formats bed number.
 */
export const formatBedNumber = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatText(
    value,
    fallback
  );
};


/**
 * Formats complete bed location.
 *
 * Example:
 * General Ward / Room 101 / Bed 03
 */
export const formatBedLocation = (
  ward,
  room,
  bed,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const values = [
    ward,
    room,
    bed,
  ]
    .filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== ""
    )
    .map((value) =>
      String(value).trim()
    );

  if (!values.length) {
    return fallback;
  }

  return values.join(" / ");
};


/**
 * Formats ward + room.
 *
 * Example:
 * General Ward / Room 101
 */
export const formatWardRoom = (
  ward,
  room,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const values = [
    ward,
    room,
  ]
    .filter(
      (value) =>
        value !== null &&
        value !== undefined &&
        value !== ""
    )
    .map((value) =>
      String(value).trim()
    );

  if (!values.length) {
    return fallback;
  }

  return values.join(" / ");
};


/* ============================================================
 * DATE FORMATTERS
 * ============================================================
 */

/**
 * Safely creates Date object.
 */
const createDate = (
  value
) => {
  if (!value) {
    return null;
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
    return null;
  }

  return date;
};


/**
 * Formats date as:
 *
 * DD MMM YYYY
 *
 * Example:
 * 18 Sep 2026
 */
export const formatDate = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const date =
    createDate(value);

  if (!date) {
    return fallback;
  }

  return new Intl.DateTimeFormat(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  ).format(date);
};


/**
 * Formats date as:
 *
 * DD/MM/YYYY
 */
export const formatShortDate = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const date =
    createDate(value);

  if (!date) {
    return fallback;
  }

  const day =
    String(
      date.getDate()
    ).padStart(2, "0");

  const month =
    String(
      date.getMonth() + 1
    ).padStart(2, "0");

  const year =
    date.getFullYear();

  return `${day}/${month}/${year}`;
};


/**
 * Formats date as:
 *
 * YYYY-MM-DD
 */
export const formatISODate = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const date =
    createDate(value);

  if (!date) {
    return fallback;
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
 * Formats time.
 *
 * Example:
 * 09:30 AM
 */
export const formatTime = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (!value) {
    return fallback;
  }

  /*
   * If backend/mock already gives HH:mm,
   * convert it to 12-hour format.
   */
  const stringValue =
    String(value).trim();

  const timeMatch =
    stringValue.match(
      /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/
    );

  if (timeMatch) {
    let hours =
      Number(timeMatch[1]);

    const minutes =
      timeMatch[2];

    const period =
      hours >= 12
        ? "PM"
        : "AM";

    hours =
      hours % 12 || 12;

    return `${String(hours).padStart(
      2,
      "0"
    )}:${minutes} ${period}`;
  }

  return stringValue;
};


/**
 * Formats date + time.
 */
export const formatDateTime = (
  date,
  time,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const formattedDate =
    formatDate(date, "");

  const formattedTime =
    formatTime(time, "");

  if (
    formattedDate &&
    formattedTime
  ) {
    return `${formattedDate}, ${formattedTime}`;
  }

  return (
    formattedDate ||
    formattedTime ||
    fallback
  );
};


/* ============================================================
 * NUMBER FORMATTERS
 * ============================================================
 */

/**
 * Formats number using Indian number system.
 *
 * Example:
 * 125000 -> 1,25,000
 */
export const formatNumber = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  const number =
    Number(value);

  if (
    Number.isNaN(number)
  ) {
    return fallback;
  }

  return new Intl.NumberFormat(
    "en-IN"
  ).format(number);
};


/**
 * Formats percentage.
 *
 * Example:
 * 85 -> 85%
 */
export const formatPercentage = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  const number =
    Number(value);

  if (
    Number.isNaN(number)
  ) {
    return fallback;
  }

  return `${number}%`;
};


/**
 * Formats currency.
 */
export const formatCurrency = (
  value,
  currency = "INR",
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  const number =
    Number(value);

  if (
    Number.isNaN(number)
  ) {
    return fallback;
  }

  return new Intl.NumberFormat(
    "en-IN",
    {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }
  ).format(number);
};


/* ============================================================
 * STATUS FORMATTERS
 * ============================================================
 */

/**
 * Converts status into readable text.
 *
 * Example:
 * admitted -> Admitted
 * partially_paid -> Partially Paid
 */
export const formatStatusLabel = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  return String(value)
    .replace(/[_-]+/g, " ")
    .trim()
    .split(/\s+/)
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
    )
    .join(" ");
};


/**
 * Formats admission status.
 */
export const formatAdmissionStatus = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatStatusLabel(
    value,
    fallback
  );
};


/**
 * Formats discharge status.
 */
export const formatDischargeStatus = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatStatusLabel(
    value,
    fallback
  );
};


/**
 * Formats discharge type.
 */
export const formatDischargeType = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatStatusLabel(
    value,
    fallback
  );
};


/**
 * Formats bed status.
 */
export const formatBedStatus = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  return formatStatusLabel(
    value,
    fallback
  );
};


/* ============================================================
 * TREND FORMATTERS
 * ============================================================
 */

/**
 * Formats trend value.
 *
 * Example:
 * +5
 * -2
 */
export const formatTrend = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return fallback;
  }

  const number =
    Number(value);

  if (
    Number.isNaN(number)
  ) {
    return fallback;
  }

  if (number > 0) {
    return `+${number}`;
  }

  return String(number);
};


/**
 * Formats trend percentage.
 */
export const formatTrendPercentage = (
  value,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  const formatted =
    formatTrend(
      value,
      ""
    );

  if (!formatted) {
    return fallback;
  }

  return `${formatted}%`;
};


/* ============================================================
 * STATS FORMATTERS
 * ============================================================
 */

/**
 * Formats stat card value.
 */
export const formatStatValue = (
  value,
  type = "number",
  fallback = DEFAULT_EMPTY_VALUE
) => {
  switch (type) {
    case "percentage":
      return formatPercentage(
        value,
        fallback
      );

    case "currency":
      return formatCurrency(
        value,
        "INR",
        fallback
      );

    case "text":
      return formatText(
        value,
        fallback
      );

    case "number":
    default:
      return formatNumber(
        value,
        fallback
      );
  }
};


/* ============================================================
 * SUMMARY FORMATTERS
 * ============================================================
 */

/**
 * Formats bed occupancy summary.
 */
export const formatOccupancySummary = (
  occupied,
  total,
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    occupied === null ||
    occupied === undefined ||
    total === null ||
    total === undefined
  ) {
    return fallback;
  }

  return `${formatNumber(
    occupied
  )} / ${formatNumber(total)}`;
};


/**
 * Formats patient count summary.
 */
export const formatPatientCount = (
  count,
  label = "Patients",
  fallback = DEFAULT_EMPTY_VALUE
) => {
  if (
    count === null ||
    count === undefined ||
    count === ""
  ) {
    return fallback;
  }

  return `${formatNumber(
    count
  )} ${label}`;
};


/* ============================================================
 * EXPORT DEFAULT
 * ============================================================
 */

const ipdFormatters = {
  formatValue,
  formatText,

  formatName,
  formatInitials,

  formatAgeGender,
  formatPatientIdentity,

  formatDoctorName,
  formatDoctorInfo,

  formatIPDNumber,
  formatUHID,

  formatWardName,
  formatRoomNumber,
  formatBedNumber,
  formatBedLocation,
  formatWardRoom,

  formatDate,
  formatShortDate,
  formatISODate,
  formatTime,
  formatDateTime,

  formatNumber,
  formatPercentage,
  formatCurrency,

  formatStatusLabel,
  formatAdmissionStatus,
  formatDischargeStatus,
  formatDischargeType,
  formatBedStatus,

  formatTrend,
  formatTrendPercentage,

  formatStatValue,

  formatOccupancySummary,
  formatPatientCount,
};

export default ipdFormatters;