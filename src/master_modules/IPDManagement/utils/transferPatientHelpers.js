// src/features/IPDManagement/utils/transferPatientHelpers.js

/**
 * ============================================================
 * TRANSFER PATIENT HELPERS
 * ============================================================
 *
 * Responsible only for reusable Transfer Patient utilities.
 *
 * This file does NOT:
 *
 * - fetch API data
 * - import mock data
 * - manage React state
 * - render UI
 *
 * Responsibilities:
 *
 * - Patient data normalization
 * - Current location normalization
 * - Destination normalization
 * - Transfer form validation
 * - Transfer payload preparation
 * - Transfer summary preparation
 *
 * ============================================================
 */


/* ============================================================
 * SAFE VALUE
 * ============================================================
 */

export const getSafeValue = (
  value,
  fallback = ""
) => {
  if (
    value === null ||
    value === undefined
  ) {
    return fallback;
  }

  if (
    typeof value === "string" &&
    value.trim() === ""
  ) {
    return fallback;
  }

  return value;
};


/* ============================================================
 * NORMALIZE TEXT
 * ============================================================
 */

export const normalizeText = (
  value
) => {
  if (
    value === null ||
    value === undefined
  ) {
    return "";
  }

  return String(value).trim();
};


/* ============================================================
 * NORMALIZE PATIENT
 * ============================================================
 *
 * Converts different possible patient structures into one
 * predictable structure for Transfer Patient UI.
 *
 * No patient value is hardcoded here.
 * ============================================================
 */

export const normalizeTransferPatient = (
  patient = {}
) => {
  if (
    !patient ||
    typeof patient !== "object"
  ) {
    return null;
  }

  const patientDetails =
    patient?.patientDetails ||
    patient?.patient ||
    {};

  const location =
    patient?.location ||
    patient?.currentLocation ||
    {};

  const doctor =
    patient?.doctorDetails ||
    patient?.attendingDoctor ||
    {};

  return {
    id:
      patient?.id ||
      patientDetails?.id ||
      "",

    name:
      patient?.name ||
      patient?.patientName ||
      patientDetails?.name ||
      patientDetails?.patientName ||
      "",

    uhid:
      patient?.uhid ||
      patient?.patientUHID ||
      patientDetails?.uhid ||
      patientDetails?.patientUHID ||
      "",

    ipdNumber:
      patient?.ipdNumber ||
      patient?.ipdNo ||
      patient?.ipd ||
      "",

    age:
      patient?.age ??
      patientDetails?.age ??
      "",

    gender:
      patient?.gender ||
      patientDetails?.gender ||
      "",

    bloodGroup:
      patient?.bloodGroup ||
      patient?.blood_group ||
      patientDetails?.bloodGroup ||
      "",

    phone:
      patient?.phone ||
      patient?.mobile ||
      patient?.contactNumber ||
      patientDetails?.phone ||
      patientDetails?.mobile ||
      "",

    address:
      patient?.address ||
      patientDetails?.address ||
      "",

    wardId:
      patient?.wardId ||
      location?.wardId ||
      location?.ward?.id ||
      "",

    ward:
      patient?.ward ||
      patient?.wardName ||
      location?.wardName ||
      location?.ward?.name ||
      "",

    roomId:
      patient?.roomId ||
      location?.roomId ||
      location?.room?.id ||
      "",

    room:
      patient?.room ||
      patient?.roomNumber ||
      location?.roomNumber ||
      location?.room?.roomNumber ||
      location?.room?.name ||
      "",

    bedId:
      patient?.bedId ||
      location?.bedId ||
      location?.bed?.id ||
      "",

    bed:
      patient?.bed ||
      patient?.bedNumber ||
      location?.bedNumber ||
      location?.bed?.bedNumber ||
      location?.bed?.name ||
      "",

    doctorId:
      patient?.doctorId ||
      doctor?.id ||
      "",

    doctor:
      patient?.doctor ||
      patient?.doctorName ||
      doctor?.name ||
      doctor?.doctorName ||
      "",

    departmentId:
      patient?.departmentId ||
      doctor?.departmentId ||
      "",

    department:
      patient?.department ||
      patient?.departmentName ||
      doctor?.department ||
      doctor?.departmentName ||
      "",

    admissionDate:
      patient?.admissionDate ||
      patient?.admittedOn ||
      "",

    raw: patient,
  };
};


