import LocationOnOutlinedIcon
from "@mui/icons-material/LocationOnOutlined";

import shiftSchedule
from "@/master_modules/IPD/nursingStation/mock/shiftSchedule.mock";

import "@/master_modules/IPD/nursingStation/styles/shiftschedule.css";

const ShiftSchedule = () => {

  return (

    <div className="shift-schedule-card">

      <div className="shift-schedule-header">

        <h3>
          Today's Schedule
        </h3>

      </div>

      <div className="schedule-timeline">

        {shiftSchedule.map((item) => (

          <div
            key={item.id}
            className="timeline-item"
          >

            <div className="timeline-time">

              {item.time}

            </div>

            <div className="timeline-center">

              <span className="timeline-dot">
                <LocationOnOutlinedIcon />
              </span>

            </div>

            <div className="timeline-content">

              <div className="timeline-top">

                <div>

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.ward}
                  </p>

                </div>

                <span
                  className={`schedule-status ${item.status
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                >
                  {item.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ShiftSchedule;