import { useState } from "react";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/editMedicine.css";

import {
  medicineMasterMock,
} from "../mock/medicineMaster.mock";

import MedicineForm from "../components/MedicineForm/MedicineForm";

const EditMedicine = () => {

  const navigate = useNavigate();

  const { medicineId } = useParams();

  const selectedMedicine =
    medicineMasterMock.find(
      medicine =>
        medicine.id === Number(medicineId)
    );

  const initialData = {
    medicineCode:
      selectedMedicine?.medicineCode || "",

    medicineName:
      selectedMedicine?.medicineName || "",

    category:
      selectedMedicine?.category || "",

    company:
      selectedMedicine?.company || "",

    unit:
      selectedMedicine?.unit || "",

    mrp:
      selectedMedicine?.mrp || "",

    salePrice:
      selectedMedicine?.salePrice || "",
  };

  const [formData, setFormData] =
    useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Updated Medicine",
      formData
    );

    alert("Medicine Updated Successfully");
  };

  const handleCancel = () => {

    const confirmed = window.confirm(
      "Discard changes?"
    );

    if (confirmed) {
      navigate(
        "/module/medicinemaster"
      );
    }
  };

  return (
    <div className="edit-container">

      <div className="page-header">

        <h2>Edit Medicine</h2>

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
        mode="edit"
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

    </div>
  );
};

export default EditMedicine;