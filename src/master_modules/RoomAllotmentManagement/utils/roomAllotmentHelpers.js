
export const downloadRoomAllotmentsCSV = (data) => {
  const headers = [
    "Patient Name",
    "UHID",
    "IPD Number",
    "Ward",
    "Room Number",
    "Bed Number",
    "Room Type",
    "Allotment Date",
    "Bed Status",
  ];

  const rows = data.map((item) => [
    item.patientName,
    item.uhid,
    item.ipdNo,
    item.ward,
    item.roomNo,
    item.bedNo,
    item.roomType,
    item.allotmentDate,
    item.status,
  ]);

  const escapeCSV = (value) =>
    `"${String(value ?? "").replace(/"/g, '""')}"`;

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) => row.map(escapeCSV).join(","))
    .join("\r\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "room-allotment-report.csv";
  link.click();

  URL.revokeObjectURL(url);
};
