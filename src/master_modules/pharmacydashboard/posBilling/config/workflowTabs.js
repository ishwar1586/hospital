import {
    PersonOutlineOutlined,
    // DescriptionOutlined,
    MedicationOutlined,
    ShoppingCartOutlined,
    PaymentsOutlined,
} from "@mui/icons-material";

const workflowTabs = [

    {
        id: "customer",
        label: "Customer",
        icon: PersonOutlineOutlined,
        description: "Search & Select Patient",
    },

    {
        id: "medicine",
        label: "Medicines",
        icon: MedicationOutlined,
        description: "Medicine Selection",
    },

    {
        id: "billing",
        label: "Billing",
        icon: ShoppingCartOutlined,
        description: "Billing Cart",
    },

    // {
    //     id: "payment",
    //     label: "Payment",
    //     icon: PaymentsOutlined,
    //     description: "Payment & Invoice",
    // },

];

export default workflowTabs;