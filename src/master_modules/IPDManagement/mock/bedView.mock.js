/* ============================================================
 * IPD MANAGEMENT - BED VIEW MOCK DATA
 * ============================================================
 *
 * This file contains temporary mock data for Bed View.
 *
 * Data flow:
 *
 * BedView.jsx
 *      ↓
 * Hook
 *      ↓
 * Service
 *      ↓
 * bedView.mock.js
 *
 * Future:
 *
 * Service
 *      ↓
 * API
 *
 * UI components should never directly depend on this file.
 *
 * ============================================================
 */

/* ============================================================
 * BED VIEW WARDS
 * ============================================================
 */

export const bedViewWardsMock = [
  {
    id: "ward-general",
    name: "General Ward",
    code: "GW",
    icon: "bed",
    sortOrder: 1,

    rooms: [
      {
        id: "room-gw-1",
        roomNumber: "Room 1",
        roomType: "General Ward",

        beds: [
          {
            id: "bed-gw-1-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-001",
              name: "Rohan Singh",
              uhid: "UHID123456",
            },

            ipdNumber: "IPD000123",
          },

          {
            id: "bed-gw-1-2",
            bedNumber: "Bed-2",
            status: "available",
          },

          {
            id: "bed-gw-1-3",
            bedNumber: "Bed-3",
            status: "occupied",

            patient: {
              id: "patient-002",
              name: "Amit Kumar",
              uhid: "UHID123458",
            },

            ipdNumber: "IPD000125",
          },

          {
            id: "bed-gw-1-4",
            bedNumber: "Bed-4",
            status: "available",
          },
        ],
      },

      {
        id: "room-gw-2",
        roomNumber: "Room 2",
        roomType: "General Ward",

        beds: [
          {
            id: "bed-gw-2-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-003",
              name: "Sneha Sharma",
              uhid: "UHID123459",
            },

            ipdNumber: "IPD000126",
          },

          {
            id: "bed-gw-2-2",
            bedNumber: "Bed-2",
            status: "occupied",

            patient: {
              id: "patient-004",
              name: "Deepak Kumar",
              uhid: "UHID123460",
            },

            ipdNumber: "IPD000127",
          },

          {
            id: "bed-gw-2-3",
            bedNumber: "Bed-3",
            status: "available",
          },

          {
            id: "bed-gw-2-4",
            bedNumber: "Bed-4",
            status: "reserved",
          },
        ],
      },

      {
        id: "room-gw-3",
        roomNumber: "Room 3",
        roomType: "General Ward",

        beds: [
          {
            id: "bed-gw-3-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-005",
              name: "Priya Gupta",
              uhid: "UHID123457",
            },

            ipdNumber: "IPD000124",
          },

          {
            id: "bed-gw-3-2",
            bedNumber: "Bed-2",
            status: "available",
          },

          {
            id: "bed-gw-3-3",
            bedNumber: "Bed-3",
            status: "occupied",

            patient: {
              id: "patient-006",
              name: "Manoj Patel",
              uhid: "UHID123462",
            },

            ipdNumber: "IPD000129",
          },

          {
            id: "bed-gw-3-4",
            bedNumber: "Bed-4",
            status: "maintenance",
          },
        ],
      },

      {
        id: "room-gw-4",
        roomNumber: "Room 4",
        roomType: "General Ward",

        beds: [
          {
            id: "bed-gw-4-1",
            bedNumber: "Bed-1",
            status: "available",
          },

          {
            id: "bed-gw-4-2",
            bedNumber: "Bed-2",
            status: "occupied",

            patient: {
              id: "patient-007",
              name: "Suresh Lal",
              uhid: "UHID123464",
            },

            ipdNumber: "IPD000131",
          },

          {
            id: "bed-gw-4-3",
            bedNumber: "Bed-3",
            status: "available",
          },

          {
            id: "bed-gw-4-4",
            bedNumber: "Bed-4",
            status: "maintenance",
          },
        ],
      },

      {
        id: "room-gw-5",
        roomNumber: "Room 5",
        roomType: "General Ward",

        beds: [
          {
            id: "bed-gw-5-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-008",
              name: "Nisha Patel",
              uhid: "UHID123465",
            },

            ipdNumber: "IPD000132",
          },

          {
            id: "bed-gw-5-2",
            bedNumber: "Bed-2",
            status: "available",
          },

          {
            id: "bed-gw-5-3",
            bedNumber: "Bed-3",
            status: "available",
          },

          {
            id: "bed-gw-5-4",
            bedNumber: "Bed-4",
            status: "available",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * PRIVATE ROOM
   * ============================================================
   */

  {
    id: "ward-private",
    name: "Private Room",
    code: "PR",
    icon: "bed",
    sortOrder: 2,

    rooms: [
      {
        id: "room-pr-101",
        roomNumber: "Room 101",
        roomType: "Private Room",

        beds: [
          {
            id: "bed-pr-101-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-009",
              name: "Vikram Patel",
              uhid: "UHID123466",
            },

            ipdNumber: "IPD000133",
          },
        ],
      },

      {
        id: "room-pr-102",
        roomNumber: "Room 102",
        roomType: "Private Room",

        beds: [
          {
            id: "bed-pr-102-1",
            bedNumber: "Bed-1",
            status: "available",
          },
        ],
      },

      {
        id: "room-pr-103",
        roomNumber: "Room 103",
        roomType: "Private Room",

        beds: [
          {
            id: "bed-pr-103-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-010",
              name: "Neha Kapoor",
              uhid: "UHID123467",
            },

            ipdNumber: "IPD000134",
          },
        ],
      },

      {
        id: "room-pr-104",
        roomNumber: "Room 104",
        roomType: "Private Room",

        beds: [
          {
            id: "bed-pr-104-1",
            bedNumber: "Bed-1",
            status: "reserved",
          },
        ],
      },

      {
        id: "room-pr-105",
        roomNumber: "Room 105",
        roomType: "Private Room",

        beds: [
          {
            id: "bed-pr-105-1",
            bedNumber: "Bed-1",
            status: "available",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * ICU
   * ============================================================
   */

  {
    id: "ward-icu",
    name: "ICU",
    code: "ICU",
    icon: "pulse",
    sortOrder: 3,

    rooms: [
      {
        id: "room-icu-main",
        roomNumber: "ICU",
        roomType: "ICU",

        beds: [
          {
            id: "bed-icu-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-011",
              name: "Amit Verma",
              uhid: "UHID123468",
            },

            ipdNumber: "IPD000135",
          },

          {
            id: "bed-icu-2",
            bedNumber: "Bed-2",
            status: "occupied",

            patient: {
              id: "patient-012",
              name: "Pooja Mehta",
              uhid: "UHID123469",
            },

            ipdNumber: "IPD000136",
          },

          {
            id: "bed-icu-3",
            bedNumber: "Bed-3",
            status: "occupied",

            patient: {
              id: "patient-013",
              name: "Suresh Nair",
              uhid: "UHID123470",
            },

            ipdNumber: "IPD000137",
          },

          {
            id: "bed-icu-4",
            bedNumber: "Bed-4",
            status: "available",
          },

          {
            id: "bed-icu-5",
            bedNumber: "Bed-5",
            status: "occupied",

            patient: {
              id: "patient-014",
              name: "Meera Iyer",
              uhid: "UHID123471",
            },

            ipdNumber: "IPD000138",
          },

          {
            id: "bed-icu-6",
            bedNumber: "Bed-6",
            status: "occupied",

            patient: {
              id: "patient-015",
              name: "Rakesh Singh",
              uhid: "UHID123472",
            },

            ipdNumber: "IPD000139",
          },

          {
            id: "bed-icu-7",
            bedNumber: "Bed-7",
            status: "available",
          },

          {
            id: "bed-icu-8",
            bedNumber: "Bed-8",
            status: "occupied",

            patient: {
              id: "patient-016",
              name: "Kavita Tiwari",
              uhid: "UHID123473",
            },

            ipdNumber: "IPD000140",
          },

          {
            id: "bed-icu-9",
            bedNumber: "Bed-9",
            status: "maintenance",
          },

          {
            id: "bed-icu-10",
            bedNumber: "Bed-10",
            status: "available",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * MATERNITY WARD
   * ============================================================
   */

  {
    id: "ward-maternity",
    name: "Maternity Ward",
    code: "MW",
    icon: "bed",
    sortOrder: 4,

    rooms: [
      {
        id: "room-maternity-1",
        roomNumber: "Room 1",
        roomType: "Maternity Ward",

        beds: [
          {
            id: "bed-maternity-1-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-017",
              name: "Kavya Sharma",
              uhid: "UHID123474",
            },

            ipdNumber: "IPD000141",
          },

          {
            id: "bed-maternity-1-2",
            bedNumber: "Bed-2",
            status: "available",
          },

          {
            id: "bed-maternity-1-3",
            bedNumber: "Bed-3",
            status: "available",
          },

          {
            id: "bed-maternity-1-4",
            bedNumber: "Bed-4",
            status: "reserved",
          },
        ],
      },

      {
        id: "room-maternity-2",
        roomNumber: "Room 2",
        roomType: "Maternity Ward",

        beds: [
          {
            id: "bed-maternity-2-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-018",
              name: "Pooja Singh",
              uhid: "UHID123475",
            },

            ipdNumber: "IPD000142",
          },

          {
            id: "bed-maternity-2-2",
            bedNumber: "Bed-2",
            status: "available",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * SURGICAL WARD
   * ============================================================
   */

  {
    id: "ward-surgical",
    name: "Surgical Ward",
    code: "SW",
    icon: "bed",
    sortOrder: 5,

    rooms: [
      {
        id: "room-surgical-1",
        roomNumber: "Room 1",
        roomType: "Surgical Ward",

        beds: [
          {
            id: "bed-surgical-1-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-019",
              name: "Rajiv Gupta",
              uhid: "UHID123476",
            },

            ipdNumber: "IPD000143",
          },

          {
            id: "bed-surgical-1-2",
            bedNumber: "Bed-2",
            status: "available",
          },

          {
            id: "bed-surgical-1-3",
            bedNumber: "Bed-3",
            status: "maintenance",
          },

          {
            id: "bed-surgical-1-4",
            bedNumber: "Bed-4",
            status: "available",
          },
        ],
      },

      {
        id: "room-surgical-2",
        roomNumber: "Room 2",
        roomType: "Surgical Ward",

        beds: [
          {
            id: "bed-surgical-2-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-020",
              name: "Anil Yadav",
              uhid: "UHID123477",
            },

            ipdNumber: "IPD000144",
          },

          {
            id: "bed-surgical-2-2",
            bedNumber: "Bed-2",
            status: "available",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * ISOLATION WARD
   * ============================================================
   */

  {
    id: "ward-isolation",
    name: "Isolation Ward",
    code: "IW",
    icon: "bed",
    sortOrder: 6,

    rooms: [
      {
        id: "room-isolation-1",
        roomNumber: "Room ISO-1",
        roomType: "Isolation Ward",

        beds: [
          {
            id: "bed-isolation-1-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-021",
              name: "Nisha Patel",
              uhid: "UHID123478",
            },

            ipdNumber: "IPD000145",
          },

          {
            id: "bed-isolation-1-2",
            bedNumber: "Bed-2",
            status: "available",
          },
        ],
      },

      {
        id: "room-isolation-2",
        roomNumber: "Room ISO-2",
        roomType: "Isolation Ward",

        beds: [
          {
            id: "bed-isolation-2-1",
            bedNumber: "Bed-1",
            status: "available",
          },

          {
            id: "bed-isolation-2-2",
            bedNumber: "Bed-2",
            status: "maintenance",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * HDW
   * ============================================================
   */

  {
    id: "ward-hdw",
    name: "HDW",
    code: "HDW",
    icon: "bed",
    sortOrder: 7,

    rooms: [
      {
        id: "room-hdw-main",
        roomNumber: "Room HD",
        roomType: "HDW",

        beds: [
          {
            id: "bed-hdw-1",
            bedNumber: "Bed-1",
            status: "occupied",

            patient: {
              id: "patient-022",
              name: "Anjali Singh",
              uhid: "UHID123461",
            },

            ipdNumber: "IPD000128",
          },

          {
            id: "bed-hdw-2",
            bedNumber: "Bed-2",
            status: "occupied",

            patient: {
              id: "patient-023",
              name: "Manoj Patel",
              uhid: "UHID123462",
            },

            ipdNumber: "IPD000129",
          },

          {
            id: "bed-hdw-3",
            bedNumber: "Bed-3",
            status: "available",
          },

          {
            id: "bed-hdw-4",
            bedNumber: "Bed-4",
            status: "available",
          },
        ],
      },
    ],
  },

  /* ============================================================
   * OTHERS
   * ============================================================
   */

  {
    id: "ward-others",
    name: "Others",
    code: "OTH",
    icon: "bed",
    sortOrder: 8,

    rooms: [
      {
        id: "room-others-1",
        roomNumber: "Room O-1",
        roomType: "Others",

        beds: [
          {
            id: "bed-others-1-1",
            bedNumber: "Bed-1",
            status: "available",
          },

          {
            id: "bed-others-1-2",
            bedNumber: "Bed-2",
            status: "available",
          },

          {
            id: "bed-others-1-3",
            bedNumber: "Bed-3",
            status: "occupied",

            patient: {
              id: "patient-024",
              name: "Arun Kumar",
              uhid: "UHID123479",
            },

            ipdNumber: "IPD000146",
          },
        ],
      },
    ],
  },
];

/* ============================================================
 * BED STATUS OPTIONS
 * ============================================================
 *
 * Values match IPD_BED_STATUS_CONFIG in ipdConfig.js.
 *
 * ============================================================
 */

export const bedViewStatusOptionsMock = [
  {
    id: "available",
    value: "available",
    label: "Available",
  },

  {
    id: "occupied",
    value: "occupied",
    label: "Occupied",
  },

  {
    id: "reserved",
    value: "reserved",
    label: "Reserved",
  },

  {
    id: "maintenance",
    value: "maintenance",
    label: "Maintenance",
  },

  {
    id: "blocked",
    value: "blocked",
    label: "Blocked",
  },
];

/* ============================================================
 * COMPLETE BED VIEW MOCK
 * ============================================================
 */

export const bedViewMock = {
  wards: bedViewWardsMock,

  statusOptions: bedViewStatusOptionsMock,
};

/* ============================================================
 * DEFAULT EXPORT
 * ============================================================
 */

export default bedViewMock;