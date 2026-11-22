// import { useState } from "react";

// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// import { purchaseColumns } from "../../config/purchaseColumns";
// import { purchaseActions } from "../../config/purchaseActions";

// import "./PurchaseTable.css";    

// const PurchaseTable = ({
//     data = [],
//     onAction,
// }) => {

//     const [anchorEl,
//         setAnchorEl] =
//         useState(null);

//     const [selectedRow,
//         setSelectedRow] =
//         useState(null);

//     const handleMenuOpen = (
//         event,
//         row
//     ) => {

//         setAnchorEl(
//             event.currentTarget
//         );

//         setSelectedRow(row);
//     };

//     const handleMenuClose =
//         () => {

//             setAnchorEl(null);

//             setSelectedRow(null);
//         };

//     const renderStatus =
//         (status) => {

//             const className =
//                 status
//                     .toLowerCase()
//                     .replaceAll(
//                         " ",
//                         "-"
//                     );

//             return (

//                 <span
//                     className={`purchase-status ${className}`}
//                 >
//                     {status}
//                 </span>

//             );
//         };

//     return (

//         <div className="purchase-table-wrapper">

//             <table className="purchase-table">

//                 <thead>

//                     <tr>

//                         <th>

//                             <input
//                                 type="checkbox"
//                             />

//                         </th>

//                         {purchaseColumns
//                             .filter(
//                                 (
//                                     col
//                                 ) =>
//                                     col.key !==
//                                     "actions"
//                             )
//                             .map(
//                                 (
//                                     column
//                                 ) => (

//                                     <th
//                                         key={
//                                             column.key
//                                         }
//                                     >

//                                         {
//                                             column.label
//                                         }

//                                     </th>
//                                 )
//                             )}

//                         <th>
//                             Actions
//                         </th>

//                     </tr>

//                 </thead>

//                 <tbody>

//                     {data.map(
//                         (row) => (

//                             <tr
//                                 key={row.id}
//                             >

//                                 <td>

//                                     <input
//                                         type="checkbox"
//                                     />

//                                 </td>

//                                 <td>
//                                     {
//                                         row.poNumber
//                                     }
//                                 </td>

//                                 <td>
//                                     {
//                                         row.poDate
//                                     }
//                                 </td>

//                                 <td>
//                                     {
//                                         row.supplierName
//                                     }
//                                 </td>

//                                 <td>
//                                     {
//                                         row.poType
//                                     }
//                                 </td>

//                                 <td>
//                                     ₹{" "}
//                                     {row.totalAmount.toLocaleString()}
//                                 </td>

//                                 <td>
//                                     ₹{" "}
//                                     {row.receivedAmount.toLocaleString()}
//                                 </td>

//                                 <td>
//                                     ₹{" "}
//                                     {row.pendingAmount.toLocaleString()}
//                                 </td>

//                                 <td>

//                                     {renderStatus(
//                                         row.status
//                                     )}

//                                 </td>

//                                 <td>
//                                     {
//                                         row.expectedDate
//                                     }
//                                 </td>

//                                 <td>

//                                     <button
//                                         className="action-btn"
//                                         onClick={(
//                                             e
//                                         ) =>
//                                             handleMenuOpen(
//                                                 e,
//                                                 row
//                                             )
//                                         }
//                                     >

//                                         <MoreVertOutlinedIcon />

//                                     </button>

//                                 </td>

//                             </tr>
//                         )
//                     )}

//                 </tbody>

//             </table>

//             <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(
//                     anchorEl
//                 )}
//                 onClose={
//                     handleMenuClose
//                 }
//             >

//                 {purchaseActions.map(
//                     (
//                         action
//                     ) => {

//                         const Icon =
//                             action.icon;

//                         return (

//                             <MenuItem
//                                 key={
//                                     action.key
//                                 }
//                                 onClick={() => {

//                                     onAction?.(
//                                         action.key,
//                                         selectedRow
//                                     );

//                                     handleMenuClose();
//                                 }}
//                             >

//                                 <Icon
//                                     fontSize="small"
//                                     style={{
//                                         marginRight:
//                                             10,
//                                     }}
//                                 />

//                                 {
//                                     action.label
//                                 }

//                             </MenuItem>
//                         );
//                     }
//                 )}

//             </Menu>

//         </div>

//     );
// };

// export default PurchaseTable;




import TableEngine from "@/master_shared/components/TableEngine/TableEngine";
// import "./PurchaseTable.css";
import { purchaseColumns }
from "../../config/purchaseColumns";

const PurchaseTable = ({
    data,
    onAction,
}) => {

    return (
         
        <div className="purchase-table">
        <TableEngine
            columns={purchaseColumns}
            data={data}
            onAction={onAction}
            // enableSelection
            enableActions
             rowKey="id"
        />
</div>
       

    );
};

export default PurchaseTable;