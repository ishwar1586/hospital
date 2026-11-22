import { Navigate, Route, Routes } from "react-router-dom";
import CategoryMaster from "../pages/CategoryMaster";
import AddCategory from "../pages/AddCategory";
import EditCategory from "../pages/EditCategory";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<CategoryMaster />} />
      <Route path="add" element={<AddCategory />} />
      <Route path=":id/edit" element={<EditCategory />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
