import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import "@/master_modules/_core/MasterForm/timeslotpicker.css";
const groups = {
  morning: ["09:00 AM", "10:00 AM", "11:00 AM"],
  afternoon: ["01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"],
  evening: ["05:00 PM", "06:00 PM", "07:00 PM"],
};

const TimeSlotPicker = ({ value, onChange }) => {
  const [selected, setSelected] = useState(value || "");

  const handleSelect = (time) => {
    setSelected(time);
    onChange(time);
  };

  return (
    <div className="time-slot-wrapper">
      {Object.entries(groups).map(([key, times]) => (
        <div key={key} className="time-col">

          <div className="time-title">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>

          {times.map((t) => (
            <div
              key={t}
              className={`time-item ${selected === t ? "active" : ""}`}
              onClick={() => handleSelect(t)}
            >
              {selected === t && <FiCheck className="check" />}
              {t}
            </div>
          ))}

        </div>
      ))}
    </div>
  );
};

export default TimeSlotPicker;