import "@/master_modules/_core/TableEngine/TableEngine.css";
import {
  FiEdit,
  FiTrash2,
  FiClock,
  FiPhone,
  FiMail,
  FiFileText,
} from "react-icons/fi";

export const CellRender = (col, row) => {
  const value = row[col.key];

  switch (col.type) {
    // 🔥 USER (Avatar + Name + Email)
    case "user":
      return (
        <div className="user-cell">
          <div className="avatar">
            {(value || "").slice(0, 2).toUpperCase()}
          </div>

          <div>
            <div className="name">{value}</div>
            <div className="email truncate-text" title={row.email}>
              {row.email}
            </div>
          </div>
        </div>
      );

    case "status":
      return (
        <span className={`status ${String(value).toLowerCase()}`}>
          {value}
        </span>
      );

    // 🔥 Disease Tag
    case "disease": {
      const colors = [
        "#dc2626",
        "#16a34a",
        "#7c3aed",
        "#2563eb",
        "#f97316",
        "#06b6d4",
        "#e11d48",
      ];

      const index =
        value
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        colors.length;

      const color = colors[index];

      return (
        <span
          className="disease-tag"
          style={{
            color: color,
            border: `1px solid ${color}`,
          }}
        >
          {value}
        </span>
      );
    }

    // 🔥 Assigned Doctor
    case "assigneddoctor": {
      const color = "#2563eb";

      return (
        <span className="doctor-link truncate-text" style={{ color }} title={value}>
          {value}
        </span>
      );
    }

    // 🔥 Generic Name
    case "GenericName": {
      const colors = [
        "#2563eb",
        "#16a34a",
        "#7c3aed",
        "#f97316",
        "#06b6d4",
        "#e11d48",
      ];

      const index =
        value
          .split("")
          .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        colors.length;

      const color = colors[index];

      return (
        <span className="GenericName" style={{ color }}>
          {value}
        </span>
      );
    }

    // 🔥 USERS (Avatar + Name)
    case "users":
      return (
        <div className="user-cell">
          <div className="avatar">
            {(value || "").slice(0, 2).toUpperCase()}
          </div>

          <div>
            <div className="name truncate-text" title={value}>{value}</div>
          </div>
        </div>
      );

    case "gender":
      return (
        <span className={`gender ${String(value).toLowerCase()}`}>
          {value}
        </span>
      );

    // ⏰ Time
    case "time":
      return (
        <div className="icon-cell">
          <FiClock className="icon time" />
          <span>{value}</span>
        </div>
      );

    // 📱 Mobile (🔥 TRUNCATE + HOVER)
    case "mobile":
      return (
        <div className="icon-cell">
          <FiPhone className="icon mobile" />
          <span className="truncate-text" title={value}>
            {value}
          </span>
        </div>
      );

    // 📧 Email (🔥 TRUNCATE + HOVER)
    case "Email":
    case "email":
      return (
        <div className="icon-cell">
          <FiMail className="icon email" />
          <span className="truncate-text" title={value}>
            {value}
          </span>
        </div>
      );

    // 📄 Report
    case "report":
      return (
        <div className="report">
          <FiFileText size={14} className="edit" />
        </div>
      );

    // 🔥 ACTIONS
    case "actions":
      return (
        <div className="actions">
          <FiEdit  className="edit" />
          <FiTrash2  className="delete" />
        </div>
      );

    default:
      return value || "-";
  }
};

export default CellRender;