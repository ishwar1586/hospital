import LocalPrintshopOutlinedIcon
    from "@mui/icons-material/LocalPrintshopOutlined";

import MenuBookOutlinedIcon
    from "@mui/icons-material/MenuBookOutlined";

import AddOutlinedIcon
    from "@mui/icons-material/AddOutlined";

   import RefreshOutlinedIcon
    from "@mui/icons-material/RefreshOutlined";

const sampleCollectionHeaderActions = [

   {
    id: "refresh",
    label: "Refresh",
    icon: RefreshOutlinedIcon,
    variant: "secondary",
},

    {
        id: "printBarcode",

        label: "Print Barcode",

        icon: LocalPrintshopOutlinedIcon,

        variant: "secondary",
    },


    {
        id: "collectionManual",

        label: "Collection Manual",

        icon: MenuBookOutlinedIcon,

        variant: "secondary",
    },


    {
        id: "newSampleCollection",

        label: "New Sample Collection",

        icon: AddOutlinedIcon,

        variant: "primary",
    },

];


export default sampleCollectionHeaderActions;