/* ============================================================
 * GET CURRENT LOCATION
 * ============================================================
 */

export const getPatientCurrentLocation = (
  patient = {}
) => {
  const normalizedPatient =
    normalizeTransferPatient(patient);

  if (!normalizedPatient) {
    return {
      wardId: "",
      ward: "",
      roomId: "",
      room: "",
      bedId: "",
      bed: "",
    };
  }

  return {
    wardId:
      normalizedPatient.wardId,

    ward:
      normalizedPatient.ward,

    roomId:
      normalizedPatient.roomId,

    room:
      normalizedPatient.room,

    bedId:
      normalizedPatient.bedId,

    bed:
      normalizedPatient.bed,
  };
};


/* ============================================================
 * GET PATIENT DISPLAY DATA
 * ============================================================
 *
 * Useful for TransferPatientDetails.jsx
 * ============================================================
 */

export const getTransferPatientDisplayData = (
  patient = {}
) => {
  const normalizedPatient =
    normalizeTransferPatient(patient);

  if (!normalizedPatient) {
    return {};
  }

  return {
    id: normalizedPatient.id,

    name: normalizedPatient.name,

    uhid: normalizedPatient.uhid,

    ipdNumber:
      normalizedPatient.ipdNumber,

    age:
      normalizedPatient.age,

    gender:
      normalizedPatient.gender,

    bloodGroup:
      normalizedPatient.bloodGroup,

    phone:
      normalizedPatient.phone,

    address:
      normalizedPatient.address,

    currentWard:
      normalizedPatient.ward,

    currentRoom:
      normalizedPatient.room,

    currentBed:
      normalizedPatient.bed,

    doctor:
      normalizedPatient.doctor,

    department:
      normalizedPatient.department,

    admissionDate:
      normalizedPatient.admissionDate,
  };
};


/* ============================================================
 * BUILD WITHIN HOSPITAL DESTINATION
 * ============================================================
 */

export const buildWithinHospitalDestination = (
  form = {},
  ward = null,
  room = null,
  bed = null
) => {
  return {
    type: "withinHospital",

    wardId:
      form?.targetWardId ||
      ward?.id ||
      "",

    wardName:
      ward?.name ||
      "",

    roomId:
      form?.targetRoomId ||
      room?.id ||
      "",

    roomName:
      room?.roomNumber ||
      room?.name ||
      "",

    bedId:
      form?.targetBedId ||
      bed?.id ||
      "",

    bedNumber:
      bed?.bedNumber ||
      bed?.name ||
      "",
  };
};


/* ============================================================
 * BUILD ANOTHER HOSPITAL DESTINATION
 * ============================================================
 */

export const buildAnotherHospitalDestination = (
  form = {},
  hospital = null,
  department = null,
  doctor = null
) => {
  return {
    type: "anotherHospital",

    hospitalId:
      form?.receivingHospitalId ||
      hospital?.id ||
      "",

    hospitalName:
      hospital?.name ||
      "",

    hospitalCode:
      hospital?.code ||
      "",

    hospitalAddress:
      hospital?.address ||
      "",

    hospitalPhone:
      hospital?.phone ||
      "",

    departmentId:
      form?.receivingDepartmentId ||
      department?.id ||
      "",

    departmentName:
      department?.name ||
      "",

    doctorId:
      form?.receivingDoctorId ||
      doctor?.id ||
      "",

    doctorName:
      doctor?.name ||
      "",
  };
};


/* ============================================================
 * BUILD TRANSFER DESTINATION
 * ============================================================
 */

export const buildTransferDestination = ({
  form = {},
  ward = null,
  room = null,
  bed = null,
  hospital = null,
  department = null,
  doctor = null,
} = {}) => {
  const transferType =
    form?.transferType ||
    "withinHospital";

  if (
    transferType ===
    "anotherHospital"
  ) {
    return buildAnotherHospitalDestination(
      form,
      hospital,
      department,
      doctor
    );
  }

  return buildWithinHospitalDestination(
    form,
    ward,
    room,
    bed
  );
};


