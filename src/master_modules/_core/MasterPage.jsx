// import { useParams } from "react-router-dom";
// import MasterDashboard from "./MasterDashboard";
// import { moduleConfigs } from "../index";
// const MasterPage = () => {
//   const { moduleKey } = useParams();

//   // ✅ DASHBOARD SPECIAL CASE
//   if (moduleKey === "dashboard") {
//     return <MasterDashboard />;
//   }

//   const config = moduleConfigs[moduleKey];

//   if (!config) {
//     return <h2 style={{ padding: 20 }}>Module not found</h2>;
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>{config.title}</h2>
//       <p>{config.description || "Module loaded successfully"}</p>
//     </div>
//   );
// };

// export default MasterPage;

import { useParams } from "react-router-dom";
import { moduleConfigs } from "../index";

const MasterPage = () => {
  const { moduleKey } = useParams();

  console.log("MODULE KEY:", moduleKey);
  console.log("MODULE CONFIGS:", moduleConfigs);
  console.log("CONFIG FOR:", moduleKey, moduleConfigs[moduleKey]);

  const config = moduleConfigs[moduleKey];

  if (!config) {
    return <h2 style={{ padding: 20 }}>Module not found</h2>;
  }

  if (!config.component) {
    return <h2 style={{ padding: 20 }}>Component not defined</h2>;
  }

  const Component = config.component;
  return <Component />;
};

export default MasterPage;

