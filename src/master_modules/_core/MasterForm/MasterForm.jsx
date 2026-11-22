import "@/master_modules/_core/MasterForm/MasterForm.css";
import   FormFields from "@/master_modules/_core/MasterForm/FormFields";

const MasterForm = ({ config }) => {
  return (
    <div className="form-card">

      <h2>{config.title}</h2>
      <p className="form-subtitle">{config.subtitle}</p>

      {config.sections.map((section, i) => (
        <div key={i} className="form-section">

            <div className="section-title">
  {section.icon && (
    <span className="section-icon">
      {(() => {
        const Icon = section.icon;
        return <Icon size={6} style={{ width: "14px", height: "14px" }}  />;
      })()}
    </span>
  )}
  <h3>{section.title}</h3>
</div>



          {/* 🔥 FIELDS */}
          <div className="form-grid">
            {section.fields.map((field, idx) => (
              <FormFields key={idx} field={field} />
            ))}
          </div>

        </div>
      ))}

      {/* 🔥 ACTION BUTTONS */}
      <div className="form-actions">
        <button className="reset-btn">Reset Form</button>
        <button className="submit-btn">Submit Appointment</button>
      </div>

    </div>
  );
};

export default MasterForm;