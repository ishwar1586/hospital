// import "./DrawerSection.css";

// import InfoItem from "./InfoItem";

// const DrawerSection = ({

//     title,

//     icon,

//     type,

//     stock,

// }) => {

//     const getSectionData = () => {

//         switch (type) {

//             case "medicine":

//                 return [

//                     {
//                         label: "Medicine Name",
//                         value: stock.medicineName,
//                     },

//                     {
//                         label: "Medicine Code",
//                         value: stock.medicineCode,
//                     },

//                     {
//                         label: "Category",
//                         value: stock.category,
//                     },

//                     {
//                         label: "Manufacturer",
//                         value: stock.manufacturer,
//                     },

//                     {
//                         label: "Supplier",
//                         value: stock.supplier,
//                     },

//                     {
//                         label: "HSN Code",
//                         value: stock.hsnCode,
//                     },

//                     {
//                         label: "Unit",
//                         value: stock.unit,
//                     },

//                 ];

//             case "stock":

//                 return [

//                     {
//                         label: "Current Stock",
//                         value: stock.currentStock,
//                     },

//                     {
//                         label: "Reserved Qty",
//                         value: stock.reservedQty,
//                     },

//                     {
//                         label: "Available Qty",
//                         value: stock.availableQty,
//                     },

//                     {
//                         label: "Reorder Level",
//                         value: stock.reorderLevel,
//                     },

//                     {
//                         label: "Location",
//                         value: stock.location,
//                     },

//                     {
//                         label: "Status",
//                         value: stock.status,
//                     },

//                 ];

//             case "pricing":

//                 return [

//                     {
//                         label: "Purchase Rate",
//                         value: `₹ ${stock.purchaseRate}`,
//                     },

//                     {
//                         label: "Selling Price",
//                         value: `₹ ${stock.sellingPrice}`,
//                     },

//                     {
//                         label: "MRP",
//                         value: `₹ ${stock.mrp}`,
//                     },

//                     {
//                         label: "Stock Value",
//                         value: `₹ ${stock.stockValue}`,
//                     },

//                 ];

//             case "batch":

//                 return [

//                     {
//                         label: "Batch Number",
//                         value: stock.batchNo,
//                     },

//                     {
//                         label: "Expiry Date",
//                         value: stock.expiryDate,
//                     },

//                 ];

//             default:

//                 return [];

//         }

//     };

//     const data = getSectionData();

//     return (

//         <div className="drawer-section">

//             <div className="drawer-section-header">

//                 <div className="drawer-section-icon">

//                     {icon}

//                 </div>

//                 <h3>

//                     {title}

//                 </h3>

//             </div>

//             <div className="drawer-section-body">

//                 {

//                     data.map((item) => (

//                         <InfoItem

//                             key={item.label}

//                             label={item.label}

//                             value={item.value}

//                         />

//                     ))

//                 }

//             </div>

//         </div>

//     );

// };

// export default DrawerSection;






