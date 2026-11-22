import { Navigate, Route, Routes } from "react-router-dom";
import StockMaster from "../pages/StockMaster";
import AddStock from "../pages/AddStock";
import EditStock from "../pages/EditStock";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<StockMaster />} />
      <Route path="add" element={<AddStock />} />
      <Route path=":id/edit" element={<EditStock />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
