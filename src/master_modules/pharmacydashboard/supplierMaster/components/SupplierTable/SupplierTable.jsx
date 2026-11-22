import TableEngine from "@/master_shared/components/TableEngine/TableEngine";

import { supplierColumns }
from "../../config/supplierColumns";

const SupplierTable = ({
  data,
  onAction,
}) => {

  return (
    <TableEngine
      columns={supplierColumns}
      data={data}
      rowKey="id"
      onAction={onAction}
    />
  );
};

export default SupplierTable;