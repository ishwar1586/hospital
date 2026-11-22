// src/features/IPDManagement/services/ipdService.js

/**
 * ============================================================
 * IPD MANAGEMENT SERVICE
 * ============================================================
 *
 * Single data-access layer for IPD Management.
 *
 * Current:
 *     Service -> Mock Data
 *
 * Future:
 *     Service -> Backend API
 *
 * Components / hooks should never directly import mock files.
 *
 * ============================================================
 */

import {
  ipdMockData,
} from "../mock/ipd.mock";

import {
  bedViewMock,
} from "../mock/bedView.mock";


/* ============================================================
 * INTERNAL HELPER
 * ============================================================
 */

const simulateRequest = (data, delay = 200) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};


/* ============================================================
 * DASHBOARD STATS
 * ============================================================
 */

export const getIPDStats = async () => {
  return simulateRequest(ipdMockData.stats);
};


/* ============================================================
 * PATIENTS
 * ============================================================
 */

export const getIPDPatients = async () => {
  return simulateRequest(ipdMockData.patients);
};


export const getIPDPatientById = async (patientId) => {
  const patient = ipdMockData.patients.find(
    (item) => item.id === patientId
  );

  return simulateRequest(patient || null);
};


export const getIPDPatientByIPDNumber = async (ipdNumber) => {
  const patient = ipdMockData.patients.find(
    (item) => item.ipdNumber === ipdNumber
  );

  return simulateRequest(patient || null);
};


/* ============================================================
 * WARDS
 * ============================================================
 */

export const getIPDWards = async () => {
  return simulateRequest(ipdMockData.wards);
};


export const getIPDWardById = async (wardId) => {
  const ward = ipdMockData.wards.find(
    (item) => item.id === wardId
  );

  return simulateRequest(ward || null);
};


/* ============================================================
 * ROOMS
 * ============================================================
 */

export const getIPDRooms = async () => {
  return simulateRequest(ipdMockData.rooms);
};


export const getIPDRoomsByWard = async (wardId) => {
  const rooms = ipdMockData.rooms.filter(
    (item) => item.wardId === wardId
  );

  return simulateRequest(rooms);
};


export const getIPDRoomById = async (roomId) => {
  const room = ipdMockData.rooms.find(
    (item) => item.id === roomId
  );

  return simulateRequest(room || null);
};


/* ============================================================
 * DOCTORS
 * ============================================================
 */

export const getIPDDoctors = async () => {
  return simulateRequest(ipdMockData.doctors);
};


export const getIPDDoctorById = async (doctorId) => {
  const doctor = ipdMockData.doctors.find(
    (item) => item.id === doctorId
  );

  return simulateRequest(doctor || null);
};


/* ============================================================
 * STATUS OPTIONS
 * ============================================================
 */

export const getIPDStatuses = async () => {
  return simulateRequest(ipdMockData.statuses);
};


/* ============================================================
 * EXISTING IPD BEDS
 * ============================================================
 *
 * These methods are kept untouched for existing IPD modules.
 *
 * Bed View has its own nested ward -> room -> bed structure.
 * ============================================================
 */

export const getIPDBeds = async () => {
  return simulateRequest(ipdMockData.beds);
};


export const getIPDBedById = async (bedId) => {
  const bed = ipdMockData.beds.find(
    (item) => item.id === bedId
  );

  return simulateRequest(bed || null);
};


export const getIPDBedsByWard = async (wardId) => {
  const beds = ipdMockData.beds.filter(
    (item) => item.wardId === wardId
  );

  return simulateRequest(beds);
};


export const getIPDBedsByRoom = async (roomId) => {
  const beds = ipdMockData.beds.filter(
    (item) => item.roomId === roomId
  );

  return simulateRequest(beds);
};


/* ============================================================
 * BED VIEW
 * ============================================================
 *
 * Dedicated service layer for:
 *
 * Bed View
 *    ↓
 * Wards
 *    ↓
 * Rooms
 *    ↓
 * Beds
 *
 * Components will consume these methods through hooks.
 * ============================================================
 */


/**
 * Get complete Bed View data.
 *
 * Returns:
 *
 * {
 *   wards: []
 * }
 */
export const getBedViewData = async () => {
  return simulateRequest(
    bedViewMock
  );
};


/**
 * Get all Bed View wards.
 */
export const getBedViewWards = async () => {
  return simulateRequest(
    bedViewMock.wards
  );
};


/**
 * Get a single Bed View ward.
 */
