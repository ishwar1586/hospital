import TableEngine from "@/master_shared/components/TableEngine/TableEngine";

import { unitColumns } from "../../config/unitColumns";

const UnitTable = ({
  data,
  onAction,
}) => {

  return (
    <TableEngine
      columns={unitColumns}
      data={data}
      rowKey="id"
      onAction={onAction}
    />
  );
};

export default UnitTable;