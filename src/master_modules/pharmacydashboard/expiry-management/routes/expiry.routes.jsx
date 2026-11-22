import { Navigate, Route, Routes } from "react-router-dom";
import ExpiryManagement from "../pages/ExpiryManagement";
import ExpiryHistory from "../pages/ExpiryHistory";
import ExpiryDetails from "../pages/ExpiryDetails";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<ExpiryManagement />} />
      <Route path="history" element={<ExpiryHistory />} />
      <Route path=":id" element={<ExpiryDetails />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
