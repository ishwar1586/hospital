import TableEngine from "@/master_shared/components/TableEngine/TableEngine";

import { categoryColumns } from "../../config/categoryColumns";

const CategoryTable = ({
  data,
  onAction,
}) => {

  return (
    <TableEngine
      columns={categoryColumns}
      data={data}
      rowKey="id"
      onAction={onAction}
    />
  );
};

export default CategoryTable;