import {
  MedicalServicesOutlined,
  BedOutlined,
  MedicationOutlined,
  ScienceOutlined,
  MonitorHeartOutlined,
  LocalHospitalOutlined,
  EmergencyOutlined,
  ContentPasteOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";

const departmentSelectionConfig = {
  /* =========================================
     MODAL
  ========================================= */

  modal: {
    title: "Select Billing Department",

    subtitle:
      "Choose department to generate bill/invoice",

    closeAction: "close",

    closeOnBackdropClick: false,

    closeOnEscape: true,
  },


  /* =========================================
     DEPARTMENT GRID
  ========================================= */

  grid: {
    columns: 3,

    gap: 12,

    responsive: {
      tablet: 2,
      mobile: 1,
    },
  },


  /* =========================================
     DEPARTMENT CARD
  ========================================= */

  card: {
    selectable: true,

    selectionMode: "single",

    showDescription: true,

    showIcon: true,

    disabledBehavior: "disabled",

    hoverEffect: true,
  },


  /* =========================================
     ICON MAPPING
  ========================================= */

  icons: {
    opd: MedicalServicesOutlined,

    ipd: BedOutlined,

    pharmacy: MedicationOutlined,

    laboratory: ScienceOutlined,

    radiology: MonitorHeartOutlined,

    "operation-theatre":
      LocalHospitalOutlined,

    emergency: EmergencyOutlined,

    procedure: ContentPasteOutlined,

    "other-charges":
      DescriptionOutlined,
  },


  /* =========================================
     CARD VISUAL VARIANTS
  ========================================= */

  variants: {
    opd: "blue",

    ipd: "indigo",

    pharmacy: "teal",

    laboratory: "purple",

    radiology: "orange",

    "operation-theatre": "sky",

    emergency: "red",

    procedure: "cyan",

    "other-charges": "blue",
  },


  /* =========================================
     SELECTION
  ========================================= */

  selection: {
    allowSelection: true,

    closeAfterSelection: false,

    emitSelectedDepartment: true,
  },
};

export default departmentSelectionConfig;