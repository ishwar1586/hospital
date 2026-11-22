
import {
  FiEdit,
  FiTrash2,
  FiClock,
  FiPhone,
  FiMail,
  FiEye,
  FiCheckCircle,
  FiPrinter,
} from "react-icons/fi";

export const CellRenderersMax = (
  col,
  row,
  handlers = {}
) => {

  const value = row[col.key] ?? "-";

  const {
    onEdit,
    onDelete,
    onView,
    onCheckIn,
    onPrint,
  } = handlers;

  switch (col.type) {

    // 🔥 USER CELL
    case "users":
      return (
        <div className="user-cell">

          <div className="avatar">
            {value?.slice(0, 2).toUpperCase()}
          </div>

          <div>

            <div className="name">
              <span
                className="truncate-text"
                title={value}
              >
                {value}
              </span>
            </div>

          </div>

        </div>
      );

    // 🔥 GENDER
    case "gender":
      return (
        <span
          className={`gender ${value.toLowerCase()}`}
        >
          {value}
        </span>
      );

    // 🔥 MOBILE
    case "mobile":
    case "phone":
      return (
        <div className="icon-cell">

          <FiPhone className="icon mobile" />

          <span
            className="truncate-text"
            title={value}
          >
            {value}
          </span>

        </div>
      );

    // 🔥 EMAIL
    case "Email":
    case "email":
      return (
        <div className="icon-cell">

          <FiMail className="icon email" />

          <span
            className="truncate-text"
            title={value}
          >
            {value}
          </span>

        </div>
      );

    // 🔥 DOCTOR
    case "doctor":
      return (
        <span
          className="truncate-text"
          title={value}
        >
          {value}
        </span>
      );

    // 🔥 ADDRESS / COMPANY / CURRENCY / LOCATION / NOTES
    // case "address":
    // case "company":
    // case "currency":
    // case "location":
    // case "notes":
    //   return (                                
    //     <span
    //       className="truncate-text"
    //       title={
    //         typeof value === "string"
    //           ? value
    //           : ""
    //       }
    //     >
    //       {value}
    //     </span>
    //   );


    case "company":
  return (
    <div className="company-cell">

      <span
        className="truncate-text company-name"
        title={row.company}
      >
        {row.company}
      </span>
    </div>
  );

  case "currency":
  return (
    <span
      className="truncate-text balance-cell "
      title={row.balance}
    >
      {row.balance}
    </span>
  );

  case "status":
  return (
    <div
      className={
        value === "Active"
          ? "active-status"
          : "inactive-status"
      }
    >
       <span className="status-dot">.</span>
      {value}
    </div>
  );

    // 🔥 INJURY
    case "injury":
      return (
        <span
          className="truncate-text"
          title={value}
        >
          {value}
        </span>
      );

    // 🔥 DATE
    case "date":
      return (
        <span
          className="truncate-text"
          title={value}
        >
          {value}
        </span>
      );

    // 🔥 ID
    case "id":
      return (
        <span
          className="truncate-text"
          title={value}
        >
          {value}
        </span>
      );

    // case "company":
    //   return (
    //     <span
    //       className="truncate-text"
    //       title={value}
    //     >
    //       {value}
    //     </span>
    //   );

  
    

   

    // 🔥 DESIGNATION
    case "designation":
      return (
        <span
          className="truncate-text"
          title={value}
        >
          {value}
        </span>
      );

    // 🔥 TIME
    case "time":
      return (
        <div className="icon-cell">

          <FiClock className="icon time" />

          {value}

        </div>
      );

    // 🔥 ASSIGNED DOCTOR
    case "assigneddoctor": {

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
          .reduce(
            (acc, char) =>
              acc + char.charCodeAt(0),
            0
          ) % colors.length;

      const color = colors[index];

      return (
        <span
          className="Assigned-doctor"
          style={{ color }}
        >
          {value}
        </span>
      );
    }

    // 🔥 APPOINTMENT STATUS
    case "appointmentstatus":

      return (
        <span
          className={`appointment-status ${value.toLowerCase()}`}
        >
          {value}
        </span>
      );

    // 🔥 VISIT TYPE
    case "visittype":

      return (
        <span
          className={`visit-type ${value.toLowerCase().replace(/\s/g, "-")}`}
        >
          {value}
        </span>
      );

    // 🔥 ACTIONS
    case "actions":

      return (

        <div className="actions">

          {/* VIEW */}
          {col.actions?.includes("view") && (
            <FiEye
              className="View"
              onClick={() => onView?.(row)}
            />
          )}

          {/* EDIT */}
          {col.actions?.includes("edit") && (
            <FiEdit
              className="edit"
              onClick={() => onEdit?.(row)}
            />
          )}

          {/* DELETE */}
          {col.actions?.includes("delete") && (
            <FiTrash2
              className="delete"
              onClick={() => onDelete?.(row)}
            />
          )}

          {/* CHECK-IN */}
          {col.actions?.includes("checkin") && (
            <button
              className="checkin-btn"
              onClick={() => onCheckIn?.(row)}
            >
              <FiCheckCircle />
              {/* Check-In */}
            </button>
          )}

          {/* PRINT */}
          {col.actions?.includes("print") && (
            <button
              className="print-btn"
              onClick={() => onPrint?.(row)}
            >
              <FiPrinter />
              Print
            </button>
          )}

        </div>

      );

    // 🔥 DEFAULT
    default:
      return value;
  }
};

export default CellRenderersMax;