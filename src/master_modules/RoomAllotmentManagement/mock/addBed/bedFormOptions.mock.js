
export const bedFormOptionsMock = {
  wards: [
    { label: "General Ward (GW)", value: "general" },
    { label: "ICU Ward (ICU)", value: "icu" },
    { label: "Private Ward (PW)", value: "private" },
  ],

  bedTypes: [
    { label: "General", value: "general" },
    { label: "ICU", value: "icu" },
    { label: "Semi Private", value: "semi-private" },
    { label: "Private", value: "private" },
  ],

  rooms: [
    { label: "GW-101", value: "GW-101", wardId: "general" },
    { label: "GW-102", value: "GW-102", wardId: "general" },
    { label: "ICU-101", value: "ICU-101", wardId: "icu" },
    { label: "PW-101", value: "PW-101", wardId: "private" },
  ],

  bedStatuses: [
    { label: "Available", value: "available" },
    { label: "Occupied", value: "occupied" },
    { label: "Reserved", value: "reserved" },
    { label: "Maintenance", value: "maintenance" },
  ],
};
