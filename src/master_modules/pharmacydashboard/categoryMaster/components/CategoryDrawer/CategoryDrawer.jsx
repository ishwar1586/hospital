import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./CategoryDrawer.css";

const CategoryDrawer = ({
  open,
  onClose,
  category,
}) => {

  if (!category) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >

      <div className="category-drawer">

        <div className="drawer-header">

          <div>

            <h2>
              Category Details
            </h2>

            <p>
              {category.categoryCode}
            </p>

          </div>

          <IconButton
            onClick={onClose}
          >
            <CloseOutlinedIcon />
          </IconButton>

        </div>

        <div className="category-status-chip">
          {category.status}
        </div>

        <div className="drawer-card">

          <h3>
            Basic Information
          </h3>

          <div className="info-row">

            <span>
              Category Code
            </span>

            <strong>
              {category.categoryCode}
            </strong>

          </div>

          <div className="info-row">

            <span>
              Category Name
            </span>

            <strong>
              {category.categoryName}
            </strong>

          </div>

        </div>

        <div className="drawer-card">

          <h3>
            Description
          </h3>

          <p className="description-text">
            {category.description}
          </p>

        </div>

        <div className="drawer-card">

          <h3>
            Audit Information
          </h3>

          <div className="info-row">

            <span>
              Created Date
            </span>

            <strong>
              {category.createdDate}
            </strong>

          </div>

        </div>

      </div>

    </Drawer>
  );
};

export default CategoryDrawer;