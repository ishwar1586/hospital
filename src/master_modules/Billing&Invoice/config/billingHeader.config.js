import {
  AssessmentOutlined,
  SettingsOutlined,
  AddOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";

const billingHeaderConfig = {
  title: "Billing & Invoices",

  description:
    "Generate, manage and view bills/invoices for all departments. Track payments and outstanding amounts.",

  actions: [
    {
      id: "reports",
      label: "Reports",
      type: "button",
      icon: AssessmentOutlined,
      variant: "secondary",
      action: "reports",
    },

    {
      id: "settings",
      label: "Settings",
      type: "button",
      icon: SettingsOutlined,
      variant: "secondary",
      action: "settings",
    },

    {
      id: "generate-bill",
      label: "Generate New Bill",
      type: "dropdown",
      icon: AddOutlined,
      endIcon: KeyboardArrowDownOutlined,
      variant: "primary",
      action: "generate-bill",
    },
  ],
};

export default billingHeaderConfig;