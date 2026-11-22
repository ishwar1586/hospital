import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const paymentMethods = [

    {

        id:"cash",

        label:"Cash",

        description:"Receive payment by cash.",

        icon:<PaymentsOutlinedIcon />,

    },

    {

        id:"upi",

        label:"UPI",

        description:"Receive payment via UPI.",

        icon:<QrCode2OutlinedIcon />,

    },

    {

        id:"card",

        label:"Card",

        description:"Receive payment by debit or credit card.",

        icon:<CreditCardOutlinedIcon />,

    },

];

export default paymentMethods;