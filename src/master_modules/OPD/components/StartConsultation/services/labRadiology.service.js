
// src/master_modules/OPD/components/StartConsultation/services/labRadiology.service.js

import { labTestsMock } from "../mock/labTests.mock";
import { radiologyTestsMock } from "../mock/radiologyTests.mock";

// Temporary in-memory storage.
// Backend API integrate hone ke baad ise API calls se replace karenge.

let labRadiologyOrders = [];

const cloneData = (data) => JSON.parse(JSON.stringify(data));

const getAllTests = () => [
  ...labTestsMock,
  ...radiologyTestsMock,
];

// Get tests by type
export const getLabTestsService = async () => {
  return cloneData(
    labTestsMock.filter((test) => test.isActive)
  );
};

export const getRadiologyTestsService = async () => {
  return cloneData(
    radiologyTestsMock.filter((test) => test.isActive)
  );
};

// Search tests by name, code or category
export const searchTestsService = async (searchTerm = "", type = "all") => {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  let tests = getAllTests().filter((test) => test.isActive);

  if (type !== "all") {
    tests = tests.filter((test) => test.type === type);
  }

  if (!normalizedSearch) {
    return cloneData(tests);
  }

  const filteredTests = tests.filter((test) => {
    const searchableFields = [
      test.name,
      test.code,
      test.category?.label,
      test.description,
    ];

    return searchableFields.some((field) =>
      String(field || "")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  });

  return cloneData(filteredTests);
};

// Get a test by ID
export const getTestByIdService = async (testId) => {
  const test = getAllTests().find(
    (item) => item.id === testId
  );

  return test ? cloneData(test) : null;
};

// Save Lab / Radiology order
export const saveLabRadiologyOrderService = async (payload) => {
  const order = {
    ...payload,
    orderId: `LR-${Date.now()}`,
    tests: cloneData(payload.tests || []),
    status: payload.status || "draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  labRadiologyOrders = [
    ...labRadiologyOrders,
    order,
  ];

  return cloneData(order);
};

// Get all saved orders
export const getAllLabRadiologyOrdersService = async () => {
  return cloneData(labRadiologyOrders);
};

// Get orders for a patient
export const getPatientTestOrdersService = async (patientId) => {
  const orders = labRadiologyOrders.filter(
    (order) => order.patientId === patientId
  );

  return cloneData(orders);
};

// Update an existing order
export const updateLabRadiologyOrderService = async (
  orderId,
  updates = {}
) => {
  const orderIndex = labRadiologyOrders.findIndex(
    (order) => order.orderId === orderId
  );

  if (orderIndex === -1) {
    throw new Error("Lab / Radiology order not found.");
  }

  labRadiologyOrders[orderIndex] = {
    ...labRadiologyOrders[orderIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  return cloneData(labRadiologyOrders[orderIndex]);
};
