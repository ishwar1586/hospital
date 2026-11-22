import TableEngine from "@/master_modules/_core/TableEngine/TableEngine";
import { customerTableConfig } from "@/master_modules/pharmacydashboard/customerlist/customerTable.config";
import { useCustomers } from "@/master_modules/pharmacydashboard/customerlist/UseCustomer";
import { customerMock } from "@/master_modules/pharmacydashboard/customerlist/CustomerList.mock";

const CustomerListPage = () => {
  const {  loading } = useCustomers();

  if (loading) return <div>Loading Customers...</div>;

  return (
    <div className="table-card compact">
      <TableEngine config={customerTableConfig} data={customerMock} />
    </div>
  );
};

export default CustomerListPage;