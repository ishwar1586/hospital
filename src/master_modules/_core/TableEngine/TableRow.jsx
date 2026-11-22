// import { CellRender } from "@/master_modules/_core/TableEngine/CellRenderers";

// const TableRow = ({ row, columns }) => {
//   return (
//     <tr>
//       {columns.map((col) => (
//         <td key={col.key}>
//           {CellRender(col, row)}
//         </td>
//       ))}
//     </tr>
//   );
// };

// export default TableRow;

import { CellRender } from "@/master_modules/_core/TableEngine/CellRenderers";

const TableRow = ({ row, columns }) => {
  return (
    <tr>
      {columns.map((col) => (
        <td
          key={col.key}
          style={{ width: col.width }}
        >
          {CellRender(col, row)}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;