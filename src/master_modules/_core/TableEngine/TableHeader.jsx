// const TableHeader = ({ columns }) => {
//   return (
//     <thead>
//       <tr>
//         {columns.map((col) => (
//           <th key={col.key}>{col.label}</th>
//         ))}
//       </tr>
//     </thead>
//   );
// };

// export default TableHeader;



const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            key={col.key}
            style={{ width: col.width }}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;