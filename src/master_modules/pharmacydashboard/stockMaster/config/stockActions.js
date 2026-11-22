import {
    VisibilityOutlined,
    Inventory2Outlined,
    HistoryOutlined,
    EditOutlined,
    SyncAltOutlined,
    LocalShippingOutlined,
    QrCodeOutlined,
    PrintOutlined,
    FileDownloadOutlined,
} from "@mui/icons-material";

export const stockActions = [

    {
        id: "view",
        label: "View Details",
        icon: VisibilityOutlined,
        color: "#2563EB",
    },

    {
        id: "batchHistory",
        label: "Batch History",
        icon: Inventory2Outlined,
        color: "#7C3AED",
    },

    {
        id: "stockLedger",
        label: "Stock Ledger",
        icon: HistoryOutlined,
        color: "#059669",
    },

    {
        id: "edit",
        label: "Edit Stock",
        icon: EditOutlined,
        color: "#EA580C",
    },

    {
        id: "adjustStock",
        label: "Stock Adjustment",
        icon: SyncAltOutlined,
        color: "#DC2626",
    },

    {
        id: "transferStock",
        label: "Transfer Stock",
        icon: LocalShippingOutlined,
        color: "#0284C7",
    },

    {
        id: "printBarcode",
        label: "Print Barcode",
        icon: QrCodeOutlined,
        color: "#4F46E5",
    },

    {
        id: "printLabel",
        label: "Print Label",
        icon: PrintOutlined,
        color: "#475569",
    },

    {
        id: "export",
        label: "Export",
        icon: FileDownloadOutlined,
        color: "#16A34A",
    },

];

export default stockActions;