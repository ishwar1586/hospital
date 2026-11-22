
// src/master_modules/StaffManagement/components/StaffHeader/StaffHeader.jsx

import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Typography,
} from "@mui/material";

import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

import { staffHeaderConfig } from "../../config/staffHeader.config";

import "./StaffHeader.css";

const iconMap = {
  "person-add": PersonAddAlt1OutlinedIcon,
};

const StaffHeader = ({
  onAddStaff,
  onAction,
  permissions = [],
}) => {
  const config = staffHeaderConfig;

  const primaryAction = config.primaryAction;

  const hasPermission = (permission) => {
    if (!permission) return true;
    return permissions.includes(permission);
  };

  const ActionIcon = iconMap[primaryAction?.icon];

  const handlePrimaryAction = () => {
    if (primaryAction?.action === "ADD_STAFF") {
      onAddStaff?.();
      onAction?.(primaryAction.action);
    }
  };

  return (
    <header className="staff-header">
      <div className="staff-header__content">
        <div className="staff-header__title-group">
          {config.layout?.showBreadcrumb && (
            <Breadcrumbs
              separator={<NavigateNextRoundedIcon fontSize="small" />}
              className="staff-header__breadcrumbs"
              aria-label="breadcrumb"
            >
              {config.breadcrumbs?.map((item) => (
                <Typography
                  key={item.label}
                  component="span"
                  className="staff-header__breadcrumb-item"
                >
                  {item.label}
                </Typography>
              ))}
            </Breadcrumbs>
          )}

          <Typography
            component="h1"
            className="staff-header__title"
          >
            {config.title}
          </Typography>

          {config.layout?.showSubtitle && config.subtitle && (
            <Typography
              component="p"
              className="staff-header__subtitle"
            >
              {config.subtitle}
            </Typography>
          )}
        </div>

        {config.layout?.showPrimaryAction &&
          primaryAction?.visible &&
          !primaryAction?.disabled &&
          hasPermission(primaryAction.permissions?.required) && (
            <Button
              variant="contained"
              startIcon={ActionIcon ? <ActionIcon /> : undefined}
              onClick={handlePrimaryAction}
              className="staff-header__add-button"
            >
              {primaryAction.label}
            </Button>
          )}
      </div>
    </header>
  );
};

export default StaffHeader;
