// import { CellRenderersMax } from "@/master_modules/TableEngineMax/CellRendererMax";

// const TableRowMax = ({ row, columns }) => {
//   return (
//     <tr>
//       {columns.map((col) => (
//         <td key={col.key} style={{ width: col.width }}>
//           <div className="cell" title={row[col.key]}>
//             {CellRenderersMax(col, row)}
//           </div>
//         </td>
//       ))}
//     </tr>
//   );
// };

// export default TableRowMax;



import { CellRenderersMax } from "@/master_modules/TableEngineMax/CellRendererMax";

const TableRowMax = ({ row, columns }) => {
  return (
    <tr>
      {columns.map((col) => {
        const raw = row[col.key];
        return (
          <td key={col.key} style={{ width: col.width }}>
  <div className="cell" title={raw}>
    {CellRenderersMax(col, row)}
  </div>
</td>
        );
      })}
    </tr>
  );
};

export default TableRowMax;