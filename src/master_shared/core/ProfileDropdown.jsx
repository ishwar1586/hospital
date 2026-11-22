import {
  FaUser,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const ProfileDropdown = ({ /*user,*/ onLogout }) => {
  return (
    <div className="profile-dropdown">

      <div className="profile-menu-item">
        <FaUser />
        <span>Account</span>
      </div>

      <div className="profile-menu-item">
        <FaEnvelope />
        <span>Inbox</span>
      </div>

      <div className="profile-menu-item">
        <FaCog />
        <span>Settings</span>
      </div>

      <div
        className="profile-menu-item logout"
        onClick={onLogout}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </div>

    </div>
  );
};

export default ProfileDropdown;