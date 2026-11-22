import "./SupplierHeaderActions.css";

import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const SupplierHeaderActions = ({
  onImport,
  onExport,
  onAdd,
}) => {

  return (
    <div className="supplier-header-actions">

      <button
        type="button"
        className="action-btn secondary"
        onClick={onImport}
      >
        <UploadOutlinedIcon fontSize="small" />
        Import
      </button>

      <button
        type="button"
        className="action-btn secondary"
        onClick={onExport}
      >
        <DownloadOutlinedIcon fontSize="small" />
        Export
      </button>

      <button
        type="button"
        className="action-btn primary"
        onClick={onAdd}
      >
        <AddOutlinedIcon fontSize="small" />
        Add Supplier
      </button>

    </div>
  );
};

export default SupplierHeaderActions;