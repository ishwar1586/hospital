import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/addManufacturer.css";

import ManufacturerForm from "../components/ManufacturerForm/ManufacturerForm";

const AddManufacturer = () => {

  const navigate = useNavigate();

  const initialData = {

    manufacturerCode:
      `MFG${Date.now()
        .toString()
        .slice(-4)}`,

    manufacturerName: "",

    contactPerson: "",

    mobile: "",

    email: "",

    gstNumber: "",

    drugLicenseNo: "",

    city: "",

    status: "Active",
  };

  const [formData, setFormData] =
    useState(initialData);

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "New Manufacturer",
      formData
    );

    alert(
      "Manufacturer Added Successfully"
    );

    navigate(
      "/module/manufacturermaster"
    );
  };

  const handleCancel = () => {

    const confirmed =
      window.confirm(
        "Discard changes?"
      );

    if (confirmed) {

      navigate(
        "/module/manufacturermaster"
      );

    }
  };

  return (
    <div className="add-manufacturer-container">

      <div className="page-header">

        <h2>
          Add Manufacturer
        </h2>

        <button
          className="back-btn"
          onClick={() =>
            navigate(
              "/module/manufacturermaster"
            )
          }
        >

          <ArrowBackOutlinedIcon />

          Back To Manufacturer List

        </button>

      </div>

      <ManufacturerForm
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

export default AddManufacturer;