
import React from "react";

import AddOutlined from "@mui/icons-material/AddOutlined";
import MedicationOutlined from "@mui/icons-material/MedicationOutlined";

import "./MedicineSearchResults.css";


const MedicineSearchResults = ({
  results = [],
  onAddMedicine,
  addingMedicineId = null,
  disabled = false,
}) => {

  if (!Array.isArray(results) || results.length === 0) {
    return null;
  }


  const handleAddMedicine = (medicine) => {

    if (disabled || !medicine) return;

    const medicineId = medicine.id ?? medicine._id;

    if (!medicineId) {
      console.error(
        "Cannot add medicine: unique medicine ID is missing.",
        medicine
      );

      return;
    }

    if (String(addingMedicineId) === String(medicineId)) {
      return;
    }

    onAddMedicine?.(medicine);
  };


  return (
    <section
      className="prescription-search-results"
      aria-label="Medicine search results"
    >

      <div className="prescription-search-results__header">

        <div className="prescription-search-results__heading">

          <MedicationOutlined className="prescription-search-results__heading-icon" />

          <div>

            <h3 className="prescription-search-results__title">
              Search Results
            </h3>

            <p className="prescription-search-results__subtitle">
              {results.length} medicine
              {results.length !== 1 ? "s" : ""} found
            </p>

          </div>

        </div>

      </div>


      <div className="prescription-search-results__list">

        {results.map((medicine, index) => {

          const medicineId = medicine.id ?? medicine._id;

          const isAdding =
            String(addingMedicineId) === String(medicineId);

          const uniqueKey =
            medicineId ??
            medicine.code ??
            `${medicine.name}-${medicine.strength}-${index}`;


          return (

            <div
              className="prescription-search-results__item"
              key={uniqueKey}
            >

              <div className="prescription-search-results__medicine-info">

                <h4 className="prescription-search-results__medicine-name">

                  {medicine.name}

                  {medicine.strength
                    ? ` ${medicine.strength}`
                    : ""}

                </h4>


                <div className="prescription-search-results__medicine-meta">

                  {medicine.composition && (
                    <span>
                      {medicine.composition}
                    </span>
                  )}

                  {medicine.form && (
                    <span>
                      {medicine.form}
                    </span>
                  )}

                  {medicine.manufacturer && (
                    <span>
                      {medicine.manufacturer}
                    </span>
                  )}

                </div>


                {medicine.code && (

                  <span className="prescription-search-results__medicine-code">
                    Code: {medicine.code}
                  </span>

                )}

              </div>


              <button
                type="button"
                className="prescription-search-results__add-button"
                onClick={() => handleAddMedicine(medicine)}
                disabled={disabled || isAdding || !medicineId}
                aria-label={`Add ${medicine.name}`}
              >

                <AddOutlined />

                <span>
                  {isAdding ? "Adding..." : "Add"}
                </span>

              </button>

            </div>

          );

        })}

      </div>

    </section>
  );
};


export default MedicineSearchResults;
