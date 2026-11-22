import { Navigate, Route, Routes } from "react-router-dom";
import SupplierMaster from "../pages/SupplierMaster";
import AddSupplier from "../pages/AddSupplier";
import EditSupplier from "../pages/EditSupplier";

export default function SupplierRoutes() {
  return (
    <Routes>
      <Route index element={<SupplierMaster />} />
      <Route path="add" element={<AddSupplier />} />
      <Route path=":id/edit" element={<EditSupplier />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
