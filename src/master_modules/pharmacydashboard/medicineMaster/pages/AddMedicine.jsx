import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import MedicineForm from "../components/MedicineForm/MedicineForm";

import "./../styles/addMedicine.css";

const AddMedicine = () => {

  const navigate = useNavigate();

  const initialData = {
    medicineCode: "",
    barcode: "",
    medicineName: "",
    category: "",
    manufacturer: "",
    unit: "",
    hsnCode: "",
    description: "",
    purchasePrice: "",
    salePrice: "",
    mrp: "",
    gst: "12",
    batchTracking: false,
    expiryTracking: false,
    reorderLevel: "",
    status: "Active",
  };

  const [formData, setFormData] =
    useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "New Medicine",
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
        "/module/medicinemaster"
      );
    }
  };

  return (
    <div className="add-container">

      <div className="page-header">

        <h2>Add New Medicine</h2>

        <button
          className="back-btn"
          onClick={() =>
            navigate(
              "/module/medicinemaster"
            )
          }
        >
          <ArrowBackOutlinedIcon />
          Back to Medicine List
        </button>

      </div>

      <MedicineForm
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

export default AddMedicine;