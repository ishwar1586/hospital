import { useState } from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import "./../styles/editManufacturer.css";

import {
  manufacturerMock,
} from "../mock/manufacturer.mock";

import ManufacturerForm from "../components/ManufacturerForm/ManufacturerForm";

const EditManufacturer = () => {

  const navigate = useNavigate();

  const { manufacturerId } =
    useParams();

  const selectedManufacturer =
    manufacturerMock.find(
      (manufacturer) =>
        manufacturer.id ===
        Number(manufacturerId)
    );

  const initialData = {
    manufacturerCode:
      selectedManufacturer?.manufacturerCode || "",

    manufacturerName:
      selectedManufacturer?.manufacturerName || "",

    contactPerson:
      selectedManufacturer?.contactPerson || "",

    mobile:
      selectedManufacturer?.mobile || "",

    email:
      selectedManufacturer?.email || "",

    gstNumber:
      selectedManufacturer?.gstNumber || "",

    drugLicenseNo:
      selectedManufacturer?.drugLicenseNo || "",

    city:
      selectedManufacturer?.city || "",

    status:
      selectedManufacturer?.status || "",
  };

  const [formData, setFormData] =
    useState(initialData);

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "Updated Manufacturer",
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
        "/module/manufacturermaster"
      );

    }
  };

  return (
    <div className="edit-manufacturer-container">

      <div className="page-header">

        <h2>
          Edit Manufacturer
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
        mode="edit"
        initialData={initialData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />

    </div>
  );
};

export default EditManufacturer;