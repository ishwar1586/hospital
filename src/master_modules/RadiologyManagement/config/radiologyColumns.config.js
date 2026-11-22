// src/master_modules/RadiologyManagement/config/radiologyColumns.config.js

export const radiologyColumnsConfig = [
  {
    id: "orderId",
    label: "Order ID",
    field: "orderId",
  },
  {
    id: "patient",
    label: "Patient",
    field: "patientName",
  },
  {
    id: "testName",
    label: "Imaging Study",
    field: "testName",
  },
  {
    id: "modality",
    label: "Modality",
    field: "modality",
  },
  {
    id: "doctorName",
    label: "Ordering Doctor",
    field: "doctorName",
  },
  {
    id: "orderDate",
    label: "Order Date",
    field: "orderDate",
  },
  {
    id: "status",
    label: "Status",
    field: "status",
  },
  {
    id: "actions",
    label: "Actions",
    type: "actions",
  },
];

export default radiologyColumnsConfig;