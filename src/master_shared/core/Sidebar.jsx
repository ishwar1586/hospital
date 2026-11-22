

import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { sidebarConfig } from "../configs/sidebar.config.js";
import "@/master_assets/styles/Sidebar.css";

/* 🔥 Recursive Item */
const SidebarItem = ({
  item,
  level = 0,
  openMap,
  setOpenMap,
  collapsed,
  pathname,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isOpen = openMap[level] === item.label;

  const Icon = item.icon;

  /* 🔥 ACTIVE CHECK */
  const isChildActive =
    hasChildren &&
    item.children.some((child) =>
      pathname.startsWith(child.path || "")
    );

  const handleClick = () => {
    setOpenMap((prev) => ({
      ...prev,
      [level]: prev[level] === item.label ? null : item.label,
    }));
  };

  /* 🔥 PARENT */
  if (hasChildren) {
    return (
      <div className="sidebar-group">
        <div
          className={`sidebar-link sidebar-parent ${
            isChildActive ? "active-parent" : ""
          }`}
          onClick={handleClick}
        >
          <div className="sidebar-item-content">
            {Icon && <Icon className="sidebar-icon" />}
            {!collapsed && <span>{item.label}</span>}
          </div>

          {!collapsed && (
            <span className={`arrow ${isOpen ? "open" : ""}`}>›</span>
          )}
        </div>

        <div className={`sidebar-children ${isOpen ? "open" : ""}`}>
          {item.children.map((child) => (
            <SidebarItem
              key={child.label}
              item={child}
              level={level + 1}
              openMap={openMap}
              setOpenMap={setOpenMap}
              collapsed={collapsed}
              pathname={pathname}
            />
          ))}
        </div>
      </div>
    );
  }

  /* 🔥 CHILD */
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `sidebar-link child ${isActive ? "active" : ""}`
      }
    >
      <div className="sidebar-item-content">
        {Icon && <Icon className="sidebar-icon" />}
        {!collapsed && <span>{item.label}</span>}
      </div>
    </NavLink>
  );
};

/* 🔥 MAIN SIDEBAR */
const Sidebar = ({ collapsed, /*setCollapsed*/ }) => {
  const role = useSelector((state) => state.auth.user?.role);
  const menuList = sidebarConfig[role] || [];
  const location = useLocation();

  const [openMap, setOpenMap] = useState({});

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

    {/* LOGO / TITLE */}
<div className="sidebar-brand">
  {!collapsed ? "RKM Hospital" : "RKM"}
</div>

      {menuList.map((item) => (
        <SidebarItem
          key={item.label}
          item={item}
          level={0}
          openMap={openMap}
          setOpenMap={setOpenMap}
          collapsed={collapsed}
          pathname={location.pathname}
        />
      ))}

    </div>
  );
};

export default Sidebar;