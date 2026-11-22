import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";

import "@/master_modules/IPD/dischargePatientManagement/styles/dischargequickactions.css";

const actions = [
  {
    id: 1,
    title: "Discharge Summary",
    subtitle: "Generate discharge summary",
    icon: <DescriptionOutlinedIcon />,
    type: "summary",
  },

  {
    id: 2,
    title: "Doctor Clearance",
    subtitle: "Obtain doctor clearance",
    icon: <VerifiedUserOutlinedIcon />,
    type: "doctor",
  },

  {
    id: 3,
    title: "Billing Clearance",
    subtitle: "Complete billing process",
    icon: <ReceiptLongOutlinedIcon />,
    type: "billing",
  },

  {
    id: 4,
    title: "Print Discharge Slip",
    subtitle: "Print discharge documents",
    icon: <PrintOutlinedIcon />,
    type: "print",
  },

  {
    id: 5,
    title: "Discharge Analytics",
    subtitle: "View discharge reports",
    icon: <InsightsOutlinedIcon />,
    type: "analytics",
  },
];

const DischargeQuickActions = ({
  onSummary,
  onDoctorClearance,
  onBillingClearance,
  onPrint,
  onAnalytics,
}) => {

  const handleAction = (
    type
  ) => {

    switch (type) {

      case "summary":
        onSummary?.();
        break;

      case "doctor":
        onDoctorClearance?.();
        break;

      case "billing":
        onBillingClearance?.();
        break;

      case "print":
        onPrint?.();
        break;

      case "analytics":
        onAnalytics?.();
        break;

      default:
        break;
    }

  };

  return (

    <div className="discharge-actions-grid">

      {actions.map(
        (action) => (

          <div
            key={action.id}
            className="discharge-action-card"
            onClick={() =>
              handleAction(
                action.type
              )
            }
          >

            <div
              className={`action-icon ${action.type}`}
            >

              {action.icon}

            </div>

            <div className="action-content">

              <h4>
                {action.title}
              </h4>

              <p>
                {action.subtitle}
              </p>

            </div>

          </div>

        )
      )}

    </div>

  );

};

export default DischargeQuickActions;