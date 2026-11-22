import "./SupplierForm.css";

import { supplierFormConfig } from "../../config/supplierFormConfig";

const SupplierForm = ({
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
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
              Select
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
            rows={4}
            onChange={handleChange}
          />
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={
              formData[field.name] || ""
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
      className="supplier-form"
      onSubmit={onSubmit}
    >

      <div className="supplier-form-layout">

        {supplierFormConfig.map(
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
                        field.type ===
                        "textarea"
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
            ? "Update Supplier"
            : "Save Supplier"}
        </button>

      </div>

    </form>
  );
};

export default SupplierForm;