import {
  Box,
  Modal,
} from "@mui/material";

import "@/master_modules/Roles/styles/Role.css";

const RoleModal = ({
  open,
  handleClose,
  children,
}) => {

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >

      <Box className="role-modal">
        {children}
      </Box>

    </Modal>
  );
};

export default RoleModal;