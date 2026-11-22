
import {
  PersonOutlineOutlined,
  ReceiptLongOutlined,
  ShieldOutlined,
  // InvoiceOutlined,
  // ReviewsOutlined,
} from "@mui/icons-material";

export const ipdBillingStepperConfig = {
  ariaLabel: "IPD billing progress",
  steps: [
    {
      id: "patient-details",
      title: "Patient Details",
      subtitle: "Verify patient & admission",
      icon: PersonOutlineOutlined,
    },
    {
      id: "ipd-charges",
      title: "IPD Charges",
      subtitle: "Review service charges",
      icon: ReceiptLongOutlined,
    },
    {
      id: "billing-payment",
      title: "Billing & Payment",
      subtitle: "Settle final bill",
      icon: ShieldOutlined,
    },
    {
      id: "review",
      title: "Review & Confirm",
      subtitle: "Review & Generate Invoice",
      icon: ReceiptLongOutlined,
    },
  ],
};
