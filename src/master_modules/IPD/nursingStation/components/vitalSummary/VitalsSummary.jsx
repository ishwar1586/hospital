import FavoriteBorderOutlinedIcon
from "@mui/icons-material/FavoriteBorderOutlined";

import vitalsSummary
from "@/master_modules/IPD/nursingStation/mock/vitalsSummary.mock";

import "@/master_modules/IPD/nursingStation/styles/vitalsummary.css";

const VitalsSummary = () => {

  return (

    <div className="vitals-summary-card">

      <div className="vitals-header">

        <div className="vitals-title">

          <FavoriteBorderOutlinedIcon />

          <h3>
            Today's Vitals
          </h3>

        </div>

      </div>

      <div className="vitals-list">

        {vitalsSummary.map(
          (item) => {

            const percentage =
              (item.completed /
                item.total) *
              100;

            return (

              <div
                key={item.id}
                className="vital-item"
              >

                <div className="vital-top">

                  <span>
                    {item.title}
                  </span>

                  <span>
                    {item.completed}/
                    {item.total}
                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${percentage}%`,
                    }}
                  />

                </div>

              </div>

            );
          }
        )}

      </div>

    </div>

  );

};

export default VitalsSummary;