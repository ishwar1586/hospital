import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

import alerts from "@/master_modules/IPD/nursingStation/mock/alerts.mock";

import "@/master_modules/IPD/nursingStation/styles/alertspanel.css";

const AlertsPanel = () => {

  return (

    <div className="alerts-panel-card">

      <div className="alerts-header">

        <h3>
          Alerts & Notifications
        </h3>

        <span className="alert-count">
          {alerts.length}
        </span>

      </div>

      <div className="alerts-list">

        {alerts.map((alert) => (

          <div
            key={alert.id}
            className={`alert-item ${alert.type.toLowerCase()}`}
          >

            <div className="alert-icon">

              <NotificationsActiveOutlinedIcon />

            </div>

            <div className="alert-content">

              <h4>
                {alert.title}
              </h4>

              <p>
                {alert.message}
              </p>

              <span>
                {alert.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default AlertsPanel;