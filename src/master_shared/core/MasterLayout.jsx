
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "@/master_shared/core/Sidebar.jsx";
// import { useState } from "react";
// import "@/master_assets/styles/MasterLayout.css";

// const MasterLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <div className="master-layout">

//       {/* 🔥 SIDEBAR */}
//       <aside className={`master-sidebar ${collapsed ? "collapsed" : ""}`}>
//         <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
//       </aside>

//       {/* 🔥 MAIN */}
//       <div className="master-main">

//         <header className="master-header">
//           <Header />
//         </header>

//         <main className="master-content">
//           <Outlet />
//         </main>

//       </div>
//     </div>
//   );
// };

// export default MasterLayout;






import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "@/master_shared/core/Sidebar.jsx";
import { useState } from "react";
import "@/master_assets/styles/MasterLayout.css";

const MasterLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="master-layout">

      {/* SIDEBAR */}
      <aside className={`master-sidebar ${collapsed ? "collapsed" : ""}`}>
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      </aside>

      {/* MAIN */}
      <div className="master-main">

        {/* HEADER */}
        <header className="master-header">
          <Header
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        </header>

        {/* CONTENT */}
        <main className="master-content">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MasterLayout;
