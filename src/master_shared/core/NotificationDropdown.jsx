import {
  FaEnvelope,
  FaUserInjured,
  FaCalendarCheck,
  FaCommentDots,
} from "react-icons/fa";

const getIcon = (type) => {
  switch (type) {
    case "mail":
      return <FaEnvelope className="notif-type-icon green" />;

    case "patient":
      return <FaUserInjured className="notif-type-icon blue" />;

    case "leave":
      return <FaCalendarCheck className="notif-type-icon orange" />;

    case "chat":
      return <FaCommentDots className="notif-type-icon purple" />;

    default:
      return null;
  }
};

const NotificationDropdown = ({ notifications }) => {
  return (
    <div className="notification-dropdown">

      {/* TOP */}
      <div className="notif-top">
        <h4>Notifications</h4>
        <button>Mark all as read</button>
      </div>

      {/* LIST */}
      <div className="notif-list">

        {notifications.map((item) => (
          <div
            className={`notif-item ${
              item.unread ? "unread" : ""
            }`}
            key={item.id}
          >

            <div className="notif-left">
              {getIcon(item.type)}
            </div>

            <div className="notif-content">
              <h5>{item.title}</h5>
              <p>{item.time}</p>

              {item.unread && (
                <button className="notif-btn">
                  View
                </button>
              )}
            </div>

          </div>
        ))}

      </div>

      {/* BOTTOM */}
      <div className="notif-footer">
        Read All Notifications
      </div>

    </div>
  );
};

export default NotificationDropdown;