/* ============================================================
 * VALIDATE REQUIRED VALUE
 * ============================================================
 */

const isRequiredValueValid = (
  value
) => {
  if (
    value === null ||
    value === undefined
  ) {
    return false;
  }

  return (
    String(value).trim().length > 0
  );
};


/* ============================================================
 * VALIDATE TRANSFER TYPE
 * ============================================================
 */

export const validateTransferType = (
  form = {}
) => {
  if (
    !isRequiredValueValid(
      form?.transferType
    )
  ) {
    return {
      valid: false,
      errors: {
        transferType:
          "Transfer type is required.",
      },
    };
  }

  return {
    valid: true,
    errors: {},
  };
};


/* ============================================================
 * VALIDATE WITHIN HOSPITAL
 * ============================================================
 */

export const validateWithinHospitalTransfer = (
  form = {}
) => {
  const errors = {};

  if (
    !isRequiredValueValid(
      form?.targetWardId
    )
  ) {
    errors.targetWardId =
      "Target ward is required.";
  }

  if (
    !isRequiredValueValid(
      form?.targetRoomId
    )
  ) {
    errors.targetRoomId =
      "Target room is required.";
  }

  if (
    !isRequiredValueValid(
      form?.targetBedId
    )
  ) {
    errors.targetBedId =
      "Target bed is required.";
  }

  return {
    valid:
      Object.keys(errors).length === 0,

    errors,
  };
};


/* ============================================================
 * VALIDATE ANOTHER HOSPITAL
 * ============================================================
 */

export const validateAnotherHospitalTransfer = (
  form = {}
) => {
  const errors = {};

  if (
    !isRequiredValueValid(
      form?.receivingHospitalId
    )
  ) {
    errors.receivingHospitalId =
      "Receiving hospital is required.";
  }

  if (
    !isRequiredValueValid(
      form?.receivingDepartmentId
    )
  ) {
    errors.receivingDepartmentId =
      "Receiving department is required.";
  }

  if (
    !isRequiredValueValid(
      form?.transferMode
    )
  ) {
    errors.transferMode =
      "Transfer mode is required.";
  }

  if (
    !isRequiredValueValid(
      form?.expectedDate
    )
  ) {
    errors.expectedDate =
      "Expected date is required.";
  }

  if (
    !isRequiredValueValid(
      form?.expectedTime
    )
  ) {
    errors.expectedTime =
      "Expected time is required.";
  }

  if (
    !isRequiredValueValid(
      form?.reason
    )
  ) {
    errors.reason =
      "Reason for transfer is required.";
  }

  return {
    valid:
      Object.keys(errors).length === 0,

    errors,
  };
};


/* ============================================================
 * VALIDATE TRANSFER INFORMATION
 * ============================================================
 */

export const validateTransferInformation = (
  form = {}
) => {
  const errors = {};

  if (
    !isRequiredValueValid(
      form?.reason
    )
  ) {
    errors.reason =
      "Reason for transfer is required.";
  }

  if (
    !isRequiredValueValid(
      form?.transferDate
    )
  ) {
    errors.transferDate =
      "Transfer date is required.";
  }

  if (
    !isRequiredValueValid(
      form?.transferTime
    )
  ) {
    errors.transferTime =
      "Transfer time is required.";
  }

  if (
    !isRequiredValueValid(
      form?.requestedBy
    )
  ) {
    errors.requestedBy =
      "Requested by is required.";
  }

  return {
    valid:
      Object.keys(errors).length === 0,

    errors,
  };
};


/* ============================================================
 * VALIDATE COMPLETE TRANSFER STEP
 * ============================================================
 */

