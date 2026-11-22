import { Navigate, Route, Routes } from "react-router-dom";
import ManufacturerMaster from "../pages/ManufacturerMaster";
import AddManufacturer from "../pages/AddManufacturer";
import EditManufacturer from "../pages/EditManufacturer";
import ViewManufacturer from "../pages/ViewManufacturer";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<ManufacturerMaster />} />
      <Route path="add" element={<AddManufacturer />} />
      <Route path=":id/edit" element={<EditManufacturer />} />
      <Route path=":id" element={<ViewManufacturer />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
