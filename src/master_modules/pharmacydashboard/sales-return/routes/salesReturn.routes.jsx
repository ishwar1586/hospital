import { Navigate, Route, Routes } from "react-router-dom";
import SalesReturn from "../pages/SalesReturn";
import SalesReturnHistory from "../pages/SalesReturnHistory";
import SalesReturnDetails from "../pages/SalesReturnDetails";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<SalesReturn />} />
      <Route path="history" element={<SalesReturnHistory />} />
      <Route path=":id" element={<SalesReturnDetails />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