export const getBedViewWardById = async (wardId) => {
  const ward = bedViewMock.wards.find(
    (item) => item.id === wardId
  );

  return simulateRequest(
    ward || null
  );
};


/**
 * Get rooms of a specific Bed View ward.
 */
export const getBedViewRoomsByWard = async (wardId) => {
  const ward = bedViewMock.wards.find(
    (item) => item.id === wardId
  );

  return simulateRequest(
    ward?.rooms || []
  );
};


/**
 * Get a single Bed View room.
 */
export const getBedViewRoomById = async (
  roomId
) => {
  for (const ward of bedViewMock.wards) {
    const room = ward.rooms?.find(
      (item) => item.id === roomId
    );

    if (room) {
      return simulateRequest(room);
    }
  }

  return simulateRequest(null);
};


/**
 * Get all beds from Bed View.
 */
export const getBedViewBeds = async () => {
  const beds = bedViewMock.wards.flatMap(
    (ward) =>
      ward.rooms?.flatMap(
        (room) =>
          room.beds?.map((bed) => ({
            ...bed,

            wardId: ward.id,
            wardName: ward.name,

            roomId: room.id,
            roomNumber: room.roomNumber,
          })) || []
      ) || []
  );

  return simulateRequest(beds);
};


/**
 * Get beds belonging to a specific ward.
 */
export const getBedViewBedsByWard = async (
  wardId
) => {
  const ward = bedViewMock.wards.find(
    (item) => item.id === wardId
  );

  const beds =
    ward?.rooms?.flatMap(
      (room) =>
        room.beds?.map((bed) => ({
          ...bed,

          wardId: ward.id,
          wardName: ward.name,

          roomId: room.id,
          roomNumber: room.roomNumber,
        })) || []
    ) || [];

  return simulateRequest(beds);
};


/**
 * Get beds belonging to a specific room.
 */
export const getBedViewBedsByRoom = async (
  roomId
) => {
  for (const ward of bedViewMock.wards) {
    const room = ward.rooms?.find(
      (item) => item.id === roomId
    );

    if (room) {
      const beds =
        room.beds?.map((bed) => ({
          ...bed,

          wardId: ward.id,
          wardName: ward.name,

          roomId: room.id,
          roomNumber: room.roomNumber,
        })) || [];

      return simulateRequest(beds);
    }
  }

  return simulateRequest([]);
};


/**
 * Get a single Bed View bed.
 */
export const getBedViewBedById = async (
  bedId
) => {
  for (const ward of bedViewMock.wards) {
    for (const room of ward.rooms || []) {
      const bed = room.beds?.find(
        (item) => item.id === bedId
      );

      if (bed) {
        return simulateRequest({
          ...bed,

          wardId: ward.id,
          wardName: ward.name,

          roomId: room.id,
          roomNumber: room.roomNumber,
        });
      }
    }
  }

  return simulateRequest(null);
};


/**
 * Get Bed View status options.
 */
export const getBedViewStatusOptions = async () => {
  return simulateRequest(
    bedViewMock.statusOptions
  );
};


/* ============================================================
 * DISCHARGED PATIENTS
 * ============================================================
 */

export const getIPDDischargedPatients = async () => {
  return simulateRequest(
    ipdMockData.dischargedPatients
  );
};


export const getIPDDischargedPatientById = async (
  dischargeId
) => {
  const patient =
    ipdMockData.dischargedPatients.find(
      (item) => item.id === dischargeId
    );

  return simulateRequest(
    patient || null
  );
};


/* ============================================================
 * TRANSFER HISTORY
 * ============================================================
 */

export const getIPDTransferHistory = async () => {
  return simulateRequest(
    ipdMockData.transferHistory
  );
};


export const getIPDTransferById = async (
  transferId
) => {
  const transfer =
    ipdMockData.transferHistory.find(
      (item) => item.id === transferId
    );

  return simulateRequest(
    transfer || null
  );
};


/* ============================================================
 * REPORTS
 * ============================================================
 */

export const getIPDReports = async () => {
  return simulateRequest(
    ipdMockData.reports
  );
};


export const getIPDAdmissionSummary = async () => {
  return simulateRequest(
    ipdMockData.reports.admissionSummary
  );
};


export const getIPDDischargeSummary = async () => {
  return simulateRequest(
    ipdMockData.reports.dischargeSummary
  );
};


export const getIPDBedSummary = async () => {
  return simulateRequest(
    ipdMockData.reports.bedSummary
  );
};


