import "./UnitHeaderActions.css";

import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const UnitHeaderActions = ({
  onImport,
  onExport,
  onAdd,
}) => {

  return (
    <div className="unit-header-actions">

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
        Add Unit
      </button>

    </div>
  );
};

export default UnitHeaderActions;