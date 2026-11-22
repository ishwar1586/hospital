// import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const headerConfig = {
  title: "Test Master",

  subtitle:
    "Manage laboratory tests, pricing, sample types, reference ranges and workflow.",

//   icon: ScienceOutlinedIcon,

  actions: [
    {
      id: "refresh",
      label: "Refresh",
      icon: RefreshOutlinedIcon,
      variant: "secondary",
    },
    {
      id: "import",
      label: "Import",
      icon: FileUploadOutlinedIcon,
      variant: "secondary",
    },
    {
      id: "export",
      label: "Export",
      icon: FileDownloadOutlinedIcon,
      variant: "secondary",
    },
    {
      id: "addTest",
      label: "Add New Test",
      icon: AddOutlinedIcon,
      variant: "primary",
    },
  ],
};

export default headerConfig;