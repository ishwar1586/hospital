// import { useState } from "react";

// import {
//   FaChevronLeft,
//   FaChevronRight,
//   FaUserMd,
// } from "react-icons/fa";

// import "@/master_assets/styles/todayappointment.css";

// import {
//   appointmentsByDate,
// } from "@/master_modules/configs/todayappointment.mock";

// const dates = Object.keys(
//   appointmentsByDate
// );

// const getDay = (date) =>
//   new Date(date).toLocaleDateString(
//     "en-US",
//     {
//       weekday: "short",
//     }
//   );

// const getDate = (date) =>
//   new Date(date).getDate();

// const TodayAppointments = () => {

//   /* ACTIVE DATE */

//   const [activeDate, setActiveDate] =
//     useState(dates[0]);

//   /* SLIDER INDEX */

//   const [startIndex, setStartIndex] =
//     useState(0);

//   /* APPOINTMENT LIST */

//   const appointments =
//     appointmentsByDate[activeDate] || [];

//   /* CURRENT MONTH */

//   const currentMonth = new Date(
//     activeDate
//   ).toLocaleDateString("en-US", {
//     month: "long",
//     year: "numeric",
//   });

//   return (
//     <div className="today-card">

//       {/* HEADER */}

//       <div className="today-header">

//         <h3>Appointments</h3>

//         <span>{currentMonth}</span>

//       </div>

//       {/* DATE STRIP */}

//       <div className="day-strip">

//         {/* LEFT */}

//         <button
//           className="nav-btn"
//           disabled={startIndex === 0}
//           onClick={() =>
//             setStartIndex((prev) =>
//               prev - 1
//             )
//           }
//         >
//           <FaChevronLeft />
//         </button>

//         {/* DAYS */}

//         <div className="days-wrapper">

//           {dates
//             .slice(startIndex, startIndex + 5)
//             .map((date) => (

//               <div
//                 key={date}
//                 className={`day-item ${
//                   activeDate === date
//                     ? "active"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   setActiveDate(date)
//                 }
//               >

//                 <small>
//                   {getDay(date)}
//                 </small>

//                 <b>
//                   {getDate(date)}
//                 </b>

//               </div>
//             ))}

//         </div>

//         {/* RIGHT */}

//         <button
//           className="nav-btn"
//           disabled={
//             startIndex + 5 >= dates.length
//           }
//           onClick={() =>
//             setStartIndex((prev) =>
//               prev + 1
//             )
//           }
//         >
//           <FaChevronRight />
//         </button>

//       </div>

//       {/* COUNT */}

//       <p className="count-text">
//         {appointments.length} appointments
//         today
//       </p>

//       {/* LIST */}

//       <div className="appt-list">

//         {appointments.map((item) => (

//           <div
//             className="appt-item"
//             key={item.id}
//           >

//             {/* LEFT BAR */}

//             <span
//               className="appt-bar"
//               style={{
//                 background: item.color,
//               }}
//             />

//             {/* CONTENT */}

//             <div className="appt-content">

//               <h4>{item.name}</h4>

//               <p>{item.type}</p>

//               <small>
//                 <FaUserMd />
//                 {item.doctor}
//               </small>

//             </div>

//             {/* TIME */}

//             <div className="appt-time">
//               {item.time}
//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default TodayAppointments;






import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
  FaUserMd,
} from "react-icons/fa";

import "@/master_assets/styles/todayappointment.css";

import {
  appointmentsByDate,
} from "@/master_modules/configs/todayappointment.mock";

/* ALL DATES */

const dates = Object.keys(
  appointmentsByDate
);

/* GET DAY */

const getDay = (date) =>
  new Date(date).toLocaleDateString(
    "en-US",
    {
      weekday: "short",
    }
  );

/* GET DATE */

const getDate = (date) =>
  new Date(date).getDate();

const TodayAppointments = () => {

  /* ACTIVE INDEX */

  const [activeIndex, setActiveIndex] =
    useState(0);

  /* ACTIVE DATE */

  const activeDate =
    dates[activeIndex];

  /* APPOINTMENTS */

  const appointments =
    appointmentsByDate[activeDate] || [];

  /* MONTH */

  const currentMonth = new Date(
    activeDate
  ).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  /* VISIBLE DATES */

  const visibleStart = Math.max(
    activeIndex - 2,
    0
  );

  const visibleDates = dates.slice(
    visibleStart,
    visibleStart + 5
  );

  return (
    <div className="today-card">

      {/* HEADER */}

      <div className="today-header">

        <h3>Appointments</h3>

        <span>{currentMonth}</span>

      </div>

      {/* DATE STRIP */}

      <div className="day-strip">

        {/* LEFT BUTTON */}

        <button
          className="nav-btn"
          disabled={activeIndex === 0}
          onClick={() =>
            setActiveIndex((prev) =>
              Math.max(prev - 1, 0)
            )
          }
        >
          <FaChevronLeft />
        </button>

        {/* DAYS */}

        <div className="days-wrapper">

          {visibleDates.map((date) => {

            const originalIndex =
              dates.indexOf(date);

            return (
              <div
                key={date}
                className={`day-item ${
                  activeDate === date
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveIndex(
                    originalIndex
                  )
                }
              >

                <small>
                  {getDay(date)}
                </small>

                <b>
                  {getDate(date)}
                </b>

              </div>
            );
          })}

        </div>

        {/* RIGHT BUTTON */}

        <button
          className="nav-btn"
          disabled={
            activeIndex ===
            dates.length - 1
          }
          onClick={() =>
            setActiveIndex((prev) =>
              Math.min(
                prev + 1,
                dates.length - 1
              )
            )
          }
        >
          <FaChevronRight />
        </button>

      </div>

      {/* COUNT */}

      <p className="count-text">
        {appointments.length} appointments
        today
      </p>

      {/* APPOINTMENT LIST */}

      <div className="appt-list">

        {appointments.map((item) => (

          <div
            className="appt-item"
            key={item.id}
          >

            {/* LEFT COLOR BAR */}

            <span
              className="appt-bar"
              style={{
                background: item.color,
              }}
            />

            {/* CONTENT */}

            <div className="appt-content">

              <h4>{item.name}</h4>

              <p>{item.type}</p>

              <small>
                <FaUserMd size={14} />
                {item.doctor}
              </small>

            </div>

            {/* TIME */}

            <div className="appt-time">
              {item.time}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TodayAppointments;