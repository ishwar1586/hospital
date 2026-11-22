
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "@/master_app/store/Slice/auth.slice";
// import "@/master_assets/styles/Header.css";

// const Header = ({ collapsed, setCollapsed }) => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <header className="app-header">

//       {/* LEFT */}
//       <div className="header-left">

//         <button
//           className="menu-btn"
//           onClick={() => setCollapsed(!collapsed)}
//         >
//           ☰
//         </button>

//       </div>

//       {/* RIGHT */}
//       <div className="header-right">
//         <span className="user-info">
//           {user?.name} ({user?.role})
//         </span>

//         <button
//           className="logout-btn"
//           onClick={() => dispatch(logout())}
//         >
//           Logout
//         </button>
//       </div>

//     </header>
//   );
// };

// export default Header;






import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/master_app/store/Slice/auth.slice";
import "@/master_assets/styles/Header.css";

import {
  FaBell,
} from "react-icons/fa";

import { useState, useRef, useEffect } from "react";

import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

import { notificationsMock } from "./notification.mock";

const Header = ({ collapsed, setCollapsed }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifRef = useRef();
  const profileRef = useRef();

  const unreadCount = notificationsMock.filter(
    (n) => n.unread
  ).length;

  /* OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target)
      ) {
        setShowNotif(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="app-header">

      {/* LEFT */}
      <div className="header-left">

        <button
          className="menu-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>

      </div>

      {/* RIGHT */}
      <div className="header-right">

        {/* NOTIFICATION */}
        <div
          className="notif-wrapper"
          ref={notifRef}
        >

          <div
            className="notif-icon-box"
            onClick={() =>
              setShowNotif(!showNotif)
            }
          >
            <FaBell className="bell-icon" />

            {unreadCount > 0 && (
              <span className="notif-badge">
                {unreadCount}
              </span>
            )}
          </div>

          {showNotif && (
            <NotificationDropdown
              notifications={notificationsMock}
            />
          )}

        </div>

        {/* PROFILE */}
        <div
          className="profile-wrapper"
          ref={profileRef}
        >

          <div
            className="profile-box"
            onClick={() =>
              setShowProfile(!showProfile)
            }
          >

            <div className="profile-info">
              <h4>{user?.name}</h4>
              <p>{user?.role}</p>
            </div>

            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-img"
            />

          </div>

          {showProfile && (
            <ProfileDropdown
              user={user}
              onLogout={() => dispatch(logout())}
            />
          )}

        </div>

      </div>

    </header>
  );
};

export default Header;