export const validateTransferStep = (
  step,
  form = {}
) => {
  switch (step) {
    case 1:
      return validateTransferType(
        form
      );

    case 2:
      if (
        form?.transferType ===
        "anotherHospital"
      ) {
        return validateAnotherHospitalTransfer(
          form
        );
      }

      return validateWithinHospitalTransfer(
        form
      );

    case 3:
      return validateTransferInformation(
        form
      );

    case 4:
      return {
        valid: true,
        errors: {},
      };

    default:
      return {
        valid: true,
        errors: {},
      };
  }
};


/* ============================================================
 * BUILD TRANSFER PAYLOAD
 * ============================================================
 *
 * This creates the clean payload that will eventually be sent
 * to the backend.
 *
 * UI components should NOT build this payload themselves.
 * ============================================================
 */

export const buildTransferPayload = ({
  patient = null,
  form = {},
  destination = {},
} = {}) => {
  const normalizedPatient =
    normalizeTransferPatient(
      patient
    );

  return {
    patientId:
      normalizedPatient?.id ||
      "",

    ipdNumber:
      normalizedPatient?.ipdNumber ||
      "",

    uhid:
      normalizedPatient?.uhid ||
      "",

    transferType:
      form?.transferType ||
      "",

    currentLocation:
      getPatientCurrentLocation(
        patient
      ),

    destination,

    transferInformation: {
      reason:
        form?.reason ||
        "",

      transferDate:
        form?.transferDate ||
        "",

      transferTime:
        form?.transferTime ||
        "",

      requestedBy:
        form?.requestedBy ||
        "",

      remarks:
        form?.remarks ||
        "",
    },

    transferDetails: {
      transferMode:
        form?.transferMode ||
        "",

      expectedDate:
        form?.expectedDate ||
        "",

      expectedTime:
        form?.expectedTime ||
        "",
    },
  };
};


/* ============================================================
 * BUILD TRANSFER SUMMARY
 * ============================================================
 */

export const buildTransferSummary = ({
  patient = null,
  form = {},
  destination = {},
} = {}) => {
  const normalizedPatient =
    normalizeTransferPatient(
      patient
    );

  return {
    patient: {
      id:
        normalizedPatient?.id ||
        "",

      name:
        normalizedPatient?.name ||
        "",

      uhid:
        normalizedPatient?.uhid ||
        "",

      ipdNumber:
        normalizedPatient?.ipdNumber ||
        "",
    },

    currentLocation:
      getPatientCurrentLocation(
        patient
      ),

    destination,

    transferType:
      form?.transferType ||
      "",

    reason:
      form?.reason ||
      "",

    transferDate:
      form?.transferDate ||
      "",

    transferTime:
      form?.transferTime ||
      "",

    requestedBy:
      form?.requestedBy ||
      "",

    transferMode:
      form?.transferMode ||
      "",

    expectedDate:
      form?.expectedDate ||
      "",

    expectedTime:
      form?.expectedTime ||
      "",

    remarks:
      form?.remarks ||
      "",
  };
};


/* ============================================================
 * CHECK SAME LOCATION
 * ============================================================
 *
 * Prevents transferring a patient to exactly the same
 * ward + room + bed.
 * ============================================================
 */

export const isSameBedLocation = (
  patient = {},
  target = {}
) => {
  const current =
    getPatientCurrentLocation(
      patient
    );

  if (
    !current.wardId ||
    !current.roomId ||
    !current.bedId
  ) {
    return false;
  }

  return (
    String(current.wardId) ===
      String(target?.wardId || "") &&
    String(current.roomId) ===
      String(target?.roomId || "") &&
    String(current.bedId) ===
      String(target?.bedId || "")
  );
};


/* ============================================================
 * EXPORT DEFAULT
 * ============================================================
 */

const transferPatientHelpers = {
  getSafeValue,
  normalizeText,
  normalizeTransferPatient,
  getPatientCurrentLocation,
  getTransferPatientDisplayData,
  buildWithinHospitalDestination,
  buildAnotherHospitalDestination,
  buildTransferDestination,
  validateTransferType,
  validateWithinHospitalTransfer,
  validateAnotherHospitalTransfer,
  validateTransferInformation,
  validateTransferStep,
  buildTransferPayload,
  buildTransferSummary,
  isSameBedLocation,
};

export default transferPatientHelpers;