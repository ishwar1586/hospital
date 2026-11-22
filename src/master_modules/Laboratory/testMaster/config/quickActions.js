import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";

const quickActions = [
    {
        id: "add-test",
        label: "Add New Test",
        description: "Create a new laboratory test",
        icon: AddOutlinedIcon,
        action: "addTest",
        variant: "primary",
    },

    {
        id: "import-tests",
        label: "Import Tests",
        description: "Import tests in bulk",
        icon: UploadFileOutlinedIcon,
        action: "importTests",
        variant: "blue",
    },

    {
        id: "export-tests",
        label: "Export Tests",
        description: "Download test master data",
        icon: DownloadOutlinedIcon,
        action: "exportTests",
        variant: "green",
    },

    {
        id: "manage-categories",
        label: "Manage Categories",
        description: "Manage laboratory test categories",
        icon: CategoryOutlinedIcon,
        action: "manageCategories",
        variant: "orange",
    },
];

export default quickActions;