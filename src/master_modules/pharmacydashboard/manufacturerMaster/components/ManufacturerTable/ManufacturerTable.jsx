import TableEngine from "@/master_shared/components/TableEngine/TableEngine";

import { manufacturerColumns } from "../../config/manufacturerColumns";

import "./ManufacturerTable.css";

const ManufacturerTable = ({
  data,
  onAction,
}) => {

  return (
    <div className="Manufacture-table">
    <TableEngine
      columns={manufacturerColumns}
      data={data}
      rowKey="id"
      onAction={onAction}
    />
    </div>
  );
};

export default ManufacturerTable;