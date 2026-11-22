import { Box, Container } from "@mui/material";

import { useState } from "react";

import TableEngineMax from "@/master_modules/TableEngineMax/TableEngineMax";

import ReusableForm from "@/master_modules/MasterFormTwo/MasterForm";

import RoleHeader from "@/master_modules/Roles/components/RoleHeader";

import RoleModal from "@/master_modules/Roles/components/RoleModal";

import {
  roleTableConfig,
} from "@/master_modules/Roles/config/roleTable.config";

import {
  addRoleFormConfig,
} from "@/master_modules/Roles/config/addRole.config";

import {
  roleMockData,
} from "@/master_modules/Roles/mock/role.mock";

import {
  addRoleMockData,
} from "@/master_modules/Roles/mock/addRole.mock";

import "@/master_modules/Roles/styles/Role.css";

const RoleList = () => {

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState(
    addRoleMockData
  );

  const [errors, setErrors] = useState({});

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* HANDLE SUBMIT */

  const handleSubmit = () => {

    console.log(formData);

    setOpen(false);
  };

  return (
    <Container maxWidth="xl">

      <Box className="role-page">

        {/* HEADER */}

        <RoleHeader
          onAddClick={() => setOpen(true)}
        />

        {/* TABLE */}

        <Box className="role-table-wrapper">

          <TableEngineMax
            config={{
              columns: roleTableConfig,
            }}

            data={roleMockData}
          />

        </Box>

        {/* MODAL */}

        <RoleModal
          open={open}
          handleClose={() => setOpen(false)}
        >

          <ReusableForm
            config={addRoleFormConfig}

            formData={formData}

            errors={errors}

            handleChange={handleChange}

            handleBlur={() => {}}

            handleSubmit={handleSubmit}

            handleCancel={() => setOpen(false)}
          />

        </RoleModal>

      </Box>

    </Container>
  );
};

export default RoleList;