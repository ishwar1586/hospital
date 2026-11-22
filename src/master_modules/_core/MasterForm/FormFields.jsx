

// import { useState } from "react";
// import Select from "react-select";
// const FormFields = ({ field }) => {
//   const [value, setValue] = useState("");

//   switch (field.type) {

//     // 🔥 INPUTS
//     case "text":
//     case "email":
//     case "date":
//       return (
//         <div className={`floating-group ${value ? "active" : ""}`}>
//           <input
//             type={field.type}
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="floating-input"
//           />
//           <label>{field.label}</label>
//         </div>
//       );

// case "select": {
//   const options = field.options.map((opt) => ({
//     label: opt,
//     value: opt,
//   }));

//   const selectedOption = options.find(
//     (opt) => opt.value === value
//   );

//   return (
//     <div className={`floating-group ${value ? "active" : ""}`}>
//       <Select
//         className="react-select"
//         classNamePrefix="react-select"
//         options={options}
//         value={selectedOption}
//         onChange={(selected) => setValue(selected?.value || "")}
//         placeholder=""
//         isSearchable
//         isClearable
//       />
//       <label className="floating-label">{field.label}</label>
//     </div>
//   );
// }

//     // 🔥 TEXTAREA
//     // case "textarea":
//     //   return (
//     //     <div className={`floating-group ${value ? "active" : ""}`}>
//     //       <textarea
//     //         value={value}
//     //         onChange={(e) => setValue(e.target.value)}
//     //         className="floating-textarea"
//     //       />
//     //       <label>{field.label}</label>
//     //     </div>
//     //   );


//     case "textarea":
//   return (
//     <div
//       className={`floating-group textarea-group ${
//         field.fullWidth ? "full-width" : ""
//       }`}
//     >
//       <textarea
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         className="floating-textarea"
//       />
//       <label>{field.label}</label>
//     </div>
//   );
    

//    case "timeslot":
//   return (
//     <TimeSlotPicker
//       value={[field.key]}
//       onChange={(val) =>
//         ((prev) => ({
//           ...prev,
//           [field.key]: val,
//         }))
//       }
//     />
//   );



//     // 🔥 FILE
//     case "file":
//       return (
//         <div className="file-upload">
//           <button type="button">Choose file</button>
//           <span>or drag and drop file here</span>
//         </div>
//       );

//     default:
//       return null;
//   }
// };

// export default FormFields;





import { useState } from "react";
import Select from "react-select";
import TimeSlotPicker from "@/master_modules/_core/MasterForm/TimeSlotPicker";

const FormFields = ({ field }) => {
  const [value, setValue] = useState("");

  switch (field.type) {

    case "text":
    case "email":
    case "date":
      return (
        <div className={`floating-group ${value ? "active" : ""}`}>
          <input
            type={field.type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="floating-input"
          />
          <label>{field.label}</label>
        </div>
      );

    case "select": {
      const options = field.options.map((opt) => ({
        label: opt,
        value: opt,
      }));

      const selectedOption = options.find(
        (opt) => opt.value === value
      );

      return (
        <div className={`floating-group ${value ? "active" : ""}`}>
          <Select
            className="react-select"
            classNamePrefix="react-select"
            options={options}
            value={selectedOption}
            onChange={(selected) => setValue(selected?.value || "")}
            placeholder=""
            isSearchable
            isClearable
          />
          <label className="floating-label">{field.label}</label>
        </div>
      );
    }

    case "textarea":
      return (
        <div
          className={`floating-group textarea-group ${
            field.fullWidth ? "full-width" : ""
          }`}
        >
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="floating-textarea"
          />
          <label>{field.label}</label>
        </div>
      );

    /* 🔥 TIME SLOT FIELD */
    case "timeslot":
      return (
        <div className="full-width">
          <label className="time-label">{field.label}</label>

          <TimeSlotPicker
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
      );

   case "file":
  return (
    <div className="full-width">
      <label className="file-label">{field.label}</label>

      <div className="file-upload-box">
        <input
          type="file"
          className="file-input"
          onChange={(e) => console.log(e.target.files[0])}
        />

        <button type="button" className="file-btn">
          Choose file
        </button>

        <span className="file-text">
          or drag and drop file here
        </span>
      </div>
    </div>
  );

    default:
      return null;
  }
};

export default FormFields;