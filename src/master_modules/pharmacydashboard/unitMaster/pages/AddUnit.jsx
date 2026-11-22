import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/addUnit.css";

import UnitForm from "../components/UnitForm/UnitForm";

const AddUnit = () => {

  const navigate = useNavigate();

  const initialData = {
    unitCode:
      `U${Date.now()
        .toString()
        .slice(-4)}`,

    unitName: "",

    shortName: "",

    description: "",

    status: "Active",
  };

  const [formData, setFormData] =
    useState(initialData);

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "New Unit",
      formData
    );

    navigate(
      "/module/unitmaster"
    );
  };

  const handleCancel = () => {

    const confirmed =
      window.confirm(
        "Discard changes?"
      );

    if (confirmed) {

      navigate(
        "/module/unitmaster"
      );

    }
  };

  return (
    <div className="add-unit-container">

      <div className="page-header">

        <h2>
          Add Unit
        </h2>

        <button
          className="back-btn"
          onClick={() =>
            navigate(
              "/module/unitmaster"
            )
          }
        >

          <ArrowBackOutlinedIcon />

          Back To Unit List

        </button>

      </div>

      <UnitForm
        formData={formData}
        setFormData={setFormData}
        mode="add"
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

    </div>
  );
};

export default AddUnit;