export const getIPDWardOccupancy = async () => {
  return simulateRequest(
    ipdMockData.reports.wardOccupancy
  );
};


/* ============================================================
 * FILTER OPTIONS
 * ============================================================
 */

export const getIPDFilterOptions = async () => {
  const [
    wards,
    rooms,
    doctors,
    statuses,
  ] = await Promise.all([
    getIPDWards(),
    getIPDRooms(),
    getIPDDoctors(),
    getIPDStatuses(),
  ]);

  return {
    wards,
    rooms,
    doctors,
    statuses,
  };
};


/* ============================================================
 * BED VIEW FILTER OPTIONS
 * ============================================================
 */

export const getBedViewFilterOptions = async () => {
  const [
    wards,
    statusOptions,
  ] = await Promise.all([
    getBedViewWards(),
    getBedViewStatusOptions(),
  ]);

  return {
    wards,
    statuses: statusOptions,
  };
};


/* ============================================================
 * IPD OVERVIEW DATA
 * ============================================================
 */

export const getIPDManagementData = async () => {
  const [
    stats,
    patients,
    filterOptions,
  ] = await Promise.all([
    getIPDStats(),
    getIPDPatients(),
    getIPDFilterOptions(),
  ]);

  return {
    stats,
    patients,
    filterOptions,
  };
};


/* ============================================================
 * BED VIEW SUMMARY
 * ============================================================
 *
 * Summary is calculated from actual Bed View data.
 * No numbers are hardcoded.
 * ============================================================
 */

export const getBedViewSummary = async () => {
  const beds = await getBedViewBeds();

  const totalBeds = beds.length;

  const occupiedBeds = beds.filter(
    (bed) => bed.status === "occupied"
  ).length;

  const availableBeds = beds.filter(
    (bed) => bed.status === "available"
  ).length;

  const reservedBeds = beds.filter(
    (bed) => bed.status === "reserved"
  ).length;

  const maintenanceBeds = beds.filter(
    (bed) => bed.status === "maintenance"
  ).length;

  const blockedBeds = beds.filter(
    (bed) => bed.status === "blocked"
  ).length;

  const occupancyPercentage =
    totalBeds > 0
      ? Math.round(
          (occupiedBeds / totalBeds) * 100
        )
      : 0;

  const availabilityPercentage =
    totalBeds > 0
      ? Math.round(
          (availableBeds / totalBeds) * 100
        )
      : 0;

  return simulateRequest({
    totalBeds,
    occupiedBeds,
    availableBeds,
    reservedBeds,
    maintenanceBeds,
    blockedBeds,
    occupancyPercentage,
    availabilityPercentage,
  });
};


/* ============================================================
 * PROFILE DATA
 * ============================================================
 */

export const getIPDPatientProfile = async (
  patientId
) => {
  const patient =
    await getIPDPatientById(patientId);

  if (!patient) {
    return null;
  }

  return {
    patient,
  };
};


/* ============================================================
 * DEFAULT SERVICE EXPORT
 * ============================================================
 */

const ipdService = {
  /* IPD */
  getIPDStats,

  getIPDPatients,
  getIPDPatientById,
  getIPDPatientByIPDNumber,

  getIPDWards,
  getIPDWardById,

  getIPDRooms,
  getIPDRoomsByWard,
  getIPDRoomById,

  getIPDDoctors,
  getIPDDoctorById,

  getIPDStatuses,

  getIPDBeds,
  getIPDBedById,
  getIPDBedsByWard,
  getIPDBedsByRoom,

  /* Bed View */
  getBedViewData,
  getBedViewWards,
  getBedViewWardById,
  getBedViewRoomsByWard,
  getBedViewRoomById,
  getBedViewBeds,
  getBedViewBedsByWard,
  getBedViewBedsByRoom,
  getBedViewBedById,
  getBedViewStatusOptions,
  getBedViewFilterOptions,
  getBedViewSummary,

  /* Discharge */
  getIPDDischargedPatients,
  getIPDDischargedPatientById,

  /* Transfer */
  getIPDTransferHistory,
  getIPDTransferById,

  /* Reports */
  getIPDReports,
  getIPDAdmissionSummary,
  getIPDDischargeSummary,
  getIPDBedSummary,
  getIPDWardOccupancy,

  /* Filters */
  getIPDFilterOptions,

  /* Overview */
  getIPDManagementData,

  /* Profile */
  getIPDPatientProfile,
};

export default ipdService;