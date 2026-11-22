import { Navigate, Route, Routes } from "react-router-dom";
import PhysicalStockAudit from "../pages/PhysicalStockAudit";
import CreateAudit from "../pages/CreateAudit";
import EditAudit from "../pages/EditAudit";
import AuditHistory from "../pages/AuditHistory";

export default function ModuleRoutes() {
  return (
    <Routes>
      <Route element={<PhysicalStockAudit />} />
      <Route path="create" element={<CreateAudit />} />
      <Route path=":id/edit" element={<EditAudit />} />
      <Route path="history" element={<AuditHistory />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
}
