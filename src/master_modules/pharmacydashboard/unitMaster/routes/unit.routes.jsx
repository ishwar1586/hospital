import { Navigate, Route, Routes } from "react-router-dom";
import UnitMaster from "../pages/UnitMaster";
import AddUnit from "../pages/AddUnit";
import EditUnit from "../pages/EditUnit";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<UnitMaster />} />
      <Route path="add" element={<AddUnit />} />
      <Route path=":id/edit" element={<EditUnit />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
