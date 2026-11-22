import "./MedicineForm.css";

import { medicineFormConfig } from "@/master_modules/pharmacydashboard/medicineMaster/config/medicineFormConfig";

const MedicineForm = ({
  formData,
  setFormData,
  mode = "add",
  onSubmit,
  onCancel,
  initialData,
}) => {

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const renderField = (field) => {

    switch (field.type) {

      case "select":
        return (
          <select
            name={field.name}
            value={
              formData[field.name] || ""
            }
            onChange={handleChange}
          >
            <option value="">
              {field.placeholder}
            </option>

            {field.options?.map(
              (option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              )
            )}
          </select>
        );

      case "textarea":
        return (
          <textarea
            name={field.name}
            value={
              formData[field.name] || ""
            }
            placeholder={
              field.placeholder
            }
            rows={4}
            onChange={handleChange}
          />
        );

      case "checkbox":
        return (
          <label className="checkbox-field">

            <input
              type="checkbox"
              name={field.name}
              checked={
                formData[field.name] ||
                false
              }
              onChange={handleChange}
            />

            Enable

          </label>
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={
              formData[field.name] || ""
            }
            placeholder={
              field.placeholder
            }
            disabled={
              field.disabled
            }
            onChange={handleChange}
          />
        );
    }
  };

  return (
    <form
      className="medicine-form"
      onSubmit={onSubmit}
    >

      <div className="medicine-form-layout">

        {medicineFormConfig.map(
          (section) => (

            <div
              key={section.sectionTitle}
              className="form-card"
            >

              <h3>
                {section.sectionTitle}
              </h3>

              <div className="form-grid">

                {section.fields.map(
                  (field) => (

                    <div
                      key={field.name}
                      className={`form-group ${
                        field.type === "textarea"
                          ? "full-width"
                          : ""
                      }`}
                    >

                      <label>
                        {field.label}

                        {field.required && (
                          <span className="required">
                            *
                          </span>
                        )}

                      </label>

                      {renderField(field)}

                    </div>
                  )
                )}

              </div>

            </div>
          )
        )}

      </div>

      <div className="form-footer">

       <button
  type="button"
  className="btn-secondary"
  onClick={onCancel}
>
  Cancel
</button>

      <button
  type="button"
  className="btn-secondary"
  onClick={() =>
    setFormData(initialData)
  }
>
  Reset
</button>

        <button
          type="submit"
          className="btn-primary"
        >
          {mode === "edit"
            ? "Update Medicine"
            : "Save Medicine"}
        </button>

      </div>

    </form>
  );
};

export default MedicineForm;