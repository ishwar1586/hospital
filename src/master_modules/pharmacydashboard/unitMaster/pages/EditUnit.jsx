import { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/editUnit.css";

import { unitMock }
from "../mock/unit.mock";

import UnitForm
from "../components/UnitForm/UnitForm";

const EditUnit = () => {

  const navigate =
    useNavigate();

  const { unitId } =
    useParams();

  const selectedUnit =
    unitMock.find(
      (unit) =>
        unit.id ===
        Number(unitId)
    );

  const initialData = {

    unitCode:
      selectedUnit?.unitCode || "",

    unitName:
      selectedUnit?.unitName || "",

    shortName:
      selectedUnit?.shortName || "",

    description:
      selectedUnit?.description || "",

    status:
      selectedUnit?.status || "",
  };

  const [formData,
    setFormData] =
    useState(initialData);

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "Updated Unit",
      formData
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
    <div className="edit-unit-container">

      <div className="page-header">

        <h2>
          Edit Unit
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
        mode="edit"
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

    </div>
  );
};

export default EditUnit;