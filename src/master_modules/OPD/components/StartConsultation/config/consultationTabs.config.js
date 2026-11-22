
import MedicalServicesOutlined from "@mui/icons-material/MedicalServicesOutlined";
import BiotechOutlined from "@mui/icons-material/BiotechOutlined";
import MedicationOutlined from "@mui/icons-material/MedicationOutlined";
import ScienceOutlined from "@mui/icons-material/ScienceOutlined";
// import EventNoteOutlined from "@mui/icons-material/EventNoteOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";

export const consultationTabsConfig = {
  defaultTab: "consultation",

  tabs: [
    {
      id: "consultation",
      label: "Consultation",
      icon: MedicalServicesOutlined,
    },
    {
      id: "diagnosis",
      label: "Diagnosis",
      icon: BiotechOutlined,
    },
    {
      id: "prescription",
      label: "Prescription",
      icon: MedicationOutlined,
    },
    {
      id: "lab-radiology",
      label: "Lab / Radiology",
      icon: ScienceOutlined,
    },
    // {
    //   id: "follow-up",
    //   label: "Follow-up",
    //   icon: EventNoteOutlined,
    // },
    {
      id: "documents",
      label: "Documents",
      icon: DescriptionOutlined,
    },
  ],
};

export default consultationTabsConfig;
