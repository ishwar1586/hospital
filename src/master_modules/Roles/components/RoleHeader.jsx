import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import "@/master_modules/Roles/styles/Role.css";

const RoleHeader = ({
  onAddClick,
}) => {

  return (
    <Box className="role-header">

      <Box>

        <Typography className="role-title">
          Role List
        </Typography>

        <Typography className="role-subtitle">
          Manage hospital staff roles.
        </Typography>

      </Box>

      <Button
        startIcon={<AddIcon />}
        className="add-role-btn"
        onClick={onAddClick}
      >
        Add Role
      </Button>

    </Box>
  );
};

export default RoleHeader;