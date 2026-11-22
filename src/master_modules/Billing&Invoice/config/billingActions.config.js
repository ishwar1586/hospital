import {
  VisibilityOutlined,
  EditOutlined,
  PaymentOutlined,
  PrintOutlined,
  DownloadOutlined,
} from "@mui/icons-material";

const billingActionsConfig = [
  {
    id: "view",
    label: "View Bill",
    icon: VisibilityOutlined,
    action: "view",
  },
  {
    id: "edit",
    label: "Edit Bill",
    icon: EditOutlined,
    action: "edit",
  },
  {
    id: "payment",
    label: "Add Payment",
    icon: PaymentOutlined,
    action: "payment",
  },
  {
    id: "print",
    label: "Print Bill",
    icon: PrintOutlined,
    action: "print",
  },
  {
    id: "download",
    label: "Download Invoice",
    icon: DownloadOutlined,
    action: "download",
  },
];

export default billingActionsConfig;