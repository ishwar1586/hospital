import api, { clinicalApi } from "./axios.config.js";

export const unwrapData = (response) => response?.data?.data ?? response?.data ?? response;
export const unwrapList = (response) => {
  const body = response?.data ?? response ?? {};
  return {
    data: Array.isArray(body.data) ? body.data : (Array.isArray(body) ? body : []),
    pagination: body.pagination ?? { page: 1, limit: 20, total: Array.isArray(body.data) ? body.data.length : 0, pages: 1 },
  };
};

export function createClinicalResourceService(resourceType) {
  if (!resourceType) throw new Error("resourceType is required");
  return {
    async list(params = {}) { return unwrapList(await clinicalApi.list(resourceType, params)); },
    async get(id) { return unwrapData(await clinicalApi.get(resourceType, id)); },
    async create(payload) { return unwrapData(await clinicalApi.create(resourceType, payload)); },
    async update(id, payload) { return unwrapData(await clinicalApi.update(resourceType, id, payload)); },
    async transition(id, status, extra = {}) { return unwrapData(await clinicalApi.transition(resourceType, id, status, extra)); },
    async archive(id) { return unwrapData(await api.delete(`/resources/${resourceType}/${id}`)); },
  };
}

export const clinicalResources = Object.freeze({
  patients: createClinicalResourceService("patients"),
  appointments: createClinicalResourceService("appointments"),
  admissions: createClinicalResourceService("admissions"),
  beds: createClinicalResourceService("beds"),
  nursingNotes: createClinicalResourceService("nursingNotes"),
  labOrders: createClinicalResourceService("labOrders"),
  radiologyOrders: createClinicalResourceService("radiologyOrders"),
  prescriptions: createClinicalResourceService("prescriptions"),
  medicines: createClinicalResourceService("medicines"),
  stockBatches: createClinicalResourceService("stockBatches"),
  invoices: createClinicalResourceService("invoices"),
  payments: createClinicalResourceService("payments"),
  refunds: createClinicalResourceService("refunds"),
  bloodUnits: createClinicalResourceService("bloodUnits"),
  surgeries: createClinicalResourceService("surgeries"),
  suppliers: createClinicalResourceService("suppliers"),
  staff: createClinicalResourceService("staff"),
  attendance: createClinicalResourceService("attendance"),
  payroll: createClinicalResourceService("payroll"),
  purchaseOrders: createClinicalResourceService("purchaseOrders"),
  inventoryTransactions: createClinicalResourceService("inventoryTransactions"),
  insuranceClaims: createClinicalResourceService("insuranceClaims"),
  emergencyCases: createClinicalResourceService("emergencyCases"),
  icuObservations: createClinicalResourceService("icuObservations"),
  dischargeSummaries: createClinicalResourceService("dischargeSummaries"),
  bloodTransactions: createClinicalResourceService("bloodTransactions"),
  labTests: createClinicalResourceService("labTests"),
});
