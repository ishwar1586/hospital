import TuneOutlinedIcon
    from "@mui/icons-material/TuneOutlined";

import PrintOutlinedIcon
    from "@mui/icons-material/PrintOutlined";

import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";

import MoveToInboxOutlinedIcon
    from "@mui/icons-material/MoveToInboxOutlined";


const headerActions = [

    {
        id: "updatePriority",

        label: "Update Priority",

        icon: TuneOutlinedIcon,

        variant: "secondary",
    },


    {
        id: "printWorklist",

        label: "Print Worklist",

        icon: PrintOutlinedIcon,

        variant: "secondary",
    },


    {
        id: "refresh",

        label: "Refresh",

        icon: RefreshOutlinedIcon,

        variant: "secondary",
    },


    {
        id: "receiveFromProcessing",

        label: "Receive from Processing",

        icon: MoveToInboxOutlinedIcon,

        variant: "primary",
    },

];


export default headerActions;