// import "./DrawerSection.css";

// import InfoItem from "./InfoItem";

// const DrawerSection = ({

//     title,

//     type,

//     stock,

// }) => {

//     const getSectionData = () => {

//         switch (type) {

//             /* ===================================== */

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
//                         label: "HSN Code",
//                         value: stock.hsnCode,
//                     },

//                     {
//                         label: "Unit",
//                         value: stock.unit,
//                     },

//                 ];

//             /* ===================================== */

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

//             /* ===================================== */

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

//             /* ===================================== */

//             case "supplier":

//                 return [

//                     {
//                         label: "Supplier",
//                         value: stock.supplier,
//                     },

//                     {
//                         label: "Manufacturer",
//                         value: stock.manufacturer,
//                     },

//                     {
//                         label: "Warehouse",
//                         value: stock.location,
//                     },

//                     {
//                         label: "Batch No.",
//                         value: stock.batchNo,
//                     },

//                     {
//                         label: "Expiry Date",
//                         value: stock.expiryDate,
//                     },

//                 ];

//             /* ===================================== */

//             default:

//                 return [];

//         }

//     };

//     const sectionData = getSectionData();

//     return (

//         <div className="drawer-section">

//             <div className="drawer-section-title">

//                 <h3>

//                     {title}

//                 </h3>

//             </div>

//             <div className="drawer-section-body">

//                 {

//                     sectionData.map((item) => (

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





import "./DrawerSection.css";
import InfoItem from "./InfoItem";

const DrawerSection = ({ title, type }) => {

    const sectionData = {

        medicine: [
            { label: "Medicine Name", value: "Cetirizine 10mg Tablet" },
            { label: "Medicine Code", value: "MED0004" },
            { label: "Category", value: "Antihistamine" },
            { label: "HSN Code", value: "30049099" },
            { label: "Unit", value: "Tablet" },
        ],

        stock: [
            { label: "Current Stock", value: "1200" },
            { label: "Reserved Qty", value: "50" },
            { label: "Available Qty", value: "1150" },
            { label: "Reorder Level", value: "200" },
            { label: "Location", value: "Main Store" },
            { label: "Status", value: "In Stock" },
        ],

        pricing: [
            { label: "Purchase Rate", value: "₹ 5.20" },
            { label: "Selling Price", value: "₹ 8.00" },
            { label: "MRP", value: "₹ 10.00" },
            { label: "Stock Value", value: "₹ 9,600.00" },
        ],

        supplier: [
            { label: "Supplier", value: "Medicare Distributors" },
            { label: "Manufacturer", value: "Dr. Reddy's" },
            { label: "Warehouse", value: "Main Store" },
            { label: "Batch No.", value: "BATCH24044" },
            { label: "Expiry Date", value: "31 May 2026" },
        ],

    };

    return (

        <div className="drawer-section">

            <div className="drawer-section-title">

                <h3>{title}</h3>

            </div>

            <div className="drawer-section-body">

                {sectionData[type]?.map((item) => (

                    <div
                        key={item.label}
                        className="drawer-section-item"
                    >

                        <InfoItem
                            label={item.label}
                            value={item.value}
                        />

                    </div>

                ))}

            </div>

        </div>

    );

};

export default DrawerSection;