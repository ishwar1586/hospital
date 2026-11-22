import {
    PersonOutlineOutlined,
    MedicalServicesOutlined,
    LocalHospitalOutlined,
    BadgeOutlined,
} from "@mui/icons-material";

export const customerTypes = [

    {
        id: "walkin",
        label: "Walk-in Customer",
        description: "Retail Customer",
        icon: PersonOutlineOutlined,
    },

    {
        id: "opd",
        label: "OPD Patient",
        description: "Out Patient",
        icon: MedicalServicesOutlined,
    },

    {
        id: "ipd",
        label: "IPD Patient",
        description: "Admitted Patient",
        icon: LocalHospitalOutlined,
    },

    {
        id: "staff",
        label: "Staff",
        description: "Hospital Employee",
        icon: BadgeOutlined,
    },

];

export default customerTypes;